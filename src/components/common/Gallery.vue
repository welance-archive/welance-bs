<template>
  <div class="gallery" :class="['gallery-' + name]">
    <div class="gallery__wrap" :class="{'wrap wrap--contained' : contained}">
    <div class="gallery__row" :class="galleryTypeClass">
      <template v-for="image in images">
        <template v-if="image.link">

            <a    :href="image.link" :alt="image.alt" :target="image.target"
                  class="img"
                  :class="[image.ratio ? 'img--ratio-' + image.ratio : '']"
                  :style="{ backgroundImage: 'url(' + image.src + ')' }"

            >
              <div class="img__text-container">
                <h5 v-if="image.title">{{image.title}}</h5>
                <h6 v-if="image.subtitle">{{image.subtitle}}</h6>
              </div>
            </a>

        </template>
        <template v-else>
            <div  class="img"
                  :class="[image.ratio ? 'img--ratio-' + image.ratio : '']"
                  :style="{ backgroundImage: 'url(' + image.src + ')' }"
            >
              <div class="img__text-container">
                <h5 v-if="image.title">{{image.title}}</h5>
                <h6 v-if="image.subtitle">{{image.subtitle}}</h6>
              </div>
            </div>
        </template>
      </template>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Gallery',
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
    'galleryType': {
      type: String,
      default: 'squares'
    },
    'images': {
      type: Array,
      default: []
    }
  },
  data () {
    return{
      galleryTypeClass: {
        'gallery__row--off-canvas'  : this.galleryType === 'off-canvas',
        'gallery__row--blocky'      : this.galleryType === 'blocky',
        'gallery__row--squares'     : this.galleryType === 'squares'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main-sass-only.scss";


.gallery {

  &__wrap{
    width: 100%;
    height: 100%;
  }

  &__row{

    .img{
      &__text-container{
        @include pl(2);
        @include pr(2);
        @include pb(1);
      }
    }
    // Mode: squares
    //
    // Feature List:
    // 1) respect image sizes ratios (unless ignored from component setup) so it can show non-squared images
    // 2) displays squared images next to each other, going on new line with .5vw margin
    // 3) stays on left edge until md, where it centers all the squares
    // 4) If links exists they work, but title and subtitle are not shown
    //
    &--squares{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      .img{
        @include flexembed-image(100%, null);
        min-width: 20%;
        border: 1px solid $white;
        margin: 0;
        align-self: space-between;

        @include mq($until: 'lg'){
          min-width: 33.33%;
        }

        @include mq($until: 'md'){
          min-width: 50%;
        }
        &__text-container{
          display: none;
        }
      }
    }

    // Mode: blocky
    //
    // Feature List:
    // T.B.D with @nano
    //
    &--blocky{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: 100%;

      //behaves like off-canvas until MD
      @include mq($until: 'md'){
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        overflow: scroll;
      }

      .img{
        @include mq($until: 'md'){
          @include mr(2);
        }
        flex: 1 2 auto;
        &__text-container{
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }

    // Mode: off-canvas
    //
    // Feature List:
    // 1) respect image sizes ratios (unless ignored from component setup)
    // 2) flex-end alignement for big displays
    // 3) vertically centered alignement for medium displays
    // 4) 100% responsive on small displays
    // 5) If links exists they work, and title and subtitle are shown
    &--off-canvas{
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-content: center;

      @include mq($until: 'lg'){
        justify-content: flex-start;
        align-content: flex-start;
        overflow: scroll;
      }

      .img{
        align-self: center;
        @include mr(2);

        @include mq($from: 'xl'){
          align-self: flex-end;
        }
      }
    }
  }
};

</style>
