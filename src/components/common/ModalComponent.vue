<template>
  <transition name="modal">
    <div class="modal">
        <div class="modal__mask" @click="$emit('close')"></div>
        <div class="modal__wrapper modal__wrapper--half">
            <div class="modal__container modal__container--half">
                <div class="modal__header">
                <slot name="header">
                    <span @click="$emit('close')">close</span>
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
                    <button class="modal__default-btn" @click="$emit('close')">
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
    name: 'ModalComponent',
    data () {
        return{
            text: 'This is a huge text with some content in it',
			smallText: 'M. Gandhi'
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
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: table-cell;
    vertical-align: middle;
    &--full{
        overflow-y: scroll;
    }
    &--half, &--tiny{
        display: block;
        overflow-y: scroll;
        height: 100vh;
    }
  }

  &__container{
    pointer-events: auto;

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
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  &__header{
    margin-top: 0;
    color: #42b983;
  }

  &__body{
    margin: 20px 0;
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
