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
          <form>
            <input type="email" placeholder="Join the welance list...">
            <input type="submit" value="subscribe">
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
    name: 'ContactComponent',
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

    &:nth-child(2){
      text-align: right;
      align-self: flex-end;
    }
  }

};


</style>
