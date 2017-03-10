<template>
  <section class="section">
    <div class="hero">
      <div class="hero__container">
        <div class="hero__col">
          <div class="hero__col-inner">
            <h1 >{{title}}</h1>
            <h4>{{subtitle}}</h4>
            <button class="btn btn--primary" v-if="!ctaUrl" v-on:click.stop.prevent="openModal()" >{{ctaText}}</button>
            <a class="btn btn--info" v-if="ctaUrl" :href="ctaUrl">{{ctaText}}</a>
          </div>
        </div>
        <div class="hero__visuals">
          <div class="img img--ratio-1-1" :style="{ 'background-image': 'url(' + image + ')' }"> </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Hero',
    props: [
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
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{}

.hero {
  @include make-container-max-widths();
  margin: 0 auto;

  &__container{
    @include make-row();
    @include mq($until: 'md'){
    flex-wrap: wrap-reverse;
    }

  }
  &__col{
    @include make-col-ready();
    @include make-col(7);
    @include mq($until: 'md'){
      @include make-col(12);
    }
    & h1{
      @include mb(4);
    }
    & h4{
      margin-bottom: ms(1);
      max-width: 500px;
    }
    & .btn{
      @include mq($until: 'sm'){
        width: 100%;
        display: block;
      }
    }
  }
  &__visuals{
    @include make-col-ready();
    @include make-col(5);
    @include mq($until: 'md'){
      @include make-col(12);
    }
    text-align: right;
    .img{
      width: 90%;
      @include mq($until: 'md'){
        width: 100%;
        margin-bottom: 3em;
      }
    }
  }
};

</style>
