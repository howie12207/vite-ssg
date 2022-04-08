<script setup>
// import { useStore } from 'vuex';
import { version } from '../package.json';

// import PageLoading from '@c/common/pageLoading/PageLoading.vue';

// const store = useStore();

const ENVIRONMENT = import.meta.env.VITE_ENV || import.meta.env.MODE;
// eslint-disable-next-line no-console
console.warn(`${ENVIRONMENT} version: ${version}`);
</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="page_fade">
            <component :is="Component" />
        </transition>
    </router-view>
    <!-- <transition name="fade">
        <PageLoading v-show="store.state.pageLoading" />
    </transition> -->
</template>
