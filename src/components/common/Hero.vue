<template>
  <div class="hero" :class="[{'wrap wrap--contained' : contained}, 'hero-' + name]">

    <pre v-if="debug" class="row">
      ℹ️ Hero

      SLOTS:
        • row-01
        • row-02
        • row-03

      PROPS:
        • name (string)
        • debug (boolean)
        • contained (boolean)
        • pre-title (HTML string)
        • title (HTML string)
        • sub-title (HTML string)
        • ctas (array of objects)
          [
            {title: 'go to external link', action: 'http://example.com', class: 'btn col--4-12 btn--primary'},
            {title: 'go to internal link', action: 'this-is-a-route', class: 'btn col--4-12 btn--primary'},
            {title: 'execute function', action: this.openModal, class: 'btn col--4-12 btn--primary'}
          ]
        • visual-element (object) {type: 'image', class: 'img img--ratio-1-1', url: 'https://fillmurray.com/1400/1400'}
        • col-one-class (String)
        • col-two-class (String)
        • reverse-cols (Boolean)
    </pre>

    <slot name="row-01"></slot>
    <slot name="row-02">
      <div class="row hero__row" :class="reverseCols ? 'hero__row--reverse' : ''">
        <div class="col hero__col" :class="colOneClass">
          <quote  :type="'main'"
                  :small-text-pre="preTitle"
                  :big-text="title"
                  :small-text-sub="subTitle"
          >
          </quote>
          <div class="wrap hero__ctas">
            <div class="row">
              <template v-for="(cta, index) in ctas">
                <template v-if="urlType(cta.action) === 'internal'">
                  <router-link :class="cta.class ? cta.class : 'btn col--6-12 btn--primary'" v-if="urlType(cta.action) === 'internal'" :to="cta.action">{{cta.title}}</router-link>
                </template>
                <template v-else-if="urlType(cta.action) === 'external'">
                  <a :class="cta.class ? cta.class : 'btn col--6-12 btn--primary'" v-if="urlType(cta.action) === 'external'" :href="cta.action">{{cta.title}}</a>
                </template>
                <template v-else="urlType(cta.action) === 'function'">
                  <button :class="cta.class ? cta.class : 'btn col--6-12 btn--primary'" v-if="urlType(cta.action) === 'function'" v-on:click.stop.prevent="cta.action" >{{cta.title}}</button>
                </template>
              </template>
            </div>
          </div>
        </div>
        <div class="col hero__visuals" v-if="visualElement" :class="colTwoClass">
          <div v-if="visualElement.type === 'image'" :class="visualElement.class" :style="{ 'background-image': 'url(' + visualElement.url + ')' }"> </div>
        </div>
      </div>
    </slot>
    <slot name="row-03"></slot>
  </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    name: 'Hero',
    components: {
      Quote
    },
    props: [
              'name',
              'debug',
              'contained',
              'title',
              'subTitle',
              'preTitle',
              'ctas',
              'visualElement',
              'colOneClass',
              'colTwoClass',
              'reverseCols'
            ],
    methods: {
      urlType: function (value) {
        if(typeof value == 'function'){
          return 'function';
        }else if(value.indexOf('http') !== -1){
          return 'external';
        }else{
          return 'internal';
        }
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main-sass-only.scss";

.hero {
  margin: 0 auto;

  @include mq($until: 'sm'){
    padding-left: 0;
    padding-right: 0;
  }

  &__row{

    &--reverse{
      flex-flow: row-reverse;
      @include mq($until: 'md'){
        flex-wrap: wrap;
      }
    }
    @include mq($until: 'md'){
      flex-wrap: wrap-reverse;
    }
  }
  &__visuals{
    align-self: center;
  }
  &__ctas{
    @include mt(1);
  }
};

</style>
