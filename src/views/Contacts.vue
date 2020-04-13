<template>
    <div class="chats">
        <Header title="通讯录" btn_icon="user-plus" />
    </div>
</template>

<script>
import Header from "_c/Header.vue";
// import Cell from "_c/UserCell.vue";
import { getFriendsList } from "@/api/getFriends.js";
export default {
    name: "contacts",
    components: {
        Header
        // Cell
    },
    created() {
        this.getFriends();
    },
    data() {
        return {
            friendsList: []
        };
    },

    methods: {
        getFriends() {
            getFriendsList().then(res => {
                console.log(res);
            });
        }
    }
};
</script>

<style scoped lang="less"></style>
