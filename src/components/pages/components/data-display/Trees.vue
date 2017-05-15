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
        <!-- ––––––––––––––––––––––––––––––––––––––- TREES -->
        <section class="trees-section">

          <quote
            :name="'tree'"
            :small-text-pre="''"
            :big-text="'Trees'"
            :small-text-sub="'A component for listing (recursively)'">
          </quote>

          <div class="col--12-12">

            <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/c6s2tntm/2/embedded/html,js"></iframe>
            <div class="row">
              <tree
                :name="'example'"
                :debug="false"
                :contained="false"
                :columnClass="'col col--3-12@xl col--4-12@lg col--6-12@md col--12-12@xs'"
                :print-levels="4"
                :print-level-imgs="[1, 0, 0, 0]"
                :print-level-text="[1, 1, 1, 1]"
                :tree="servicesList">
              </tree>
            </div>

          </div>

        </section>
        <!-- ––––––––––––––––––––––––––––––––––––––- END TREES -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Quote from '../../../common/Quote.vue';
import Tree from '../../../common/Tree.vue';
import axios from 'axios';

export default {
  name: 'TreesPage',
  watch: {
    '$route' (to, from) {
      console.log('route changed');
    }
  },
  components: {
    Quote,
    Tree
  },
  methods: {
    exampleFunction : function(){
      alert('here you can have function calls')
    }
  },
  data(){
    return{
      componentsMenu : [],
      servicesList: []
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
    axios.get(API_URL + `assets/data/long-list.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.servicesList = response.data;
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
