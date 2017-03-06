<template>
  <div class="section">
    <div class="quote">
      <div class="quote__container">
        <div class="quote__col">
          <h4>
            {{smallText}}
          </h4>
          <h1>
            {{text}}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'QuoteComponent',
    data () {
        return{
            text: 'Welance is a bag bicycle rights, High Life sartorial cray craft beer',
			smallText: 'About Us'
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{
  //background: red;
}

.quote {
  @include make-container-max-widths();
  margin: 0 auto;

  padding: 20vh 0;

  &__container{
    @include make-row();
    flex-direction: row;
    overflow: hidden;
  }

  &__col{
    @include make-col-ready();
    @include make-col(12);
  }
};

</style>
