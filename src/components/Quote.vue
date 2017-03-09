<template>
  <div class="section">
    <div class="quote">
      <div class="quote__container">
        <div class="quote__col">
          <h5>
            {{smallText}}
          </h5>
          <h2>
            {{text}}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Quote',
    data () {
        return{
            text: 'We make digital products and help organisations big and small connect with their audience.',
			      smallText: ''
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{
  @include mq($until: 'sm'){
    padding: 0 3em;
  }

}

.quote {
  @include make-container-max-widths();
  margin: 0 auto;

  padding: 10vh 0;

  &__container{
    @include make-row();
    flex-direction: row;
    overflow: hidden;
  }

  &__col{
    @include make-col-ready();
    @include make-col(10);
      @include mq($until: 'xl'){
        @include make-col(12);
      }
  }
};

</style>
