import {defineConfig} from 'umi';

export default defineConfig({
    fastRefresh: {},

    devServer: {},

    title: 'My App',

    nodeModulesTransform: {
        type: 'none'
    },

    routes: [
        {path: '/', component: '@/pages/index'}
    ],

    electronBuilder: {
        outputDir: 'dist_bin',

        builderOptions: {
            appId: 'com.skitsanos.apps.myApp',
            productName: 'My App'
        }
    }
});