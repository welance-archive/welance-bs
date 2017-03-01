import Vue from 'vue';
import Router from 'vue-router';

import Hello from '../Hello.vue';
import Home from '../Home.vue';

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
        path: '/',
        name: 'Home',
        component: Home
    }
    ]
});
