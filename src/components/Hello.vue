<template>
  <div class="hello">
    <header-component></header-component>

    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg"/>

    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

let message = '';

export default {
    name: 'hello',
    components: {
      HeaderComponent, FooterComponent
    },
    data () {
        return{
            msg: 'This is Hello!'
        }
    },
    created() {
      console.log('activated', this.msg);
      this.msg = message ? message : this.msg;
    },
    beforeDestroy() {
      console.log('beforeDestroy', this.msg);
      message = this.msg;
    },
    destroyed() {
      console.log('destroyed', this);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main.scss";

.hello {
  background: $brand-primary;
};

</style>
