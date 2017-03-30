<template>
  <div class="logo-list" :class="'logo-list-' + name">
      <div class="logo-list__col">
        <gallery  :name="name"
                  :images="logos"
                  :gallery-type="'squares'"
        ></gallery>
      </div>
  </div>
</template>

<script>
import Quote from './Quote.vue';
import Gallery from './Gallery.vue';

export default {
  name: 'LogoList',
  components: {
    Quote,
    Gallery
  },
  props: [
    'name',
    'logos'
  ],
  data () {
    return{}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main.scss";

.logo-list{
  @include make-container-max-widths();
  margin: 0 auto;

  &__col{
    @include make-col(12);
  }
}

</style>
