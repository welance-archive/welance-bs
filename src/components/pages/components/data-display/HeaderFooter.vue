<template>
<div>
  <div class="wrap wrap--contained">
    <div class="row">
      <div class="col col--3-12@lg col--12-12@xs">
        <!--:open-all="true"-->
        <tree
          :name="'menuzio'"
          :debug="false"
          :columnClass="'col--12-12@xs'"
          :mode="'tree'"
          :open-all="true"
          :print-levels="5"
          :print-level-imgs="[0,0,0,0,0]"
          :print-level-text="[1,1,1,1,1]"
          :tree="componentsMenu">
        </tree>
      </div>
      <div class="col col--9-12@lg col--12-12@xs">
        <!-- ––––––––––––––––––––––––––––––––––––––- HEADER -->
        <quote
            :name="'header'"
            :debug="false"
            :contained="false"
            :small-text-pre="''"
            :small-text-sub="'This is and header'"
            :big-text="'Header component'">
        </quote>

        <header-component :name="'main'"
                  :contained="false"
                  :contacts="contacts"
                  :details="details">
            <div slot="row-01">------------------------------------------------------------- slot row-01</div>
            <div slot="extra">slot "extra"</div>
            <div slot="menu">slot<br/>"menu"</div>
            <div slot="row-03">------------------------------------------------------------- row-03</div>
        </header-component>

        <quote
            :name="'footer'"
            :debug="false"
            :contained="false"
            :small-text-pre="''"
            :small-text-sub="'This is a footer'"
            :big-text="'Footer component'">
        </quote>

        <footer-component
          :name="'main'"
          :contained="false"
          :contacts="contacts"
          :details="details">

          <div slot="row-01">row-01</div>
          <div slot="row-02">row-02</div>
          <div slot="row-03">row-03</div>

        </footer-component>
        <!-- ––––––––––––––––––––––––––––––––––––––- END HEADER -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Quote from '../../../common/Quote.vue';
import Tree from '../../../common/Tree.vue';
import HeaderComponent from '../../../common/HeaderComponent.vue';
import FooterComponent from '../../../common/FooterComponent.vue';
import axios from 'axios';

export default {
  name: 'GridPage',
  watch: {
    '$route' (to, from) {
      console.log('route changed');
    }
  },
  components: {
    Quote,
    Tree,
    HeaderComponent,
    FooterComponent
  },
  data(){
    return{
      componentsMenu: [],
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
      }
    }
  },
  created () {
    axios.get(API_URL + `assets/data/components-menu.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.componentsMenu = response.data;
    })
    .catch(e => {
      console.log(e);
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main-sass-only.scss";

</style>
