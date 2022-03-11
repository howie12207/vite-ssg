<script setup>
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

const props = defineProps({
    autoplay: {
        type: [Object, Boolean],
        default: () => {
            return {
                delay: 3000
            };
        }
    },
    loop: {
        type: Boolean,
        default: true
    },
    pagination: {
        type: [Object, Boolean],
        default: () => {
            return {
                clickable: true
            };
        }
    },
    list: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <swiper :autoplay="props.autoplay" :loop="props.loop" :pagination="pagination">
        <slot>
            <swiper-slide v-for="(item, index) of list" :key="index">
                <img :src="item.img" />
            </swiper-slide>
        </slot>
    </swiper>
</template>
