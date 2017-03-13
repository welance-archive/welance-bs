<template>
  <header class="header-wrap">
    <div class="header" :class="'header-' + name">
      <div class="header__container">
        <div class="header__col">
          <img class="logo" src="/assets/images/logo.svg"/>
        </div>
        <div class="header__col">
          <h6 class="phone">
            <a :href="'tel:'+contacts.phone" class="phone__number">
              {{contacts.phone}}
            </a><br/>
            <span class="phone__availability">
              <span class="phone__availability-check"></span> {{availabilityText}}
            </span>
          </h6>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: [
    'name',
    'contacts',
    'menu',
    'details'
  ],
  data () {
    return{}
  },
  computed: {
    availabilityText: function(){
      return 'We are available in 5 min';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main.scss";

.header {
  @include make-container-max-widths();
  margin: 0 auto;

  @include mq($until: 'sm'){
    @include make-container();
  }

	&__container{
		@include make-row();
		justify-content: space-between;
    align-items: center;
	}
	&__col{
		@include make-col-ready();
		@include make-col(6);
    &:first-child{
      @include make-col(4);
    }
    &:last-child{
      @include make-col(8);
    }
	}
};
.logo{
	max-height: 60px;
  @include mq($until: 'sm'){
    float: right;
  }
}
.phone{
  margin-bottom: 0;
	text-align: right;
  @include mq($until: 'sm'){
    font-size: 0.75em;
    text-align: left;
  }
}

</style>
