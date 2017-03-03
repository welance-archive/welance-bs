<template>
	<div class="section">
		<div class="header">
			<div class="header__container">
				<div class="header__col">
					<img class="logo" src="/assets/images/logo.svg"/>
				</div>
				<div class="header__col">
					<div class="phone">
						<a :href="'tel:'+phone_number" class="phone__number">
							{{phone_number}}
						</a>
						<div class="phone__availability">
							<span class="phone__availability-check"></span> {{availabilityText}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data () {
        return{
            msg: 'This is Header',
						phone_number: '+49 30 609 857 750'
        }
    },
		computed: {
			availabilityText: function(){
				return 'We are available in 5 min';
			}
		}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.header {
  @include make-container-max-widths();
  margin: 0 auto;

	&__container{
		@include make-row();
		//@include padding(4);
		justify-content: space-between;
	}
	&__col{
		@include make-col-ready();
		@include make-col(6);
	}
};
.logo{
	max-height: 100px;
}
.phone{
	text-align: right;
}

</style>
