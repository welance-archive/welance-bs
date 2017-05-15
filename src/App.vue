<template>
  <body class="app" :class="{ 'app--no-overflow': blockScroll }">

    <header-component :name="'main'"
                      :contained="true"
                      :contacts="contacts"
                      :details="details">

      <menu-component slot="menu"
                      :name="'regular'"
                      :debug="false"
                      :contained="false"
                      :columnClass="'col col--3-12@lg col--6-12@md col--12-12@xs'"
                      :print-levels="1"
                      :print-level-imgs="[0, 0, 0, 0]"
                      :print-level-text="[1, 1, 1, 1]"
                      :mobile-print-levels="5"
                      :mobile-print-level-imgs="[0, 0, 0, 0, 1]"
                      :mobile-print-level-text="[1, 1, 1, 1, 1]"
                      :menu="mainMenu"
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
                          :name="'fixed'"
                          :debug="false"
                          :contained="false"
                          :columnClass="'col col--3-12@lg col--6-12@md col--12-12@xs'"
                          :print-levels="1"
                          :print-level-imgs="[0, 0, 0, 0]"
                          :print-level-text="[1, 1, 1, 1]"
                          :mobile-print-levels="5"
                          :mobile-print-level-imgs="[0, 0, 0, 0, 1]"
                          :mobile-print-level-text="[1, 1, 1, 1, 1]"
                          :menu="mainMenu"
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
      :contained="true"
      :contacts="contacts"
      :details="details">

      <menu-component slot="row-01"
          :name="'footer'"
          :debug="false"
          :contained="false"
          :columnClass="'col col--3-12@lg col--6-12@md col--12-12@xs'"
          :print-levels="1"
          :print-level-imgs="[0, 0, 0, 0]"
          :print-level-text="[1, 0, 0, 0]"
          :menu="mainMenu"
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
import axios from 'axios';

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
  created (){
    axios.get(API_URL + `assets/data/main-menu.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.mainMenu = response.data;
    })
    .catch(e => {
      console.log(e);
    })
  },
  data () {
    return{
      mainMenu: [],
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
}
</style>
