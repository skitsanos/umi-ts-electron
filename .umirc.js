import {defineConfig} from 'umi';

export default defineConfig({
    fastRefresh: {},

    devServer: {},

    title: 'My App',

    nodeModulesTransform: {
        type: 'none'
    },

    pwa: false,
    lessLoader: {javascriptEnabled: true},

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