<template>
    <div class="chats">
        <Header title="我" />
        <div class="container">
            <InfoCell :userInfo="user" />
            <div class="btn_wrapper">
                <Button @click="loginOut">退出登录</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "_c/Header.vue";
import InfoCell from "_c/infoCell.vue";
import Button from "_c/YButton.vue";
export default {
    name: "me",
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    components: {
        Header,
        InfoCell,
        Button
    },
    data() {
        return {};
    },
    methods: {
        loginOut() {
            localStorage.removeItem("wxToken");
            this.$router.push("/login");
        }
    }
};
</script>

<style scoped lang="less">
mine {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.container {
    width: 100%;
    height: calc(100% - 50px);
    margin-top: 50px;
    box-sizing: border-box;
    padding: 16px 0;
    background-color: #f1f1f1;
}

.btn_wrapper {
    box-sizing: border-box;
    padding: 20px;
}
</style>
