<template>
  <div class="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/common/HeaderComponent.vue';
import FooterComponent from './components/common/FooterComponent.vue';
export default {
    name: 'app',
    data () {
        return{
            msg: 'This is Home!'
        }
    },
    components: {
        HeaderComponent,
        FooterComponent
    }
};
</script>

<style lang="scss">
@import "~styles/_variables.scss";
.app{}
</style>