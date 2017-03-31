<template>
  <div class="gallery-wrapper" :class="['gallery-' + name, galleryTypeClass]">
    <div class="gallery">
      <div class="gallery__container" :class="galleryTypeClass">
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
  props: [
          'name',
          'images',
          'galleryType'
          ],
  data () {
    return{
      galleryTypeClass: {
        'gallery__container--off-canvas'  : this.galleryType === 'off-canvas',
        'gallery__container--blocky'      : this.galleryType === 'blocky',
        'gallery__container--squares'     : this.galleryType === 'squares'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main.scss";

.gallery-wrapper{
  //background: red;
  overflow: hidden;
  height: auto;
  &.gallery__container--off-canvas{
    overflow: visible;
  }
}

.gallery {
  @include make-container-max-widths();
  margin: 0 auto;

  &__container{
    flex-flow: row wrap;
    justify-content: space-around;

    // GRID
    // sm: 540px,
    // md: 720px,
    // lg: 960px,
    // xl: 1140px,
    // xxl: 1560px

    // Mode: squares
    //
    // Feature List:
    // 1) respect image sizes ratios (unless ignored from component setup) so it can show non-squared images
    // 2) displays squared images next to each other, going on new line with .5vw margin
    // 3) stays on left edge until md, where it centers all the squares
    // 4) If links exists they work, but title and subtitle are not shown
    //
    &--squares{
      @include make-row();
      flex-flow: row wrap;
      justify-content: flex-start;

      .img{
        &:first-child, &:nth-child(4n+5){
          margin-left: 0!important;
          //border-bottom: 1px solid blue; //debug
        }
      }

      @include mq($from: 'xs'){
        @include ml(1);
        @include mr(1);
        flex-flow: row wrap;
        justify-content: space-between;
        .img{
          @include flexembed-image(100%, null, 10rem); //lg: 540px,
          @include m(0);
          @include mb(1);
          &__text-container{
            display: none;
          }
        }
      }

      @include mq($from: 'sm'){
        @include ml(1);
        @include mr(1);
        flex-flow: row wrap;
        justify-content: space-between;
        .img{
          @include flexembed-image(100%, null, 8rem); //lg: 540px,
          @include m(0);
          @include mb(1);
          &__text-container{
            display: none;
          }
        }
      }

      @include mq($from: 'md'){
        @include ml(1);
        @include mr(1);
        justify-content: center;
        .img{
          @include flexembed-image(100%, null, 10rem); //lg: 720px,
          @include m(0);
          @include ml(1);
          @include mb(1);
          &__text-container{
            display: none;
          }
        }
      }

      @include mq($from: 'lg'){
        flex-flow: row wrap;
        justify-content: flex-start;
        .img{
          @include flexembed-image(100%, null, 13.7rem); //lg: 960px,
          @include m(0);
          @include ml(1);
          @include mb(1);
          &__text-container{
            display: none;
          }
        }
      }

      @include mq($from: 'xl'){
        .img{
          @include flexembed-image(100%, null, 16.55rem); //xl: 1140px,
          @include m(0);
          @include ml(1);
          @include mb(1);
          &__text-container{
            display: none;
          }
        }
      }
      @include mq($from: 'xxl'){
        .img{
          @include flexembed-image(100%, null, 22.7rem); //xxl: 1560px
          @include m(0);
          @include ml(1);
          @include mb(1);
          &__text-container{
            display: none;
          }
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
      flex-flow: row wrap;
      justify-content: flex-start;
      align-content: center;

      .img{
        align-self: flex-start;
        flex: auto;
        @include p(2);
        @include ml(2);
        @include mr(2);
        @include mb(2);
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
      @include mq($from: 'md'){
        @include make-row();
        flex-flow: row nowrap;
      }

      .img{
        align-self: center;
        @include m(2);

        &:last-child{
          @include mr(0);
        }
        &:first-child{
          @include ml(0);
        }
        &__text-container{
          @include ml(1);
        }

        @include mq($from: 'xl'){
          align-self: flex-end;
        }
      }

      @include mq($until: 'md'){
        flex-flow: column wrap;
        @include m(1);
        //@include ml(0);
        .img{
          @include m(0);
          @include mt(2);

          &:last-child{
            @include mb(0);
          }
          &:first-child{
            @include mt(0);
          }
        }
      }
      @include mq($until: 'xs'){
        @include m(2);
        @include ml(0);
      }
    }
 }
};

</style>
