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
        <!-- ––––––––––––––––––––––––––––––––––––––- BUTTONS -->
        <section class="btn-section">

            <quote
              :name="'buttons'"
              :small-text-pre="''"
              :big-text="'Buttons'"
              :small-text-sub="'Normal, Outline, No-Outline, Full, Big, Normal, Small, Tiny, Rounded'">
            </quote>

            <div class="row">
              <div class="col col--12-12">
                <button class="btn" type="button">default</button>
                <button class="btn" type="button" disabled="disabled">default</button>
                <button class="btn btn--outline" type="button">default</button>
                <button class="btn btn--outline" disabled="disabled" type="button">default</button>
                <button class="btn btn--no-outline" type="button">default</button>
                <button class="btn btn--no-outline" disabled="disabled" type="button">default</button>
                <br/><br/>
                <button class="btn btn--primary" type="button">primary</button>
                <button class="btn btn--primary" type="button" disabled="disabled">primary</button>
                <button class="btn btn--primary btn--outline" type="button">primary</button>
                <button class="btn btn--primary btn--outline" disabled="disabled" type="button">primary</button>
                <button class="btn btn--primary btn--no-outline" type="button">primary</button>
                <button class="btn btn--primary btn--no-outline" disabled="disabled" type="button">primary</button>
                <br/><br/>
                <button class="btn btn--info" type="button">info</button>
                <button class="btn btn--info" type="button" disabled="disabled">info</button>
                <button class="btn btn--info btn--outline" type="button">info</button>
                <button class="btn btn--info btn--outline" disabled="disabled" type="button">info</button>
                <button class="btn btn--info btn--no-outline" type="button">info</button>
                <button class="btn btn--info btn--no-outline" disabled="disabled" type="button">info</button>
                <br/><br/>
                <button class="btn btn--warning" type="button">warning</button>
                <button class="btn btn--warning" disabled="disabled" type="button">warning</button>
                <button class="btn btn--warning btn--outline" type="button">warning</button>
                <button class="btn btn--warning btn--outline" disabled="disabled" type="button">warning</button>
                <button class="btn btn--warning btn--no-outline" type="button">warning</button>
                <button class="btn btn--warning btn--no-outline" disabled="disabled" type="button">warning</button>
                <br/><br/>
                <button class="btn btn--danger" type="button">danger</button>
                <button class="btn btn--danger" type="button" disabled="disabled">danger</button>
                <button class="btn btn--danger btn--outline" type="button">danger</button>
                <button class="btn btn--danger btn--outline" type="button" disabled="disabled">danger</button>
                <button class="btn btn--danger btn--no-outline" type="button">danger</button>
                <button class="btn btn--danger btn--no-outline" type="button" disabled="disabled">danger</button>
                <br/><br/>
                <button class="btn btn--success" type="button">success</button>
                <button class="btn btn--success" type="button" disabled="disabled">success</button>
                <button class="btn btn--success btn--outline" type="button">success</button>
                <button class="btn btn--success btn--outline" type="button" disabled="disabled">success</button>
                <button class="btn btn--success btn--no-outline" type="button">success</button>
                <button class="btn btn--success btn--no-outline" type="button" disabled="disabled">success</button>
                <br/><br/>
                <button class="btn btn--full btn--primary btn--outline" type="button">full</button>
                <br/><br/>
                <button class="btn btn--primary btn--big" type="button">I'm a Big Button!</button>
                <br/><br/>
                <button class="btn btn--primary" type="button">I'm a Normal Button</button>
                <br/><br/>
                <button class="btn btn--primary btn--small" type="button">I'm a Small Button</button>
                <br/><br/>
                <button class="btn btn--primary btn--tiny" type="button">I'm a tiny Button</button>
                <button class="btn btn--primary btn--tiny btn--outline" type="button">I'm a tiny Button</button>
                <br/><br/>
                <button class="btn btn--warning btn--outline btn--rounded" type="button">rounded</button>
                <button class="btn btn--warning btn--outline btn--rounded" type="button">rounded<br/>with smt<br/>like... five<br/>lines<br/>in it<br/></button>
              </div>
            </div>

        </section>
        <!-- ––––––––––––––––––––––––––––––––––––––- END BUTTONS -->
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
  name: 'ButtonsPage',
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

</style>
