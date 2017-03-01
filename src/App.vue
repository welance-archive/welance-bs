<template>
  <div id="app">
    header<img src="/assets/images/logo.png"/><br/>
    Go To: <router-link to="/hello">Hello</router-link> / <router-link to="/">Home</router-link>
    <router-view></router-view>
    <br/>footer
    <div class="row">
        <div class="col-4">
            this is a col 4
        </div>
        <div class="col-8">
            <div class="item">
                <img src="/assets/images/logo.png"/>
            </div>
            <div class="item">
                <img src="/assets/images/logo.png"/>
            </div>
            <div class="item">
                <img src="/assets/images/logo.png"/>
            </div>
            <div class="item">
                <img src="/assets/images/logo.png"/>
            </div>
        </div>
    </div>
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