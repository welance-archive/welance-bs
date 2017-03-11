import Vue from 'vue';
import Router from 'vue-router';

import Hello from 'components/pages/Hello.vue';
import Home from 'components/pages/Home.vue';

import StyleGuide from 'components/pages/StyleGuide.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '/styles',
        component: StyleGuide
    },
    {
        path: '/:stuff',
        component: Home
    },
    {
        path: '/',
        component: Home
    }

    ]
});
