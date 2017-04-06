<template>
  <div class="quote" :class="'quote-' + name">
    <div class="quote__row row">
      <div class="quote__col col">

        <template v-if="type==='main'">
          <h4 v-if="smallTextPre" v-html="smallTextPre"></h4>
          <h1 v-if="bigText" v-html="bigText" class="quote-heading"></h1>
          <h4 v-if="smallTextSub" v-html="smallTextSub"></h4>
        </template>
        <template v-else>
          <h5 v-if="smallTextPre" v-html="smallTextPre"></h5>
          <h2 v-if="bigText" v-html="bigText" class="quote-heading"></h2>
          <h5 v-if="smallTextSub" v-html="smallTextSub"></h5>
        </template>

        <slot name="extra"></slot>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  props: {
            'name': {
              type: String,
              default: 'default'
            },
            'type': {
              type: String,
              default: 'section'
            },
            'smallTextPre': {
              type: String,
              default: 'Here a small text BEFORE Bit Text'
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
<style lang="scss">
@import "./src/sass/main-sass-only.scss";

.quote {

  &__col{
    @include make-col(10);

    @include mq($until: 'xl'){
      @include make-col(12);
    }

    @include mb(4);
    @include mt(4);

    @include mq($until: 'sm'){
      @include pl(3);
      @include pr(3);
    }
  }
};

.quote-heading{
  @include mb(3);
  @include mt(3);
}

</style>
