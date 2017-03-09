<template>
  <div class="home">
    <hero :open-modal="openModal"></hero>

    <quote></quote>

    <modal :modal-size="'half'" v-if="showModal" @close="closeModal()">
        <text-form slot="body"></text-form>
        <span slot="footer">bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/>bla<br/></span>
    </modal>

    <gallery></gallery>

    <service-list></service-list>
    <logo-list></logo-list>
    <contact></contact>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import Quote from './Quote.vue';
import Modal from './common/Modal.vue';
import Gallery from './Gallery.vue';
import TextForm from './common/TextForm.vue';
import ServiceList from './ServiceList.vue';
import LogoList from './LogoList.vue';
import Contact from './Contact.vue';

import axios from 'axios';

export default {
    name: 'home',
    components: {
      Hero,
      Quote,
      Modal,
      Gallery,
      TextForm,
      ServiceList,
      LogoList,
      Contact
    },
    data () {
        return{
            msg: 'This is Home!',
            user: {},
            showModal: false
        }
    },
    methods: {
        openModal: function(){
            this.showModal = true;
            this.$emit('modalOpened');
        },
        closeModal: function(){
            this.showModal = false;
            this.$emit('modalClosed');
        },
    },
    created () {
      let vc = this; //vc = VueComponent

      axios.get("https://api.mixcloud.com/spartacus/", {

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
}

</style>
