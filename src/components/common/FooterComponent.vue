<template>
  <footer class="footer-wrap">
    <div class="footer" :class="'footer-' + name">
      <p>{{ contacts.address }}</p><br/><br/><br/>
    </div>
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
  @include make-container-max-widths();
  margin: 0 auto;
}

</style>
