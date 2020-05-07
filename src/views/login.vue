<template>
    <div class="login">
        <div class="title">用户登录</div>
        <div class="content">
            <!-- 表单 -->
            <form>
                <InputGrop
                    label="帐号"
                    placeholder="请填写邮箱"
                    v-model="user.email"
                />
                <InputGrop
                    label="密码"
                    placeholder="请填写密码"
                    v-model="user.password"
                    type="password"
                />
            </form>
            <div class="btn_wrap">
                <YButton :disabled="isDisabled" @click="loginClick"
                    >登录</YButton
                >
            </div>
        </div>
        <div class="footer_wrap">
            |
            <button class="register" @click="$router.push('/register')">
                注册帐号</button
            >|
        </div>
    </div>
</template>

<script>
import InputGrop from "../components/InputGrop";
import YButton from "../components/YButton.vue";
import { login } from "@/api/user.js";
import jwt_decode from "jwt-decode";
export default {
    name: "login",
    components: { InputGrop, YButton },
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
        };
    },
    computed: {
        isDisabled() {
            if (this.user.email && this.user.password) return false;
            else return true;
        },
    },
    methods: {
        loginClick() {
            // 验证当前邮箱合法
            let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (!reg.test(this.user.email)) {
                alert("请输入合法的邮箱地址");
                return;
            }
            login(this.user).then((res) => {
                const { token } = res.data;
                // 存储token;
                localStorage.setItem("wxToken", token);

                // 解析
                const decode = jwt_decode(token);
                console.log(decode);
                // 存储vuex
                this.$store.dispatch("setUser", decode);
                // 跳转
                this.$router.push({ name: "chats" });
            });
        },
    },
};
</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 16px;
    box-sizing: border-box;
}
.content {
    margin-top: 16px;
    .btn_wrap {
        margin-top: 30px;
    }
}
.title {
    margin-top: 80px;
    font-size: 22px;
    text-align: center;
}
.footer_wrap {
    position: absolute;
    left: 0;
    bottom: 16px;
    text-align: center;
    width: 100%;
    color: #888;
    .register {
        font-size: 16px;
        outline: none;
        border: none;
        background: transparent;
        color: #888;
    }
}
</style>
