<template>
    <div class="register">
        <div class="header">
            <button @click="$router.go(-1)">取消</button>
        </div>

        <div class="title">注册账户</div>
        <div class="content">
            <!-- 表单 -->
            <form>
                <InputGrop
                    label="昵称"
                    placeholder="请填写昵称"
                    v-model="user.name"
                />
                <InputGrop
                    label="邮箱"
                    placeholder="请填写邮箱"
                    v-model="user.email"
                />
                <InputGrop
                    label="密码"
                    placeholder="请填写密码"
                    v-model="user.password"
                    type="password"
                />
                <InputGrop
                    label="确认密码"
                    placeholder="请确认密码"
                    v-model="user.password2"
                    type="password"
                />
            </form>
            <div class="btn_wrap">
                <YButton :disabled="isDisabled" @click="registerClick"
                    >注册</YButton
                >
            </div>
        </div>
    </div>
</template>

<script>
import InputGrop from "../components/InputGrop";
import YButton from "../components/YButton";
import { register } from "@/api/user";
export default {
    name: "register",
    components: { InputGrop, YButton },
    computed: {
        isDisabled() {
            if (
                this.user.name &&
                this.user.email &&
                this.user.password &&
                this.user.password2
            )
                return false;
            else return true;
        },
    },
    data() {
        return {
            user: {
                name: "",
                password: "",
                password2: "",
                email: "",
            },
        };
    },
    methods: {
        registerClick() {
            // 验证当前邮箱合法
            let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (!reg.test(this.user.email)) {
                alert("请输入合法的邮箱地址");
                return;
            }
            if (this.user.password !== this.user.password2) {
                alert("两次密码不一致");
                return;
            }
            register(this.user).then((res) => {
                console.log(res);
                this.$router.push({ name: "login" });
            });
        },
    },
};
</script>

<style scoped lang="less">
.register {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    line-height: 50px;
    button {
        border: none;
        outline: none;
        background: transparent;
        font-size: 16px;
        color: #20af0e;
    }
}

.content {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    .btn_wrap {
        margin-top: 30px;
    }
}
.title {
    margin-top: 46px;
    font-size: 22px;
    text-align: center;
}
</style>
