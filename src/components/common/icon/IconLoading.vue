<script setup>
import { computed } from 'vue';
const props = defineProps({
    size: {
        type: Number,
        default: 80
    },
    mainColor: {
        type: String,
        default: 'currentColor'
    }
});
const style = computed(() => {
    return {
        '--loading-size': `${props.size}px`,
        '--loading-color': props.mainColor
    };
});
</script>

<template>
    <div :style="style" class="icon_loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}

.icon_loading {
    display: inline-block;
    position: relative;
    width: var(--loading-size);
    height: var(--loading-size);
}

.icon_loading div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: calc(var(--loading-size) - 16px);
    height: calc(var(--loading-size) - 16px);
    margin: 8px;
    border: 8px solid var(--loading-color);
    border-radius: 50%;
    animation: rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--loading-color) transparent transparent transparent;
}

.icon_loading div:nth-child(1) {
    animation-delay: -0.45s;
}

.icon_loading div:nth-child(2) {
    animation-delay: -0.3s;
}

.icon_loading div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
