<template>
  <transition name="modal">
    <div class="modal">
			<div class="modal__mask" v-on:click="closeModal"></div>
			<div class="modal__wrapper">
				<div class="modal__container" v-bind:class="dimensionClass">
					<div class="modal__header">
					<slot name="header">
						<strong><span v-on:click="closeModal">close</span></strong> Modal of Size: {{modalSize}}
					</slot>
					</div>
					<div class="modal__body">
					<slot name="body">
						default body
					</slot>
					</div>
					<div class="modal__footer">
					<slot name="footer">
						default footer
						<button class="modal__default-btn" v-on:click="closeModal">
						OK
						</button>
					</slot>
					</div>
				</div>
			</div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'Modal',
		props: ['modalSize'],
    data () {
        return{
					dimensionClass: {
						'modal__container--tiny' : this.modalSize === 'tiny',
						'modal__container--half' : this.modalSize === 'half',
						'modal__container--full' : this.modalSize === 'full'
					}
				}
    },
		methods: {
			closeModal: function(event){
				if (event) event.preventDefault();
				this.$emit('close');
			}
		}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";


.modal{
  &__mask{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  &__wrapper{
		pointer-events: none; //TODO: double check safari for this
    position: fixed;
		display: flex;
		align-items: flex-start;
  	justify-content: center;

    z-index: 9998;
    top: 0;
    left: 0;
    height: 100vh;
		width: 100vw;
    overflow: scroll;
  }

  &__container{
		pointer-events: initial; //TODO: double check safari for this
    overflow-x: scroll;
		padding: 2em;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;

    &--full{
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
    }
    &--half{
        width: 60vw;
        margin-top: 10vh;
        margin-bottom: 10vh;
    }
    &--tiny{
        width: 35vw;
        margin-top: 10vh;
        margin-bottom: 10vh;
    }
  }

  &__header{
    margin-top: 0;
    color: #42b983;
  }

  &__body{
    margin: 20px 0;
  }

  &__footer{
  }

  &__default-btn{
    float: right;
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

.modal-enter, .modal-leave-to{
  .modal__container{
    transform: translateY(200px);
    opacity: 0;
  }
  .modal__mask{
    opacity: 0;
  }
}
.modal-leave, .modal-enter-to{
  .modal__container{
    transform: translateY(200px);
    opacity: 0;
  }
  .modal__mask{
    opacity: 0;
  }
}

.modal-enter-active {
  .modal__container{
    transition: all .3s ease;
  }
  transition: all .3s ease;
}
.modal-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  .modal__container{
    transition: all .3s ease-in;
  }
  .modal__mask {
    transition: all .8s ease;
  }
}
</style>
