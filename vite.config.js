import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        plugins: [vue()],
        base: process.env.VITE_BASE_URL,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@c': path.resolve(__dirname, 'src/components')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/style/variables";'
                }
            }
        }
    });
};
