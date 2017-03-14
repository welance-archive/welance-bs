<template>
  <div class="hero" :class="'hero-' + name">
    <div class="hero__container">
      <div class="hero__col">
        <div class="hero__col-inner">
          <quote  :type="'main'"
                  :small-text-pre="''"
                  :big-text="title"
                  :small-text-sub="subtitle"
          >
            <div class="hero__extra" slot="extra">
              <button class="btn btn--primary" v-if="!ctaUrl" v-on:click.stop.prevent="openModal()" >{{ctaText}}</button>
            </div>
          </quote>

          <router-link class="btn btn--info" v-if="ctaUrl" :to="ctaUrl">{{ctaText}}</router-link>
        </div>
      </div>
      <div class="hero__visuals" v-if="image">
        <div class="img img--ratio-1-1" :style="{ 'background-image': 'url(' + image + ')' }"> </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from 'components/common/Quote.vue';

export default {
    name: 'Hero',
    components: {
      Quote
    },
    props: [
              'name',
              'openModal',
              'title',
              'subtitle',
              'image',
              'ctaUrl',
              'ctaText'
            ],
    data () {
        return{}
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main.scss";

.hero {
  @include make-container-max-widths();
  margin: 0 auto;

  &__container{
    @include make-row();
    @include mq($until: 'md'){
      flex-wrap: wrap-reverse;
    }

  }
  &__extra{
    @include mq($until: 'lg'){
      @include pt(3);
    }
    @include mq($from: 'lg'){
      @include pt(17);
    }
  }
  &__col{
    @include make-col(7);

    @include mq($until: 'md'){
      @include make-col(12);
    }
  }
  &__visuals{
    @include make-col(5);
    @include mq($until: 'md'){
      @include make-col(12);
    }
    @include mq($until: 'sm'){
      @include pl(3);
      @include pr(3);
    }
  }
};

</style>
