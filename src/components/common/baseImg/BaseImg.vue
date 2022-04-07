<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    src: {
        type: [URL, String],
        required: true
    },
    alt: {
        type: String,
        default: ''
    },
    // w 1920 h 400 insert 400 / 1920
    ratio: {
        type: Number,
        default: 9 / 16
    }
});

const isLoading = ref(true);
const finishLoading = () => {
    isLoading.value = false;
};

const style = computed(() => {
    return {
        '--base-img-ratio': `${props.ratio}`
    };
});
</script>

<template>
    <div :style="style" :class="['base_img', { placement: isLoading }]">
        <img :src="props.src" :alt="props.alt" @load="finishLoading" />
    </div>
</template>

<style lang="scss" scoped>
.base_img {
    position: relative;
    width: 100%;

    img {
        max-width: 100%;
    }

    &.placement {
        padding-top: calc(var(--base-img-ratio) * 100%);
        background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
        background-size: 400% 100%;
        animation: loading 1.4s ease infinite;

        img {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}

@keyframes loading {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}
</style>
