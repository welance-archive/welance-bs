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
        name: 'Hello',
        component: Hello
    },
    {
        path: '/styles',
        name: 'StyleGuide',
        component: StyleGuide
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
    ]
});
