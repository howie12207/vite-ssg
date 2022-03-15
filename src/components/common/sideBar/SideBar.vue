<script setup></script>

<template>
    <div class="side_bar">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@mixin size-md {
    @media (min-width: 768px) {
        @content;
    }
}

.side_bar {
    position: fixed;
    bottom: 16px;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    width: 90%;
    height: min-content;
    margin: 0 auto;
    @include size-md {
        flex-direction: column;
        justify-content: center;
        width: initial;
        top: 50%;
        left: initial;
        transform: translateY(-50%);
    }
}
</style>
