<template>
  <transition name="header">
	<div class="section section--active" v-if="scrolled">
		<div class="header">
			<div class="header__container">
				<div class="header__col">
					<img class="logo" src="/assets/images/logo.svg"/>
				</div>
				<div class="header__col">
					<h6 class="phone">
						<a :href="'tel:'+phone_number" class="phone__number">
							{{phone_number}}
						</a><br/>
						<span class="phone__availability">
							<span class="phone__availability-check"></span> {{availabilityText}}
						</span>
					</h6>
				</div>
			</div>
		</div>
	</div>
  </transition>
</template>

<script>
export default {
    name: 'FixedHeader',
    data () {
        return{
            msg: 'This is Header',
						phone_number: '+49 30 609 857 750',
            scrolled: false
        }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > 200;
      }
    },
		computed: {
			availabilityText: function(){
				return 'We are available in 5 min';
			}
		},
    created: function () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: all .2s ease;
  z-index: 99999;

  &--active{
    opacity: 1;
  }
}

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


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.header-enter, .header-leave-to{
  transform: translateY(-100px);
  opacity: 0;
}
.header-leave, .header-enter-to{
  transform: translateY(-100px);
  opacity: 0;
}

.header-enter-active {
  transition: all .3s ease;
}
.header-leave-active {
  transition: all .3s ease;
}

</style>
