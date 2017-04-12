<template>
  <body class="app" :class="{ 'app--no-overflow': blockScroll }">

    <header-component :name="'main'"
                      :contained="true"
                      :contacts="contacts"
                      :details="details">

      <menu-component slot="menu"
                      :name="'regular-header'"
                      :debug="false"
                      :contained="false"
                      :columnClass="'col col--3-12@md col--12-12@xs'"
                      :print-levels="1"
                      :print-level-imgs="[0, 0, 0, 0]"
                      :print-level-text="[1, 1, 1, 1]"
                      :menu="servicesList"
                      :mode="'header'"
                      @menuOpen="blockScroll = true"
                      @menuClose="blockScroll = false">
      </menu-component>

    </header-component>

    <fixed-item :appear-at="200">

      <template slot="content">
        <header-component :name="'main'"
                          :contained="true"
                          :contacts="contacts"
                          :details="details">

          <menu-component slot="menu"
                          :name="'fixed-header'"
                          :debug="false"
                          :contained="false"
                          :columnClass="'col col--3-12@md col--12-12@xs'"
                          :print-levels="1"
                          :print-level-imgs="[0, 0, 0, 0]"
                          :print-level-text="[1, 1, 1, 1]"
                          :menu="servicesList"
                          :mode="'header'"
                          @menuOpen="blockScroll = true"
                          @menuClose="blockScroll = false">
          </menu-component>

        </header-component>
      </template>

    </fixed-item>

    <router-view @modalOpened="blockScroll = true" @modalClosed="blockScroll = false"></router-view>

    <footer-component
      :name="'main'"
      :contacts="contacts"
      :details="details"
      :menu="servicesList">

      <menu-component slot="row-0"
        :name="'footer'"
        :debug="false"
        :contained="true"
        :columnClass="'col col--3-12@lg col--6-12@md col--12-12@xs'"
        :print-levels="2"
        :print-level-imgs="[0, 0, 0, 0]"
        :print-level-text="[1, 1, 1, 1]"
        :menu="servicesList"
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
  methods: {
    exampleFunction : function(){
      alert('this could be anything!!');
    }
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
      servicesList: [
        {
          title: 'Web Design - NO URL',
          url: '',
          target: '_blank',
          image: {
              src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
              srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
              ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Web Design 1 - EXT URL',
              url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              },
              items: [
                {
                  title: '-- 3rd level',
                  url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
                  target: '_blank',
                  image: {
                    src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                    srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                    ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
                  },
                  items: [
                  {
                    title: '--- 4th level',
                    url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
                    target: '_blank',
                    image: {
                      src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                      srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                      ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
                    }
                  }
                ]
                }
              ]
            },
            {
              title: 'Web Design 2 - internal URL',
              url: '/styles',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'To Route!',
          url: '/route-here',
          target: '_blank',
          image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Awesomeness 1',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 1',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 3',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Function!',
          url: this.exampleFunction,
          target: '_blank',
          image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Ultra Awesomeness 1',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 2',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 3',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'No url',
          url: '',
          target: '_blank',
          image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Something Else 1',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 2',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 3',
              url: '/',
              target: '_blank',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        }
      ],
      blockScroll: false
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
