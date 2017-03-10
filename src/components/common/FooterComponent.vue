<template>
  <footer class="footer-wrap">
    <div class="footer">
      <p>{{ msg }}</p><br/><br/><br/>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data () {
        return{
            msg: 'This is Footer'
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.footer{
  @include make-container-max-widths();
  margin: 0 auto;
}

</style>
