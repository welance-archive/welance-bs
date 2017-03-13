<template>
  <body class="app" :class="{ 'app--no-overflow': showModal }">

    <header-component :name="'main'"
                      :contacts="contacts"
                      :details="details"
                      :menu="menu"
    ></header-component>

    <fixed-header :name="'main'"
                  :contacts="contacts"
                  :details="details"
                  :menu="menu"
    ></fixed-header>

    <router-view @modalOpened="showModal = true" @modalClosed="showModal = false"></router-view>

    <footer-component :name="'main'"
                      :contacts="contacts"
                      :details="details"
                      :menu="menu"
    ></footer-component>
  </body>
</template>

<script>
import HeaderComponent from './components/common/HeaderComponent.vue';
import FooterComponent from './components/common/FooterComponent.vue';
import FixedHeader from './components/common/FixedHeader.vue';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
    FixedHeader
  },
  data () {
    return{
      contacts: {
        phone: '+49 30 609 857 750',
        address: 'Waldemarstraße 37a',
        zip: '12043',
        city: 'Berlin',
        country: 'GERMANY',
      },
      details: {
        title: 'Welance',
        subtitle: 'Freelance Collective',
        logo: '/assets/images/logo.svg',
        altLogo: 'Welance - Freelancing Collectively'
      },
      menu: [
        {
          title: 'Home',
          url: '/',
          extUrl: '',
          image: '/assets/images/logo.svg',
          altImage: 'Welance - Freelancing Collectively'
        },
        {
          title: 'Style Guide',
          url: '/styles',
          extUrl: '',
          image: '/assets/images/logo.svg',
          altImage: 'Welance - Freelancing Collectively'
        },
        {
          title: 'Hello',
          url: '/hello',
          extUrl: '',
          image: '/assets/images/logo.svg',
          altImage: 'Welance - Freelancing Collectively'
        },
        {
          title: 'Development Guidelines',
          url: '',
          extUrl: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
          image: '/assets/images/logo.svg',
          altImage: 'Welance - Freelancing Collectively'
        }
      ],
      showModal: false
    }
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
