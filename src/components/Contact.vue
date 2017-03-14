<template>
  <div class="contact" :class="'contact-' + name">
    <div class="contact__row">
      <div class="contact__left-col">
        <quote  :name="name"
                :small-text-pre="preTitle"
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
      'name',
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
<style lang="scss">
@import "~styles/main.scss";

.contact {
  @include make-container-max-widths();
  margin: 0 auto;

  &__row{
    @include make-row();
  }

  &__left-col{
    @include make-col(8);
      @include mq($until: 'md'){
        @include make-col(12);
      }
  }
  &__right-col{
    @include make-col(4);
      @include mq($until: 'md'){
        @include make-col(12);
      }
  }
  &__form{
    input[type=email]{
      height: 56px;
      padding: 2em 1.25em;
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
