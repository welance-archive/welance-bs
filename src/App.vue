<template>
  <div class="app">

    <header>
      <div class="wrap wrap--contained">
        <div class="row">
          <div class="col col--3-12@xs">
            <router-link :to="'/'">
              <img src="/assets/images/logo.svg">
            </router-link>
          </div>
          <div class="col col--9-12@xs">
            <menu-component :name="'regular'"
                            :new-route-triggered="newRoute"
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
                            @menuOpen="blockScrolling(true)"
                            @menuClose="blockScrolling(false)">
            </menu-component>
          </div>
        </div>
      </div>
    </header>

    <fixed-item :appear-at="200">
      <div slot="content" class="wrap wrap--contained">
        <div class="row">
          <div class="col col--3-12@xs">
            <router-link :to="'/'">
              <img src="/assets/images/logo.svg">
            </router-link>
          </div>
          <div class="col col--9-12@xs">
            <menu-component :name="'fixed'"
                            :new-route-triggered="newRoute"
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
                            @menuOpen="blockScrolling(true)"
                            @menuClose="blockScrolling(false)">
            </menu-component>
          </div>
        </div>
      </div>
    </fixed-item>

    <router-view @modalOpened="blockScrolling(true,'modal')" @modalClosed="blockScrolling(false,'modal')"></router-view>

    <footer>
      <div class="wrap wrap--contained">
        <div class="row">
          <div class="col col--offset-3-12@xs col--9-12@xs">
            <menu-component
                :name="'footer'"
                :new-route-triggered="newRoute"
                :debug="false"
                :contained="false"
                :columnClass="'col col--3-12@lg col--6-12@md col--12-12@xs'"
                :print-levels="1"
                :print-level-imgs="[0, 0, 0, 0]"
                :print-level-text="[1, 0, 0, 0]"
                :menu="mainMenu"
                :mode="'footer'">
            </menu-component>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import FixedItem from './components/common/FixedItem.vue';
import MenuComponent from './components/common/MenuComponent.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    FixedItem,
    MenuComponent
  },
  watch: {
    '$route' (to, from) {
      //this is to let the menucomponent that the route changed
      this.newRoute = to.path;
    }
  },
  methods: {
    exampleFunction : function(){
      alert('this could be anything!!');
    },
    blockScrolling: function(block, triggerer){
      if(triggerer == 'modal'){
        this.isModalOpen = block;
      }
      let body = document.getElementsByTagName("BODY")[0];

      //add class to block scroll
      if(block){
        if (body.classList)
          body.classList.add('body--no-overflow');
        else
          body.className += ' ' + 'body--no-overflow';
      //remove class to un-block scroll
      }else{
        if(!this.isModalOpen){
          if (body.classList)
            body.classList.remove('body--no-overflow');
          else
            body.className = body.className.replace(new RegExp('(^|\\b)' + 'body--no-overflow'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }
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
      blockScroll: false,
      isModalOpen: false,
      newRoute: '/'
    }
  }
};
</script>

<style lang="scss">
@import "./src/sass/welanstrap.scss";
</style>
