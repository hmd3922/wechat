<template>
    <!-- <div class="input_grop"></div> -->
    <button
        class="y-button"
        :class="{ 'is-disabled': disabled }"
        :type="type"
        :disabled="disabled"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ybutton",
    components: {},
    props: {
        // type: {
        type: String,
        disabled: {
            type: Boolean,
            default: false
        }
        // default: "text"
        // }
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="less">
.y-button {
    width: 100%;
    line-height: 1;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    color: #fff;
    background: #20af20;
    border-color: #20af20;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 4px;
}
.is-disabled,
.is-disabled:focus,
.is-disabled:hover {
    color: #fff;
    background: #75b56c;
    border-color: #75b56c;
    cursor: not-allowed;
    pointer-events: none;
}
</style>
