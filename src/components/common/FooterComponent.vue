<template>
  <div class="section">
    <div class="footer">
      <h1>{{ msg }}</h1>
    </div>
  </div>
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

.section {
  background: black;
  flex: 1;
};

</style>
