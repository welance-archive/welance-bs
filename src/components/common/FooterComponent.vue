<template>
  <footer class="footer" :class="'footer-' + name">
    <div class="wrap footer__wrap" :class="{'wrap--contained' : contained}">
      <slot name="row-01">
        <div class="row">
        </div>
      </slot>

      <slot name="row-02">
        <div class="row">
        </div>
      </slot>

      <slot name="row-03">
        <div class="row">
        </div>
      </slot>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props:
  {
    'name': {
      type: String,
      default: 'default'
    },
    'debug': {
      type: Boolean,
      default: false
    },
    'contained': {
      type: Boolean,
      default: false
    },
    'contacts': {
      type: Object,
      default: {}
    },
    'details': {
      type: Object,
      default: {}
    }
  },
  data () {
    return{}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main-sass-only.scss";
</style>
