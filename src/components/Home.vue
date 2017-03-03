<template>
  <div class="home">
    <header-component></header-component>

    <hero-component></hero-component>

    <quote-component></quote-component>
    <!--
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
    -->
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import HeroComponent from './HeroComponent.vue';
import QuoteComponent from './QuoteComponent.vue';

import axios from 'axios';

export default {
    name: 'home',
    components: {
      HeaderComponent, FooterComponent, HeroComponent, QuoteComponent
    },
    data () {
        return{
            msg: 'This is Home!',
            user: {}
        }
    },
    created () {
      let vc = this; //vc = VueComponent

      axios.get('https://api.mixcloud.com/spartacus/', {

      })
      .then(function (response) {
        vc.user = response.data;
        document.dispatchEvent(new Event('now-its-seo-time'));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main.scss";

.home{
	display: flex;
	min-height: 100vh;
	flex-direction: column;
}

</style>
