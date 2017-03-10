<template>
  <section class="section">
    <div class="quote">
      <div class="quote__container">
        <div class="quote__col">
          <h5 v-if="smallTextPre" v-html="smallTextPre"></h5>
          <h2 v-if="hugeText" v-html="hugeText" class="quote-heading"></h2>
          <h2 v-if="bigText" v-html="bigText" class="quote-heading"></h2>
          <h5 v-if="smallTextSub" v-html="smallTextSub"></h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Quote',
  props: {
            'smallTextPre': {
              type: String,
              default: 'Here a small text BEFORE Bit Text'
            },
            'hugeText': {
              type: String,
              default: ''
            },
            'bigText': {
              type: String,
              default: 'We make digital products and help organisations big and small connect with their audience.'
            },
            'smallTextSub': {
              type: String,
              default: 'Here a small text AFTER Bit Text'
            }
          },
  data () {
      return{}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{}

.quote {
  @include make-container-max-widths();
  margin: 0 auto;

  &__container{
    @include make-row();
  }

  &__col{
    @include make-col-ready();
    @include make-col(10);

    @include mq($until: 'xl'){
      @include make-col(12);
    }

    @include mq($until: 'sm'){
      @include pl(6);
      @include pr(6);
      @include mb(6);
      @include mt(6);
    }
  }
};

.quote-heading{
  @include mb(3);
  @include mt(3);

  &:first-child{
    @include mb(0);
    @include mt(0);
  }
  &:last-child{
    @include mb(0);
    @include mt(0);
  }

}

</style>
