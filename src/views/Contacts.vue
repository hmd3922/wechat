<template>
    <div class="address_book">
        <Header title="通讯录" btn_icon="user-plus" />
        <div class="container">
            <!-- 上面 搜索框 -->
            <div class="search_wrap">
                <div class="sear_content">
                    <i class="fa fa-search"></i>
                    <input
                        type="text"
                        placeholder="搜索"
                        v-model="search_value"
                    />
                </div>
            </div>
            <!-- 中间 -->
            <div class="content_wrap">
                <Cell
                    v-for="(friend, index) in friendsList"
                    @click="cellClick(friend, index)"
                    :key="friend._id"
                    :user="friend"
                />
            </div>
            <!-- 下面 -->
            <div class="count_wrap">
                <span>{{ friendsList.length }}位联系人</span>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "_c/Header.vue";
import Cell from "_c/UserCell.vue";
import { getFriendsList } from "@/api/getFriends.js";
export default {
    name: "contacts",
    components: {
        Header,
        Cell,
    },
    created() {
        this.getFriends();
    },
    data() {
        return {
            friendsList: [],
            allFriends: [],
            search_value: "",
        };
    },
    watch: {
        search_value() {
            this.filterData();
        },
    },
    methods: {
        getFriends() {
            getFriendsList().then((res) => {
                this.friendsList = res.data;
                this.allFriends = res.data;
            });
        },
        filterData() {
            // 搜索方法，实时过滤，并且重新赋值给friendsList
            this.friendsList = this.allFriends.filter((friend, index) => {
                return friend.name.indexOf(this.search_value) != -1;
            });
        },
        // 点击传参详情
        cellClick(friend, index) {
            this.$store.dispatch("setTargetUser", friend);
            this.$router.push({ name: "infomation" });
        },
    },
};
</script>

<style scoped lang="less">
.address_book {
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

.search_wrap {
    background-color: #f1f1f1;
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
}
.sear_content {
    height: 40px;
    background: #fff;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
}
.sear_content i {
    color: #888;
    margin-right: 10px;
}
.sear_content input {
    height: 36px;
    width: 90%;
    outline: none;
    border: none;
    font-size: 14px;
}

.count_wrap {
    min-height: 50px;
    background-color: #fff;
    box-sizing: border-box;
    color: #888;
    font-size: 16px;
    width: 100%;
    line-height: 50px;
    text-align: center;
}
</style>
