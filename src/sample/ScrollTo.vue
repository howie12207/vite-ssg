<script setup>
import VueScrollTo from 'vue-scrollto';

const scrollTo = target => {
    VueScrollTo.scrollTo(target);
};
</script>

<template>
    <h1 class="h-screen" @click="scrollTo('#test')">home1</h1>
    <h1 class="h-screen">home2</h1>
    <h1 id="test" class="h-screen">home3</h1>
    <h1 class="h-screen">home4</h1>
</template>
