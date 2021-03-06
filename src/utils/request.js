import axios from 'axios';
import { ElMessage } from 'element-plus';
import { createRouter } from '@/router';
import { createStore } from '@/store';

const router = createRouter();
const store = createStore();

const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE || '/',
    timeout: 12000
});

service.interceptors.request.use(
    config => {
        // const token = store.state.token;
        // if (token) config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    error => {
        /* eslint-disable-next-line */
        console.error(`Axios request error: ${error}`);
        return Promise.resolve(false);
    }
);

service.interceptors.response.use(
    response => {
        const res = response.data;
        return res;
    },
    error => {
        /* eslint-disable-next-line */
        console.error(`Axios response error: ${error}`);

        // 401
        if (error.response?.status === 401) {
            store.commit('user/REMOVE_TOKEN');
            router.push('/');
        }

        // Other
        else {
            ElMessage({
                showClose: true,
                message: error.response?.data?.message || 'System error, please try agin.',
                type: 'error'
            });
        }

        return Promise.resolve(false);
    }
);

export default service;
