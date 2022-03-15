<script setup>
const props = defineProps({
    itemLink: {
        type: Object,
        default: () => {
            return {
                color: '#005598',
                link: '',
                text: 'Test'
            };
        }
    },
    type: {
        type: Number,
        default: 1
    }
});

const emits = defineEmits(['clickLink']);

const clickLink = (link, e) => {
    if (!link) e.preventDefault();
    emits('clickLink');
};
</script>

<template>
    <a
        :style="{ backgroundColor: props.itemLink.color }"
        :class="['side_bar_item', { two_items: props.type === 2 }]"
        :href="props.itemLink.link"
        target="_blank"
        @click="clickLink(props.itemLink.link, $event)"
    >
        <slot>
            {{ props.itemLink.text }}
        </slot>
    </a>
</template>

<style lang="scss" scoped>
@mixin size-md {
    @media (min-width: 768px) {
        @content;
    }
}

.side_bar_item {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border: 4px solid #fff;
    padding: 8px 4px;
    letter-spacing: 4px;
    border-radius: 20px;
    transition: 0.3s;
    @include size-md {
        font-size: 24px;
        border-radius: 10px 0 0 10px;
        writing-mode: vertical-lr;
        border: none;
    }

    &.two_items {
        border: 1px solid #fff;

        &:first-child {
            border-radius: 10px 0 0 10px;
            background-color: #e08100;
            @include size-md {
                border-radius: 10px 0 0 10px;
            }
        }

        &:last-child {
            border-radius: 0 10px 10px 0;
            background-color: #519e2f;
            @include size-md {
                border-radius: 10px 0 0 10px;
            }
        }
    }

    &:hover {
        opacity: 0.8;
    }
}
</style>
