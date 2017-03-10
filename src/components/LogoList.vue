<template>
  <section class="section">
    <div class="logo-list">
        <quote  :small-text-pre="smallTextPre"
                :big-text="bigText"
                :small-text-sub="smallTextSub"
        ></quote>
        <div class="logo-list__col">
          <gallery  :images="logos"
                    :gallery-type="'squares'"
          ></gallery>
        </div>
    </div>
  </section>
</template>

<script>
import Quote from 'components/common/Quote.vue';
import Gallery from 'components/common/Gallery.vue';

export default {
  name: 'LogoList',
  components: {
    Quote,
    Gallery
  },
  props: ['logos'],
  data () {
    return{
      smallTextPre: 'Clients List',
      bigText: 'These are our awesome clients',
      smallTextSub: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{}

.logo-list{
  @include make-container-max-widths();
  margin: 0 auto;

  &__col{
    @include make-col(12);
  }
}

</style>
