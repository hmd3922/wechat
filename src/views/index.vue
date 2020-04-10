<template>
    <div class="index">
        <TabBar />
        <!-- <div></div> -->
    </div>
</template>

<script>
import TabBar from "../components/TabBar";
export default {
    name: "index",
    components: { TabBar },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped lang="less">
.index {
    width: 100%;
    height: 100%;
}
</style>
