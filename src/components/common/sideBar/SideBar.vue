<script setup>
const props = defineProps({
    list: {
        type: Array,
        default: () => [
            { text: '預約諮詢', link: '', color: '#e08100' },
            { text: '立即開戶', link: 'https://google.com.tw', color: '#519e2f' }
        ]
    }
});
const emits = defineEmits(['clickLink']);

const clickLink = (index, link, e) => {
    if (!link) e.preventDefault();
    emits('clickLink', index);
};
</script>

<template>
    <div class="side_bar">
        <a
            v-for="(item, index) of props.list"
            :key="index"
            :style="{ backgroundColor: item.color }"
            :class="['side_bar_item', { two_items: props.list.length > 1 }]"
            :href="item.link"
            target="_blank"
            @click="clickLink(index, item.link, $event)"
            >{{ item.text }}
        </a>
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

    .side_bar_item {
        display: inline-block;
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
}
</style>
