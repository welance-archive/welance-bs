<template>
  <footer class="footer" :class="'footer-' + name">
    <div class="wrap footer__wrap" :class="{'wrap--contained' : contained}">

      <div class="row footer__row">
        <div class="col footer__col">
          <slot name="row-01"></slot>
        </div>
      </div>

      <div class="row footer__row">
        <div class="col footer__col">
          <slot name="row-02"></slot>
        </div>
      </div>

      <div class="row footer__row">
        <div class="col footer__col">
          <slot name="row-03"></slot>
        </div>
      </div>
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
@import "~styles/main-sass-only.scss";

.footer{
  &__row{

  }
  &__col{
    @include make-col(12);
  }
}
</style>
