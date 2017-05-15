<template>
<div>
  <div class="wrap wrap--contained">
    <div class="row">
      <div class="col col--3-12@lg col--12-12@xs">
        <!--:open-all="true"-->
        <list
          :name="'menuzio'"
          :debug="false"
          :columnClass="'col--12-12@xs'"
          :mode="'tree'"
          :open-all="true"
          :print-levels="5"
          :print-level-imgs="[0,0,0,0,0]"
          :print-level-text="[1,1,1,1,1]"
          :list="componentsMenu">
        </list>
      </div>
      <div class="col col--9-12@lg col--12-12@xs">
        <!-- ––––––––––––––––––––––––––––––––––––––- GRID -->
        <section class="grid-section">

          <quote
            :name="'grid'"
            :small-text-pre="''"
            :big-text="'Grid System'"
            :small-text-sub="'Helper Classes'">
          </quote>

          <div class="row">
            <p class="col col--12-12">
              You can generate as many grids as your project requires by simple changing the SASS variable <strong>$grids</strong><br/>
              Eg.:
              <pre> $grids: (1, 5, 7, 8, 12);</pre>
              Will generate 5 grids helper classes for 1, 5, 7, 8 and 12 columns grid andding helpers that you can use like:
              <pre> class="col col--1-12@xl col--6-12@lg col--4-12@md col--12-12@xs"</pre>
              applied to 12 elements would generate this (resize window to see changes):
            </p>
          </div>
          <div class="row row-example">
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
            <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
          </div>
          <div class="row">
            <p class="col col--12-12">
              And obsviously you can mix them up!
              <pre> class="col col--4-12@xl col--1-8@lg col--1-5@xs"</pre>
              applied to 5 elements would generate this (resize window to see changes):
            </p>
          </div>
          <div class="row row-example">
            <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
            <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
            <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
            <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
            <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
          </div>

        </section>
        <!-- ––––––––––––––––––––––––––––––––––––––- END GRID -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Quote from '../../../common/Quote.vue';
import List from '../../../common/List.vue';
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
    List
  },
  data(){
    return{
      componentsMenu: []
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

.grid-section{
  .row-example{
    @include mt(2);
    @include mb(4);
    width: 100%;
    margin: 0 auto;
  }
  .col-example{
    border: 1px solid rgba(60,60,255,.4);
    min-height: 60px;
    color: rgba(60,60,255,1);
  }
}
</style>
