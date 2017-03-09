<template>
  <div class="section">
    <div class="contact">
      <div class="contact__container">
        <div class="contact__col">
          <h2>
            {{text}}
          </h2>
          <p class="contact__details">
            Just Call Philipp <a href="#">030 / 60 98 57 750</a>send a message to <a href="#">projects@welance.com</a> or visit our wonderful Space in Berlin- Kreuzberg
          </p>
          <form class="contact__form">
            <input type="email" placeholder="Join the welance list...">
            <input class="btn btn--primary" type="submit" value="subscribe">
          </form>
        </div>
        <div class="contact__col">
          <span>this is Philipp</span>
          <img :src="imgUrl" class="contact__img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Contact',
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

.section{
  background: $ultra-light-grey;
    @include mq($until: 'md'){
      padding: 0 3em;
      overflow: hidden;
    }
}

.contact {
  @include make-container-max-widths();
  margin: 0 auto;
  padding: 20vh 0;

  &__container{
    @include make-row();
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
  }

  &__col{
    @include make-col-ready();
    @include make-col(6);
      @include mq($until: 'md'){
        @include make-col(12);
      }
    &:nth-child(2){
      text-align: right;
      align-self: flex-end;
    }
  }

  & h2{
    margin-bottom: .7em;
  }
  & p{
    margin-bottom: 2em;
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
