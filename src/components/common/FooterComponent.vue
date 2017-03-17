<template>
  <footer class="footer" :class="'footer-' + name">
    <slot name="row-0">
      <div class="footer__wrap">
        SLOT "row-0"
      </div>
    </slot>

    <slot name="row-1">
      <div class="footer__wrap">
        SLOT "row-1"
      </div>
    </slot>

    <slot name="row-2">
      <div class="footer__wrap">
        SLOT "row-2"
      </div>
    </slot>

  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: [
    'name',
    'contacts',
    'menu',
    'details'
  ],
  data () {
    return{}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main.scss";

.footer{
  @include pb(6);
  @include pt(6);

  &__wrap{
    @include make-container-max-widths();
    margin: 0 auto;
  }
}

</style>
