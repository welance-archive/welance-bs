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
        <!-- ––––––––––––––––––––––––––––––––––––––- HERO -->
        <section class="hero-section">
          <quote
            :name="'hero'"
            :debug="false"
            :contained="false"
            :small-text-pre="''"
            :big-text="'Hero component'"
            :small-text-sub="'This is how you create an hero component'">
          </quote>

          <div class="col-12">
            <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/5vqrchv4/6/embedded/html/"></iframe>
          </div>

          <hero
            :name="'main'"
            :debug="false"
            :contained="false"
            :pre-title="''"
            :title="'We are the coolest kids in town, really kewl. 🖖'"
            :sub-title="'I am seriously guys'"
            :visual-element="visualElement"
            :col-one-class="'col--7-12@md col--12-12@xs'"
            :col-two-class="'col--5-12@md col--12-12@xs show@sm hide@xs'"
            :reverse-cols="false"
            :ctas="ctasExample"
          ></hero>
        </section>
        <!-- ––––––––––––––––––––––––––––––––––––––- END HERO -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Quote from '../../../common/Quote.vue';
import Tree from '../../../common/Tree.vue';
import Hero from '../../../common/Hero.vue';
import axios from 'axios';

export default {
  name: 'HeroPage',
  watch: {
    '$route' (to, from) {
      console.log('route changed');
    }
  },
  components: {
    Quote,
    Tree,
    Hero
  },
  methods: {
    exampleFunction : function(){
      alert('here you can have function calls')
    }
  },
  data(){
    return{
      componentsMenu: [],
      ctasExample:
        [
          {title: 'go to external link', action: 'http://example.com', class: 'btn col--4-12@sm col--12-12@xs btn--primary'},
          {title: 'go to internal link', action: 'add-route-here', class: 'btn col--4-12@sm col--12-12@xs btn--primary'},
          {title: 'execute function', action: this.exampleFunction, class: 'btn col--4-12@sm col--12-12@xs btn--primary'}
        ],
      visualElement: { type: 'image', class: 'img img--ratio-1-1', url: 'https://fillmurray.com/1400/1400' }
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
@import "~styles/main-sass-only.scss";

</style>
