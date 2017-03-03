<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import Header from './components/Header.vue';

export default {
    name: 'app',
    data () {
        return{
            msg: 'This is Home!'
        }
    },
    components: {
        //Header
    }
};
</script>

<style lang="scss">
@import "~styles/_variables.scss";
.app{}
</style>