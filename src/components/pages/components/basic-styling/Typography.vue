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
        <!-- ––––––––––––––––––––––––––––––––––––––- TYPOGRAPHY -->
        <section class="typography-section">
          <quote
            :name="'typography'"
            :small-text-pre="''"
            :big-text="'Typography'"
            :small-text-sub="'A quick presentation of the headings and text styles available'">
          </quote>

          <div class="row">
            <h1 class="lines col col--12-12" v-html="'–H1 ' + msg + ' –H1'"></h1>
            <h2 class="lines col col--12-12" v-html="'–H2 ' + msg + ' –H2'"></h2>
            <h3 class="lines col col--12-12" v-html="'–H3 ' + msg + ' –H3'"></h3>
            <h4 class="lines col col--12-12" v-html="'–H4 ' + msg + ' –H4'"></h4>
            <h5 class="lines col col--12-12" v-html="'–H5 ' + msg + ' –H5'"></h5>
            <h6 class="lines col col--12-12" v-html="'–H6 ' + msg + ' –H6'"></h6>
          </div>
          <br><br>
          <div class="row">
            <p class="lines col col--12-12" v-html="paragraph"></p>
            <p class="lines col col--12-12" v-html="paragraph"></p>

            <p class="lines col col--4-12@md col--12-12@sm" v-html="paragraph"></p>
            <p class="lines col col--4-12@md col--12-12@sm" v-html="paragraph"></p>
            <p class="lines col col--4-12@md col--12-12@sm" v-html="paragraph"></p>

            <p class="lines col col--6-12@md col--6-12@sm col--12-12@xs" v-html="paragraph"></p>
            <p class="lines col col--6-12@md col--6-12@sm col--12-12@xs" v-html="paragraph"></p>
          </div>
        </section>

        <section class="typography-section">
          <quote
            :name="'type'"
            :small-text-pre="''"
            :big-text="'Typefaces'"
            :small-text-sub="''">
          </quote>

          <h4 class="col-12">Standard TypeFace</h4>
          <p class="col-12" v-html="alphabet"></p>
        </section>
        <!-- ––––––––––––––––––––––––––––––––––––––- END TYPOGRAPHY -->
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
  name: 'TypographyPage',
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
    openModal: function(){
      this.showModal = true;
      this.$emit('modalOpened');
    },
    closeModal: function(){
      this.showModal = false;
      this.$emit('modalClosed');
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
  },
  data () {
    return {
      componentsMenu : [],
      msg: "This letter 'qjg' gos on a new line so you can <a href=\"#\">simply</a> check the letter 'g'",
      paragraph: "Lorem Ipsum <a href=\"#\">is simply dummy</a> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alphabet: " ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/> abcdefghijklmnopqrstuvwxyz <br/> 0123456789",
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main-sass-only.scss";

.typography-section {
  .lines{
    &:nth-child(odd){
      border-bottom: 1px solid deepskyblue;
      border-top: 1px solid deepskyblue;
    }
    border-bottom: 1px solid deepskyblue;
    border-top: 1px solid deepskyblue;
  }
}
</style>
