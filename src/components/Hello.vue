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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
