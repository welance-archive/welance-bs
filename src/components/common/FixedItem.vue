<template>
  <transition name="fixed-item">
    <div class="fixed-item__wrap" v-if="scrolled">
      <slot name="content"></slot>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'FixedItem',
    props: [
      'name',
      'contacts',
      'menu',
      'details',
      'appearAt'
    ],
    data () {
        return{
            scrolled: false
        }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > this.appearAt;
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
<style lang="scss">
@import "~styles/main.scss";


.fixed-item {

  &__wrap{
    position: fixed;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s ease;
    z-index: 99999999999999999999;
    background: rgba(255,255,255,.8);
    opacity: 1;
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

.fixed-item-enter, .fixed-item-leave-to{
  transform: translateY(-100px);
  opacity: 0;
}
.fixed-item-leave, .fixed-item-enter-to{
  transform: translateY(-100px);
  opacity: 0;
}

.fixed-item-enter-active {
  transition: all .3s ease;
}
.fixed-item-leave-active {
  transition: all .3s ease;
}

</style>
