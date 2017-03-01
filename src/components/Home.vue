<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>User grabbed via mixcloud.com API: <strong>{{ user.name ? user.name : 'Not Retrieved' }}</strong></p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'home',
    data () {
        return{
            msg: 'This is Home!',
            user: {}
        }
    },
    created () {
      let vc = this; //vc = VueComponent

      axios.get('https://api.mixcloud.com/spartacus/', {

      })
      .then(function (response) {
        vc.user = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
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
