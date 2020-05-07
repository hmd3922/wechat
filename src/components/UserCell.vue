<template>
    <div class="cell-wrapper" @click="$emit('click')">
        <div class="cell-title">
            <img :src="user.avatar" alt />
            <span v-if="count" class="badge">{{ count }}</span>
            <span>{{ user.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "cell-cell",
    props: {
        user: Object,
        count: Number,
    },
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped lang="less">
.cell-wrapper {
    background-color: #fff;
    box-sizing: border-box;
    color: inherit;
    min-height: 80px;
    display: flex;
    font-size: 16px;
    line-height: 1;
    overflow: hidden;
    padding: 0 8px;
    width: 100%;
    line-height: 80px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
}
.cell-title {
    flex: 1;
    // margin-top: 46px;
}
.cell-title img {
    width: 4rem;
    height: 4rem;
    vertical-align: middle;
    margin-right: 0.6rem;
}
.cell-title span {
    display: inline-block;
    vertical-align: middle;
}
.badge {
    background-color: #ff0a0a;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
    position: absolute;
    left: 2rem;
}
</style>
