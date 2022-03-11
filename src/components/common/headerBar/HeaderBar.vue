<script setup>
import { ref } from 'vue';
import IconMenu from '@c/common/icon/IconMenu.vue';

const emits = defineEmits(['clickLink']);
const props = defineProps({
    navList: {
        type: Array,
        default: () => [
            { text: '認識國民理財機器人', link: '', isActive: true },
            { text: '常見問題', link: 'https://google.com.tw' }
        ]
    }
});

const isOpenMenu = ref(false);

// Nav
const clickLink = (index, link, e) => {
    isOpenMenu.value = false;
    if (!link) e.preventDefault();
    emits('clickLink', index);
};
</script>

<template>
    <header class="header_bar">
        <div class="header_container">
            <a class="main_content" href="https://www.franklin.com.tw/" title="富蘭克林官方網站">
                <img class="logo_img" src="./img/logo.svg" alt="logo" />
                <span class="title">富蘭克林‧國民的基金</span>
            </a>
            <nav :class="['nav_list', { show: isOpenMenu }]">
                <ul>
                    <li v-for="(nav, index) of props.navList" :key="index">
                        <a
                            :class="['nav_item', { active: nav.isActive }]"
                            :href="nav.link"
                            @click="clickLink(index, nav.link, $event)"
                            >{{ nav.text }}</a
                        >
                    </li>
                </ul>
            </nav>
            <IconMenu v-model:status="isOpenMenu" class="icon_menu" main-color="#005598" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@mixin size-md {
    @media (min-width: 768px) {
        @content;
    }
}

@mixin size-md-max {
    @media (max-width: 767px) {
        @content;
    }
}

.header_bar {
    --container-width: 1280px;
    --container-padding: max(calc((100% - var(--container-width)) / 2), 16px);
    --color-main: #005598;

    width: 100%;
    height: 56px;
    background-color: #fff;
}

.header_container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--container-padding);
    box-shadow: 0 3px 10px rgb(0 0 0 / 8%);

    .main_content {
        display: flex;
        align-items: flex-end;
    }

    .logo_img {
        width: 120px;
        margin-right: 8px;
        @include size-md {
            width: 152px;
        }
    }

    .title {
        font-weight: bold;
        color: var(--color-main);
        @include size-md {
            font-size: 18px;
        }
    }
}

.nav_list {
    transition: 0.4s;
    @include size-md-max {
        position: fixed;
        top: 64px;
        right: 8px;
        border-radius: 8px;
        padding: 8px;
        background-color: rgba(255 255 255 / 90%);
        box-shadow: 0 0 5px rgb(0 0 0 / 40%);
        transform: translateX(200%);

        &.show {
            transform: translateX(0);
        }
    }

    ul {
        @include size-md {
            display: flex;
        }
    }

    .nav_item {
        display: inline-block;
        width: 100%;
        text-align: center;
        padding: 8px;

        &.active {
            color: #fff;
            background-color: var(--color-main);
            border-radius: 24px;
        }
        @include size-md {
            padding: 16px;

            &.active {
                position: relative;
                color: #114791;
                background-color: initial;

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #0ff;
                }
            }
        }
    }
}

.icon_menu {
    position: fixed;
    right: 16px;
    @include size-md {
        display: none;
    }
}
</style>
