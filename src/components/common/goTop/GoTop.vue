<script setup>
import { ref, shallowRef, computed, onMounted, onBeforeUnmount } from 'vue';
import { easeInOutCubic } from './animation';

const emit = defineEmits(['scrollToTop']);
const props = defineProps({
    size: {
        type: Number,
        default: 40
    },
    visible: {
        type: Number,
        default: 200
    },
    right: {
        type: Number,
        default: 40
    },
    bottom: {
        type: Number,
        default: 40
    },
    zIndex: {
        type: Number,
        default: 1000
    },
    duration: {
        type: Number,
        default: 500
    }
});

const style = computed(() => {
    return {
        '--go-top-size': `${props.size}px`,
        '--go-top-right': `${props.right}px`,
        '--go-top-bottom': `${props.bottom}px`,
        '--go-top-z-index': props.zIndex
    };
});

const el = import.meta.env.SSR ? '' : shallowRef(document.documentElement);

const show = ref(false);

const onScroll = () => {
    show.value = el.value.scrollTop >= props.visible;
};

const scrollToTop = () => {
    const beginTime = Date.now();
    const beginValue = el.value.scrollTop;
    const scrollFrame = () => {
        // 0.5秒內滾動完
        const progress = (Date.now() - beginTime) / props.duration;
        if (progress < 1) {
            el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));
            requestAnimationFrame(scrollFrame);
        } else {
            el.value.scrollTop = 0;
        }
    };
    requestAnimationFrame(scrollFrame);
    emit('scrollToTop');
};

onMounted(() => {
    window.addEventListener('scroll', onScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<template>
    <transition name="fade">
        <div v-show="show" :style="style" class="go_top" @click="scrollToTop">
            <slot>
                <FAIcon class="w-4 h-4" icon="chevron-up" />
                <span class="go_top_text">TOP</span></slot
            >
        </div>
    </transition>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;

    --main-blue: #005598;
}

.go_top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: var(--go-top-z-index);
    width: var(--go-top-size);
    height: var(--go-top-size);
    bottom: var(--go-top-bottom);
    right: var(--go-top-right);
    font-size: 12px;
    font-weight: 700;
    color: var(--main-blue);
    background-color: #f5f7fa;
    border: 1px solid var(--main-blue);
    border-radius: 50%;
    cursor: pointer;
    transition: 0.25s ease transform, 0.15s ease opacity, 0.3s ease color,
        0.3s ease background-color;

    &:hover {
        color: #fff;
        background-color: var(--main-blue);
    }
}

/* stylelint-disable selector-class-pattern */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
