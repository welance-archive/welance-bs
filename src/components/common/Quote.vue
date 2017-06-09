<template>
  <div class="quote" :class="[{'wrap wrap--contained' : contained}, 'quote-' + name]">

    <pre v-if="debug" class="row">
      ℹ️ Quote

      SLOTS:
        no slots

      PROPS:
        • name (string)
        • debug (boolean)
        • contained (boolean)
        • type (string) Possible balues: 'main' or ''
        • smallTextPre (HTML string)
        • BigText (HTML string)
        • smallTextSub (HTML string)
    </pre>

    <div class="row quote__row">
      <div class="col quote__col">

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
            'debug': {
              type: Boolean,
              default: false
            },
            'contained': {
              type: Boolean,
              default: false
            },
            'type': {
              type: String,
              default: 'section'
            },
            'smallTextPre': {
              type: String,
              default: ''
            },
            'bigText': {
              type: String,
              default: ''
            },
            'smallTextSub': {
              type: String,
              default: ''
            }
          },
  data () {
      return{}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main-sass-only.scss";

.quote {

};
</style>
