import { createStore as _createStore } from 'vuex';
// import req from '@/utils/request';

export function createStore() {
    return _createStore({
        strict: process.env.NODE_ENV === 'development',
        state: {
            pageLoading: false
            // token: ''
        },
        mutations: {
            SET_PAGE_LOADING(state, status) {
                state.pageLoading = status;
            }
        },
        actions: {
            // async TEST() {
            //     const res = await req.get('/categories');
            //     return res;
            // }
        }
    });
}
