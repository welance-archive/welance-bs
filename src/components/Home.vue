<template>
  <div class="home">
    <header-component></header-component>

    <hero-component></hero-component>

    <quote-component></quote-component>

    <h1 @click="showModal = true">show modal</h1>

    <modal-component v-if="showModal" @close="showModal = false">
        <h3 slot="header">custom header</h3>
        <p slot="body"></p>
    </modal-component>

    <gallery-component></gallery-component>

    <service-list-component></service-list-component>
    <logo-list-component></logo-list-component>
    <contact-component></contact-component>
    
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import HeroComponent from './HeroComponent.vue';
import QuoteComponent from './QuoteComponent.vue';
import ModalComponent from './common/ModalComponent.vue';
import GalleryComponent from './GalleryComponent.vue';
import ServiceListComponent from './ServiceListComponent.vue';
import LogoListComponent from './LogoListComponent.vue';
import ContactComponent from './ContactComponent.vue';

import axios from 'axios';

export default {
    name: 'home',
    components: {
      HeaderComponent, FooterComponent, HeroComponent, QuoteComponent, ModalComponent, GalleryComponent, ServiceListComponent, LogoListComponent, ContactComponent
    },
    data () {
        return{
            msg: 'This is Home!',
            user: {},
            showModal: false
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
