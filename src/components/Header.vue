<template>
    <div class="header">
        <div class="header-button isleft" v-show="isLeft">
            <i class="fa fa-chevron-left"></i>
            <button @click="$router.go(-1)">返回</button>
        </div>
        <h1 class="header-title">{{ title }}</h1>
        <div class="header-button is-right" v-show="btn_icon">
            <button @click="emit('rightClick')">
                <i :class="'fa fa-' + btn_icon"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    components: {},
    props: {
        title: String,
        isLeft: {
            type: Boolean,
            default: false
        },
        btn_icon: String
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="less">
.header {
    align-items: center;
    background-color: #272626;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    font-size: 18px;
    height: 50px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
}

.header-button button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit;
    outline: none;
}
.header-title {
    flex: 1;
    font-size: 18px;
}
.is-left {
    text-align: left;
}
.is-right {
    text-align: right;
}
</style>
