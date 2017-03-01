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
/*
 *
 *
 * IMPORTANT:
 * try not to write styles here and use SASS files instead
 * use this styling only when strictly necessary.
 * ...but even then, first try to find better alternatives.
 *
 *
 */
</style>
