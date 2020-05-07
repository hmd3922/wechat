<template>
    <div class="chats">
        <Header title="微信" btn_icon="plus" />
        <div class="container">
            <UserCell
                v-for="chatItem in chatDataList"
                :key="chatItem._id"
                :user="chatItem.target"
                :count="chatItem.count"
                @click="
                    $router.push({
                        name: 'chat',
                        params: { user: chatItem.target },
                    })
                "
            />
        </div>
    </div>
</template>

<script>
import Header from "_c/Header.vue";
import UserCell from "_c/UserCell";
import Wsocket from "@/socket.js";
import { msg } from "@/api/message.js";
export default {
    name: "chats",
    components: {
        Header,
        UserCell,
    },
    data() {
        return {
            chatDataList: [],
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
    },

    beforeRouteEnter(to, from, next) {
        // ...
        next((vm) => {
            msg().then((res) => {
                console.log(res.data);
                vm.chatDataList = res.data;
            });
        });
    },
    mounted() {
        Wsocket.init(
            { user: this.user },
            (message) => {
                console.log(message);
            },
            (error) => {
                console.log(error);
            }
        );
    },
    created() {
        console.log(this.user.id);
    },
    methods: {
        setMsgCount(message) {
            // 判断消息列表中是否有该用户
            let chatUser = this.chatDataList.filter((chatItem) => {
                return chatItem.target._id == message.from;
            });
            console.log(chatUser);
            if (chatUser.length > 0) {
                chatUser[0].count++;
                chatUser[0].message.push({
                    msg: message.msg,
                    source: "other",
                });
            } else {
                // 如果不存在在列表，获取用户信息，实现提醒
                this.getUserInfo();
            }
        },
        getUserInfo(message) {
            // 根据id查询用户信息
        },
    },
};
</script>

<style scoped lang="less">
.chats {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.container {
    width: 100%;
    height: calc(100% - 50px);
    margin-top: 50px;
    overflow: auto;
}
</style>
