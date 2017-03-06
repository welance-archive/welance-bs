<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg"/>
  </div>
</template>

<script>
let message = '';

export default {
    name: 'hello',
    components: {},
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
