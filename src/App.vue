<template>
  <div id="app">
    header<img src="assets/images/logo.png"/><br/>
    Go To: <router-link to="/hello">Hello</router-link> / <router-link to="/">Home</router-link>
    <router-view></router-view>
    <br/>footer
  </div>
</template>

<script>
//import Home from './components/Home.vue';

export default {
    name: 'app',
    data () {
        return{
            msg: 'This is Home!'
        }
    },
    components: {
        //Home,
    }
};
</script>