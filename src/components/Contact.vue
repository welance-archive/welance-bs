<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__left-col">
        <quote  :small-text-pre="preTitle"
                :big-text="title"
                :small-text-sub="subTitle"
        ></quote>
        <form class="contact__form">
          <input type="email" placeholder="Join the welance list...">
          <input class="btn btn--primary" type="submit" value="subscribe">
        </form>
      </div>
      <div class="contact__right-col">
        <span>this is Philipp</span>
        <img :src="imgUrl" class="contact__img">
      </div>
    </div>
  </div>
</template>

<script>
import Quote from 'components/common/Quote.vue';

export default {
    name: 'Contact',
    props: [
      'preTitle',
      'title',
      'subTitle'
    ],
    components: {
      Quote
    },
    data () {
        return{
            text: 'Curious to find out more? Let’s get in touch!',
            imgUrl: 'https://placehold.it/50x50'
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.contact {
  @include make-container-max-widths();
  margin: 0 auto;

  &__container{
    @include make-row();
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
  }

  &__left-col{
    @include make-col-ready();
    @include make-col(8);
      @include mq($until: 'md'){
        @include make-col(12);
      }
    &:nth-child(2){
      text-align: right;
      align-self: flex-end;
    }
  }
  &__right-col{
    @include make-col-ready();
    @include make-col(4);
      @include mq($until: 'md'){
        @include make-col(12);
      }
    &:nth-child(2){
      text-align: right;
      align-self: flex-end;
    }
  }
  &__form{
    input[type=email]{
      height: 56px;
      padding: 2em 1.25em;
      width: 100%;
      margin-bottom: 15px;
      border-radius: 4px;
      box-shadow: none;
      border: 1px solid #eee;
    }
    input[type=submit]{
    }
  }
};


</style>
