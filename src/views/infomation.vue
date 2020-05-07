<template>
    <div class="infomation">
        <Header :is-left="true" title="详细资料" btn_icon="ellipsis-h" />
        <div class="container"></div>
        <InfoCell :userInfo="targetUser" />
        <div class="btn_wrapper">
            <Button @click="sendMes()">发消息</Button>
        </div>
    </div>
</template>

<script>
import Header from "_c/Header.vue";
import InfoCell from "_c/infoCell.vue";
import Button from "_c/YButton.vue";
export default {
    name: "infomation",
    components: {
        Header,
        InfoCell,
        Button,
    },
    computed: {
        targetUser() {
            return this.$store.getters.targetUser;
        },
    },
    data() {
        return {};
    },
    methods: {
        sendMes() {
            console.log(this.targetUser);
            this.$router.push({
                name: "chat",
                params: { user: this.targetUser },
            });
        },
    },
};
</script>

<style scoped lang="less">
.information {
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
