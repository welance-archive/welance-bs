<template>
  <div class="home">

    <section class="hero-section">
      <hero   :title="heroTitle"
              :subtitle="heroSubtitle"
              :image="heroImage"
              :open-modal="openModal"
              :ctaUrl="heroUrl"
              :ctaText="heroText"
      ></hero>
    </section>

    <section class="quote-section">
      <div class="quote-section__row">
        <div class="quote-section__col">
          <quote  :small-text-pre="mainQuoteSmallTextPre"
                  :big-text="mainQuoteBigText"
                  :small-text-sub="mainQuoteSmallTextSub"
          ></quote>
        </div>
        <div class="quote-section__col">
          <gallery  :images="officeImages"
                    :gallery-type="'squares'"
                    :ignore-ratio="true"
          ></gallery>
        </div>
      </div>
    </section>

    <modal :modal-size="'half'" v-if="showModal" @close="closeModal()">
        <text-form slot="body"></text-form>
        <span slot="footer"></span>
    </modal>

    <section class="gallery-section">
      <gallery  :images="officeImages"
                :gallery-type="'off-canvas'"
      ></gallery>
    </section>

    <section class="services-section">
      <service-list></service-list>
    </section>

    <section class="clients-section">
      <logo-list  :logos="clientsImages"
                  :smallTextPre="''"
                  :bigText="'Clients'"
                  :smallTextSub="'this is some of them'"
      ></logo-list>
    </section>

    <section class="contact-section">
      <contact  :preTitle="''"
                :title="'Curious to find out more? Let’s get in touch!'"
                :subTitle="'Just Call Philipp <a href=\'#\'>030 / 60 98 57 750</a>send a message to <a href=\'#\'>projects@welance.com</a> or visit our wonderful Space in Berlin- Kreuzberg'"
      ></contact>
    </section>

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
  watch: {
    '$route' (to, from) {
      console.log('route changed');
    }
  },
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
        heroUrl: '/woppi',      //if empty, opens modal, if filled, goest to internal route (eg. YES: "/contacts", NO: "http://example.com")
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
        ],
        clientsImages: [
          {
            src: 'http://placehold.it/800x400?text=LOGO+HERE',
            srcRetina: 'http://placehold.it/800x800?text=LOGO+HERE',
            ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
            title: '',
            subtitle: '',
            alt: '',
            link: '',
            target: ''
          },
          {
            src: 'http://placehold.it/801x401?text=LOGO+HERE',
            srcRetina: 'http://placehold.it/801x801?text=LOGO+HERE',
            ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
            title: '',
            subtitle: '',
            alt: '',
            link: '',
            target: ''
          },
          {
            src: 'http://placehold.it/802x402?text=LOGO+HERE',
            srcRetina: 'http://placehold.it/802x802?text=LOGO+HERE',
            ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
            title: '',
            subtitle: '',
            alt: '',
            link: '',
            target: ''
          },
          {
            src: 'http://placehold.it/403x403?text=LOGO+HERE',
            srcRetina: 'http://placehold.it/803x803?text=LOGO+HERE',
            ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
            title: '',
            subtitle: '',
            alt: '',
            link: 'http://example.com',
            target: ''
          },
          {
            src: 'http://placehold.it/404x404?text=LOGO+HERE',
            srcRetina: 'http://placehold.it/804x804?text=LOGO+HERE',
            ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
            title: '',
            subtitle: '',
            alt: '',
            link: '',
            target: ''
          },
          {
            src: 'http://placehold.it/405x405?text=LOGO+HERE',
            srcRetina: 'http://placehold.it/805x805?text=LOGO+HERE',
            ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
            title: '',
            subtitle: '',
            alt: '',
            link: '',
            target: ''
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

section{
  @include pt(6);
  @include pb(8);
}

.hero-section{
  background: #f3f3f3;
  .quote__col[data-v-675f2c2e]{
    @include mq($from: 'md'){
      @include mt(0);
      .quote-heading{
        @include mt(0);
      }
    }
  }
}
.quote-section{
  @include make-container-max-widths();
  margin: 0 auto;
  &__row{
    @include make-row();
    margin: 0 auto;
  }
  &__col{
    @include make-col-ready();
    @include make-col(6);
  }

  background: white;
  @include pt(6);
  @include pb(0);
}
.gallery-section{
  background: white;
  @include pt(0);
  @include pb(6);
}
.services-section{
  background: white;
}
.clients-section{
  background: #f3f3f3;
}
.contact-section{
  background: white;
  h5[data-v-675f2c2e]{
    @include ms-respond(font-size, 1);
    line-height: 1.5em;
  }
}

</style>
