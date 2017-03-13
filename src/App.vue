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
    >
      <menu-component   slot="row-0"
                        :show-images="false"
                        :name="'footer'"
                        :smallTextPre="''"
                        :bigText="''"
                        :smallTextSub="''"
                        :lists="menu"
      ></menu-component>

      <div slot="row-1"></div>
      <div slot="row-2"></div>

    </footer-component>
  </body>
</template>

<script>
import HeaderComponent from './components/common/HeaderComponent.vue';
import FooterComponent from './components/common/FooterComponent.vue';
import FixedHeader from './components/common/FixedHeader.vue';
import MenuComponent from 'components/common/MenuComponent.vue';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
    FixedHeader,
    MenuComponent
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
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Web Design 1 - EXT URL',
              url: '',
              extUrl: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2 - internal URL',
              url: '/styles',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Ultra Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Something Else 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://fillmurray.com/400/400',
                srcRetina: 'http://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
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
  .header{
    background: #f3f3f3;
  }
  .footer{
    .menu-footer{
      .img{
        //display: none;
      }
    }
    background: #f3f3f3;
  }
}
</style>
