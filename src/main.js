import { createSSRApp } from 'vue';
import App from '@/App.vue';
import { createRouter } from '@/router';
import { createStore } from '@/store';

import '@/style/tailwind.css';
import '@/style/global.scss';
// import 'aos/dist/aos.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import fontAwesomeIcon from '@/utils/fontawesome.js';

export function createApp() {
    const app = createSSRApp(App);
    const router = createRouter();
    const store = createStore();

    app.use(router).use(store).use(ElementPlus).component('FAIcon', fontAwesomeIcon);
    return { app, router, store };
}
