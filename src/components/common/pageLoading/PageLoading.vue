<script setup>
import IconLoading from '@c/common/icon/IconLoading.vue';
</script>

<template>
    <IconLoading class="loading" main-color="#004790" />
</template>
<style lang="scss" scoped>
.loading {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0 0 0 / 80%);
}
</style>
