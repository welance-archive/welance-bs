<template>
  <body class="app" v-bind:class="{ 'app--no-overflow': showModal }">
    <header-component></header-component>
    <fixed-header></fixed-header>
    <router-view @modalOpened="showModal = true" @modalClosed="showModal = false"></router-view>
    <footer-component></footer-component>
  </body>
</template>

<script>
import HeaderComponent from './components/common/HeaderComponent.vue';
import FooterComponent from './components/common/FooterComponent.vue';
import FixedHeader from './components/common/FixedHeader.vue';

export default {
    name: 'app',
    data () {
        return{
            msg: 'This is Home!',
            showModal: false
        }
    },
    components: {
        HeaderComponent,
        FooterComponent,
        FixedHeader
    }
};
</script>

<style lang="scss">
@import "~styles/_variables.scss";
.app{
    &--no-overflow{
        overflow: hidden;
    }
    .header-wrap{
      background: #f3f3f3;
    }
    .footer-wrap{
      background: #f3f3f3;
    }
}
</style>
