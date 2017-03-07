<template>
  <div class="home" v-bind:class="{ 'home--fixed': showModal }">
    <hero-component></hero-component>
    <button class="btn" @click="showModal = true">show modal</button>

    <quote-component></quote-component>

    <modal-component v-if="showModal" @close="showModal = false">
        <text-form-component slot="body"></text-form-component>
        <span slot="footer">bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/></span>
    </modal-component>

    <gallery-component></gallery-component>

    <service-list-component></service-list-component>
    <logo-list-component></logo-list-component>
    <contact-component></contact-component>
  </div>
</template>

<script>
import HeroComponent from './HeroComponent.vue';
import QuoteComponent from './QuoteComponent.vue';
import ModalComponent from './common/ModalComponent.vue';
import GalleryComponent from './GalleryComponent.vue';
import TextFormComponent from './common/TextFormComponent.vue';
import ServiceListComponent from './ServiceListComponent.vue';
import LogoListComponent from './LogoListComponent.vue';
import ContactComponent from './ContactComponent.vue';

import axios from 'axios';

export default {
    name: 'home',
    components: {
      HeroComponent,
      QuoteComponent,
      ModalComponent,
      GalleryComponent,
      TextFormComponent,
      ServiceListComponent,
      LogoListComponent,
      ContactComponent
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
@import "~styles/_variables.scss";

.home{
	display: flex;
	min-height: 100vh;
	flex-direction: column;
    &--fixed{
        position: fixed;
    }
}

</style>
