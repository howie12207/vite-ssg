<template>
    <header class="header_bar">
        <div class="header_container">
            <a class="main_content" href="https://www.franklin.com.tw/" title="富蘭克林官方網站">
                <img class="logo_img" src="./img/logo.svg" alt="logo" />
                <span class="title">富蘭克林‧國民的基金</span>
            </a>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@mixin size-md {
    @media (min-width: 768px) {
        @content;
    }
}

.header_bar {
    --container-width: 1280px;
    --container-padding: max(calc((100vw - var(--container-width)) / 2), 16px);

    width: 100vw;
    height: 56px;
    background-color: #fff;
}

.header_container {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 var(--container-padding);

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
        color: #005598;
        @include size-md {
            font-size: 18px;
        }
    }
}
</style>
