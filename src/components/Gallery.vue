<template>
  <div class="section">
    <div class="gallery">
      <div class="gallery__container gallery__container--off-canvas">
        <div class="img img--ratio-9-16" style="background-image:url('http://fillmurray.com/400/400');"> </div>
        <div class="img img--ratio-12-16" style="background-image:url('http://fillmurray.com/400/400');"> </div>
        <div class="img img--ratio-9-16" style="background-image:url('http://fillmurray.com/400/400');"> </div>
        <div class="img img--ratio-12-16" style="background-image:url('http://fillmurray.com/400/400');"> </div>
        <div class="img img--ratio-9-16" style="background-image:url('http://fillmurray.com/400/400');"> </div>
        <div class="img img--ratio-12-16" style="background-image:url('http://fillmurray.com/400/400');"> </div>
        <div class="img img--ratio-9-16" style="background-image:url('http://fillmurray.com/400/400');"> </div>
        <div class="img img--ratio-12-16" style="background-image:url('http://fillmurray.com/400/400');"> </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return{}
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
      @include make-row();
      flex-flow: row nowrap;

      .img{
        align-self: center;
        border: 16px solid white;
        &:last-child{
          border-right: none;
        }
        &:first-child{
          border-left: none;
        }

        @include mq($from: 'xl'){
          align-self: flex-end;
        }
      }

      @include mq($until: 'md'){
        flex-flow: row wrap;
        .img{
          border: none;
          border-top: 16px solid white;
          width: 100%;
        }
      }
    }
 }
};

</style>
