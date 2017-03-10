<template>
  <div class="home">

    <hero :open-modal="openModal"
          :title="heroTitle"
          :subtitle="heroSubtitle"
          :image="heroImage"
          :ctaUrl="heroUrl"
          :ctaText="heroText"
    ></hero>

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
import Hero from 'components/Hero.vue';
import Quote from 'components/common/Quote.vue';
import Modal from 'components/common/Modal.vue';
import Gallery from 'components/Gallery.vue';
import TextForm from 'components/common/TextForm.vue';
import ServiceList from 'components/ServiceList.vue';
import LogoList from 'components/LogoList.vue';
import Contact from 'components/Contact.vue';

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
        showModal: false,

        heroTitle: 'We are the coolest kids in town, really kewl. 🖖',
        heroSubtitle: 'I am seriously guys',
        heroImage: 'http://fillmurray.com/1400/1400',
        heroUrl: '/contacts',
        heroText: 'Start Project'
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
