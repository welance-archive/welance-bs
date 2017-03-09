<template>
  <div class="section">
    <div class="hero">
      <div class="hero__container">
        <div class="hero__col">
          <div class="hero__col-inner">
            <h1 >{{title}}</h1>
            <h4>{{subtitle}}</h4>
            <button class="btn btn--primary" type="button" v-on:click.stop.prevent="openModal()" >{{ctaText}}</button>
          </div>
        </div>
        <div class="hero__visuals">
          <img class="img img-square" src="https://placeholdit.imgix.net/~text?txtsize=150&txt=1500%C3%971500&w=1500&h=1500"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Hero',
    props: ['openModal'],
    data () {
        return{
            title: 'We help you build the next Squarespace',
            subtitle: 'Being the savages bowsman, that is, the person who pulled the.',
            ctaUrl: '/contact',
            ctaText: 'Start a project'
        }
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{
  background-color: $ultra-light-grey;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @include mq($until: 'sm'){
    padding: 0 3em;
  }
}

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
