<template>
  <div class="home">

    <hero   :title="heroTitle"
            :subtitle="heroSubtitle"
            :image="heroImage"
            :open-modal="openModal"
            :ctaUrl="heroUrl"
            :ctaText="heroText"
    ></hero>

    <quote  :small-text-pre="mainQuoteSmallTextPre"
            :big-text="mainQuoteBigText"
            :small-text-sub="mainQuoteSmallTextSub"
    ></quote>

    <modal :modal-size="'half'" v-if="showModal" @close="closeModal()">
        <text-form slot="body"></text-form>
        <span slot="footer"></span>
    </modal>

    <gallery  :images="officeImages"
              :gallery-type="'off-canvas'"
    ></gallery>

    <service-list></service-list>

    <logo-list></logo-list>

    <contact></contact>

  </div>
</template>

<script>
import Hero from 'components/common/Hero.vue';
import Quote from 'components/common/Quote.vue';
import Modal from 'components/common/Modal.vue';
import Gallery from 'components/common/Gallery.vue';
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
        heroUrl: '',  //if empty, opens modal, if filled, goest to link (eg. "/contacts" or "http://example.com")
        heroText: 'Start Project',

        mainQuoteSmallTextPre: 'The Coolest',
        mainQuoteBigText: 'kids on the...new line:<br/>block',
        mainQuoteSmallTextSub: '',

        officeImages: [
          {
            src: 'http://fillmurray.com/400/400',
            srcRetina: 'http://fillmurray.com/800/800',
            ratio: '9-16', //see welanstrap/_images.scsss for possible ratio values
            title: 'Title',
            subtitle: 'subtitle',
            alt: 'Alternate Text',
            link: '',
            target: '_blank'
          },
          {
            src: 'http://fillmurray.com/401/401',
            srcRetina: 'http://fillmurray.com/801/801',
            ratio: '12-16', //see welanstrap/_images.scsss for possible ratio values
            title: 'Title',
            subtitle: 'subtitle',
            alt: 'Alternate Text',
            link: '',
            target: '_blank'
          },
          {
            src: 'http://fillmurray.com/402/402',
            srcRetina: 'http://fillmurray.com/802/802',
            ratio: '9-16', //see welanstrap/_images.scsss for possible ratio values
            title: 'Title',
            subtitle: 'subtitle',
            alt: 'Alternate Text',
            link: '',
            target: '_blank'
          },
          {
            src: 'http://fillmurray.com/403/403',
            srcRetina: 'http://fillmurray.com/803/803',
            ratio: '12-16', //see welanstrap/_images.scsss for possible ratio values
            title: 'Title',
            subtitle: 'subtitle',
            alt: 'Alternate Text',
            link: 'http://example.com',
            target: '_blank'
          },
          {
            src: 'http://fillmurray.com/404/404',
            srcRetina: 'http://fillmurray.com/804/804',
            ratio: '9-16', //see welanstrap/_images.scsss for possible ratio values
            title: 'Title',
            subtitle: 'subtitle',
            alt: 'Alternate Text',
            link: '',
            target: '_blank'
          },
          {
            src: 'http://fillmurray.com/405/405',
            srcRetina: 'http://fillmurray.com/805/805',
            ratio: '12-16', //see welanstrap/_images.scsss for possible ratio values
            title: 'Title',
            subtitle: 'subtitle',
            alt: 'Alternate Text',
            link: '',
            target: '_blank'
          }
        ]
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
