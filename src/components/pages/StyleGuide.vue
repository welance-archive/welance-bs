<template>
<div>
  <div class="wrap wrap--contained">
    <div class="row">
      <div class="col col--12-12@xs">
        <quote
            :name="'main'"
            :type="'main'"
            :small-text-pre="''"
            :big-text="'Welance Bootstrap & Style Guide'"
            :small-text-sub="'Default styles and VueJS components of the Welance Bootstrap –visualised.'">
        </quote>
      </div>
    </div> <!-- /.row -->
    <div class="row">
      <div class="col col--12-12@xs">
        <em>TODO: presentation of features an more.</em>
      </div>
    </div><!-- /.row -->
  </div> <!-- /.wrap -->
</div>
</template>

<script>
import Quote from '../common/Quote.vue';

export default {
  name: 'StyleGuide',
  components: {
    Quote
  },
  methods: {},
  created () {},
  data () {
    return {
      msg: "This is a simple variable"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main-sass-only.scss";
</style>
