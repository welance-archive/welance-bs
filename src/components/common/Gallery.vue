<template>
  <section class="section">
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
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['images', 'galleryType'],
  data () {
    return{
      galleryTypeClass: {
        'gallery__container--off-canvas'  : this.galleryType === 'off-canvas',
        'gallery__container--blocky'      : this.galleryType === 'blocky',
        'gallery__container--squares'      : this.galleryType === 'squares'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{
  //background: red;
  overflow: hidden;
}

.gallery {
  @include make-container-max-widths();
  margin: 0 auto;

  &__container{
    flex-flow: row wrap;
    justify-content: space-around;

    // Mode: blocky
    //
    // Feature List:
    // T.B.D with @nano
    //
    &--squares{
      @include make-row();
      justify-content: center;

      .img{
        min-width: 128px;
        align-self: center;
        margin:  .5vw;
      }
      @include mq($until: 'md'){
        @include make-row();
        flex-flow: row wrap;
        //justify-content: flex-start;
        .img{
          min-width: 160px;
          align-self: center;
        }
      }
      @include mq($from: 'md'){
        @include make-row();
        flex-flow: row wrap;
        justify-content: flex-start;
      }
    }

    // Mode: blocky
    //
    // Feature List:
    // T.B.D with @nano
    //
    &--blocky{
      @include make-row();
      padding: .5vw;

      .img{
        flex: auto;
        margin: .5vw;
      }
    }

    // Mode: off-canvas
    //
    // Feature List:
    // 1) respect image sizes ratios
    // 2) flex-end alignement for big displays
    // 3) vertically centered alignement for medium displays
    // 4) 100% responsive on small displays
    &--off-canvas{
      @include mq($from: 'md'){
        @include make-row();
        flex-flow: row nowrap;
      }

      .img{
        align-self: center;
        margin: 16px;
        &:last-child{
          margin-right: 0px;
        }
        &:first-child{
          margin-left: 0px;
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
        .img{
          margin: 0px;
          margin-top: 16px;
          &:first-child{
            margin-top: 0px;
          }
          width: 100%;
        }
      }
    }
 }
};

</style>
