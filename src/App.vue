<template>
  <body class="app" :class="{ 'app--no-overflow': showModal }">

    <header-component :name="'main'"
                      :contained="true"
                      :contacts="contacts"
                      :details="details">

      <menu-component slot="menu"
                      :name="'header'"
                      :levels="1"
                      :show-images="false"
                      :lists="menu"
                      :mode="'header'">
      </menu-component>

    </header-component>

    <fixed-item :appear-at="200">

      <template slot="content">
        <header-component :name="'main'"
                          :contained="true"
                          :contacts="contacts"
                          :details="details">

          <menu-component slot="menu"
                          :levels="1"
                          :show-images="false"
                          :name="'header'"
                          :lists="menu"
                          :mode="'header'">
          </menu-component>

        </header-component>
      </template>

    </fixed-item>

    <router-view @modalOpened="showModal = true" @modalClosed="showModal = false"></router-view>

    <footer-component
      :name="'main'"
      :contacts="contacts"
      :details="details"
      :menu="menu">

      <menu-component slot="row-0"
        :show-images="false"
        :name="'footer'"
        :lists="menu"
        :mode="'footer'">
      </menu-component>

      <div slot="row-1"></div>
      <div slot="row-2"></div>

    </footer-component>
  </body>
</template>

<script>
import HeaderComponent from './components/common/HeaderComponent.vue';
import FooterComponent from './components/common/FooterComponent.vue';
import FixedItem from './components/common/FixedItem.vue';
import MenuComponent from './components/common/MenuComponent.vue';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
    FixedItem,
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
        logo: 'assets/images/logo.svg',
        altLogo: 'Welance - Freelancing Collectively'
      },
      menu: [
        {
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Web Design 1 - EXT URL',
              url: '',
              extUrl: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2 - internal URL',
              url: '/styles',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
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
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
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
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Ultra Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
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
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Something Else 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
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
@import "./src/sass/welanstrap.scss";

.app{
  &--no-overflow{
      overflow: hidden;
  }
  .header{
    background: #f3f3f3;
    @include m(0);

    .header__col--logo{
      //order: 0;
    }
    .header__col--extra{
      //@include make-col(6);
      //order: 1;
    }
    .header__col--menu{
      //order: 2;
      //@include make-col(5);
      .menu-header{
        //@include make-col(4);
      }
    }
  }
  .footer{
    .menu-footer{
      @include make-container-max-widths();
      margin: 0 auto;
      @include pb(2);
      @include pt(2)

      .img{
        //display: none;
      }
    }
    background: #f3f3f3;
  }
}
</style>
