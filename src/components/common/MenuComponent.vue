<template>
  <div class="menu" :class="[{'wrap wrap--contained' : contained}, 'menu-' + name, 'menu-' + mode]">

    <div v-if="mode === 'header'" class="menu-hamburger" @click="mobileMenuOpen ? mobileMenuOpen=false : mobileMenuOpen=true" :class="mobileMenuOpen ? 'menu-hamburger--open' : ''">
      <span class="menu-hamburger__line"></span>
      <span class="menu-hamburger__line"></span>
      <span class="menu-hamburger__line"></span>
    </div>

    <nav class="row menu-row" :class="['menu-row--' + mode, mobileMenuOpen ? 'menu-row--header--open' : '']">
        <list
          :name="name + '-' + mode"
          :debug="false"
          :columnClass="columnClass"
          :print-levels="printLevels"
          :print-level-imgs="printLevelImgs"
          :print-level-text="printLevelText"
          :list="menu">
        </list>
    </nav>

  </div>
</template>

<script>
import List from './List.vue';

export default {
    name: 'MenuComponent',
    props:
    {
      'name': {
        type: String,
        default: 'default'
      },
      'debug': {
        type: Boolean,
        default: false
      },
      'contained': {
        type: Boolean,
        default: false
      },
      'level': {
        type: Number,
        default: 1
      },
      'printLevels': {
        type: Number,
        default: 0
      },
      'columnClass': {
        type: String,
        default: ''
      },
      'ignoreClass': {
        type: Boolean,
        default: false
      },
      'printLevelImgs': {
        type: Array,
        default: function(){return[]}
      },
      'printLevelText': {
        type: Array,
        default: function(){return[]}
      },
      'menu': {
        type: Array,
        default: function(){return[]}
      },
      'mode':{
        type: String,
        default: 'main'
      }
    },
    components: {
      List
    },
    data () {
        return{
          mobileMenuOpen : false
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main-sass-only.scss";

.menu {
  height: 100%;
  display: flex;

  .menu-hamburger {
    @include mq($until: 'md'){
      opacity: 1;
      transition: .5s ease-in-out;
    }
    transition: .5s ease-in-out;
    opacity: 0;
    z-index: $z-super-top;
    width: 2em;
    height: 4em;
    position: absolute;
    right: 1em;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;

    &__line {
      display: block;
      position: absolute;
      height: .2em;
      width: 100%;
      background: $brand-primary;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;

      &:nth-child(1) { top: 1.5em; }
      &:nth-child(2) { top: 2.05em; }
      &:nth-child(3) { top: 2.625em; }
    }
    &--open {
      .menu-hamburger__line {
        &:nth-child(1) {
          top: 1.825em;
          transform: rotate(135deg);
        }
        &:nth-child(2) {
          opacity: 0;
          left: -5em;
        }
        &:nth-child(3) {
          top: 1.825em;
          transform: rotate(-135deg);
        }
      }
    }
  }
}

.menu-row{

  width: 100%;
  text-align: center;

  &--header{
    @include mq($until: 'md'){
      height: 100vh;
      width: 100vw;
      margin: 0;
      text-align: center;
      position: fixed;
      left: 0;
      opacity: 0;
      visibility: hidden;
      z-index: $z-top;
      top: 0;
      transition: .2s ease-in-out;
      ul{
        flex-flow: column wrap;
        justify-content: space-around;
        width: 100%;
        font-size: 1.2rem;
        ul{
          font-size: 1rem;
        }
      }
      .list__item{
        align-self: center;
        .img{
          min-width: 50%;
          max-width: 50%;
        }
      }
    }

    &--open{
      opacity: 1;
      visibility: visible;
      display: flex;
      background: $white;
      transition: .2s ease-in-out;
    }
  }

  &--footer{
    justify-content: flex-start;

    @include mq($until: 'md'){
      flex-flow: column wrap;
      justify-content: flex-start;
      @include ml(3);
      @include mr(3);
    }

    .menu-row__col{
      @include mq($from: 'md'){
        @include make-col-ready();
        @include make-col(3);
        align-self: flex-start;
      }

      @include mq($until: 'md'){
        width: 100%;
        text-align: center;

        @include mt(4);
        &:first-child{
          @include mt(0);
        }
      }
    }

  }

  &--sidebar{

  }

};

</style>
