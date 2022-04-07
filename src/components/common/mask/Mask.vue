<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
const props = defineProps({
    duration: {
        type: Number,
        default: 300
    },
    closeOut: {
        type: Boolean,
        default: true
    },
    custom: {
        type: Boolean,
        default: false
    },
    animationMask: {
        type: String,
        default: 'fade',
        validator(value) {
            return ['', 'fade'].includes(value);
        }
    },
    animationPopup: {
        type: String,
        default: 'slide-down',
        validator(value) {
            return ['', 'slide-down', 'slide-left'].includes(value);
        }
    }
});
const emit = defineEmits(['close']);
onMounted(() => {
    show.value = true;
    document.body.style.overflow = 'hidden';
});
onUnmounted(() => {
    show.value = false;
    document.body.style.overflow = 'initial';
});
const closeHandle = () => {
    if (props.closeOut) close();
};
const show = ref(false);
const close = () => {
    show.value = false;
    setTimeout(() => {
        emit('close');
        document.body.style.overflow = 'initial';
    }, props.duration);
};
const style = computed(() => {
    return {
        '--popup-duration': `${props.duration / 1000}s`
    };
});
</script>

<template>
    <teleport to="body">
        <transition :name="animationMask">
            <div v-show="show" class="mask" :style="style" @click="closeHandle">
                <transition :name="animationPopup">
                    <div v-show="show" :class="!custom && 'popup'" @click.stop>
                        <slot :close="close"></slot>
                    </div>
                </transition>
            </div>
        </transition>
    </teleport>
</template>

<style scoped>
.mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
}
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
}
.fade-enter-active {
    animation: fade var(--popup-duration) ease forwards;
}
.fade-leave-active {
    animation: fade var(--popup-duration) ease forwards reverse;
}
.slide-down-enter-active {
    animation: slide-down var(--popup-duration) ease forwards;
}
.slide-down-leave-active {
    animation: slide-down var(--popup-duration) ease forwards reverse;
}
.slide-left-enter-active {
    animation: slide-left var(--popup-duration) ease forwards;
}
.slide-left-leave-active {
    animation: slide-left var(--popup-duration) ease forwards reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes slide-down {
    0% {
        opacity: 0;
        top: -50%;
    }
    60% {
        top: 50%;
    }
    75% {
        top: 48%;
    }
    100% {
        top: 50%;
        opacity: 1;
    }
}
@keyframes slide-left {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
