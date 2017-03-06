<template>
  <div class="section">
    <div class="hero">
      <div class="hero__container">
        <div class="hero__col">
          <div class="hero__col-inner">
            <h1 class="title title--xl">{{title}}</h1>
            <h2 class="title title--m">{{subtitle}}</h2>
            <button class="hero__col-btn" type="button">Start a project</button>
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
    name: 'HeroComponent',
    data () {
        return{
            title: 'We help you build the next Squarespace',
						subtitle: 'Bring Your Ideas To Life',
						ctaUrl: '/contact'
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{
  background-color: $ultra-light-grey;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  @include make-container-max-widths();
  margin: 0 auto;

  &__container{
    @include make-row();
    @include mq($until: 'md'){
      flex-direction: column-reverse;
    }
    max-height: 100vh;
    overflow: hidden;
  }
  &__col{
    @include make-col-ready();
    @include make-col(6);
    @include mq($until: 'md'){
      @include make-col(12);
    }
  }
  &__col-btn{
    //display: inline-block;
  }
  &__visuals{
    @include make-col-ready();
    @include make-col(6);
    @include mq($until: 'md'){
      @include make-col(12);
    }
    text-align: right;
    .img{
      width: 50%;
    }
  }
};

</style>
