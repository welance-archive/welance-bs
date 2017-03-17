import Vue from 'vue';
import Router from 'vue-router';

import StyleGuide from './../pages/StyleGuide.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/styles',
        component: StyleGuide
    },
    {
        path: '/',
        component: StyleGuide
    }

    ]
});
