<template>
  <div class="menu" :class="[{'wrap wrap--contained' : contained}, 'menu-' + name, 'menu-' + mode]">

    <div v-if="mode === 'header'" class="menu-hamburger" @click="toggleMenu()" :class="mobileMenuOpen ? 'menu-hamburger--open' : ''">
      <span class="menu-hamburger__line"></span>
      <span class="menu-hamburger__line"></span>
      <span class="menu-hamburger__line"></span>
    </div>

    <nav class="row menu-row" :class="['menu-row--' + mode, mobileMenuOpen ? 'menu-row--open' : '']">
        <!--
          the following component gets displayed for mode of any type, but the header mode
          ...on any vieport size
         -->
        <tree
          v-if="!showMobileMenu() || mode !== 'header'"
          :name="name + '-' + mode"
          :debug="false"
          :columnClass="columnClass"
          :print-levels="printLevels"
          :print-level-imgs="printLevelImgs"
          :print-level-text="printLevelText"
          :tree="menu">
        </tree>
        <!--
          the following component gets displayed only when mode is header,
          ...for a viewport size <= 768
         -->
        <tree
          v-if="showMobileMenu() && mode === 'header'"
          :name="name + '-' + mode + '-mobile'"
          :debug="false"
          :columnClass="columnClass"
          :mode="'accordion'"
          :print-levels="mobilePrintLevels >= 1 ? mobilePrintLevels : printLevels"
          :print-level-imgs="mobilePrintLevelImgs.length ? mobilePrintLevelImgs : printLevelImgs"
          :print-level-text="mobilePrintLevelText.length ? mobilePrintLevelText : printLevelText"
          :tree="menu">
        </tree>
    </nav>

  </div>
</template>

<script>
import Tree from './Tree.vue';
import Breakpoints from '../../mixins/breakpoints.js';

export default {
    mixins: [ Breakpoints ],
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
      'columnClass': {
        type: String,
        default: ''
      },
      'ignoreClass': {
        type: Boolean,
        default: false
      },
      'printLevels': {
        type: Number,
        default: 0
      },
      'printLevelImgs': {
        type: Array,
        default: function(){return[]}
      },
      'printLevelText': {
        type: Array,
        default: function(){return[]}
      },
      'mobilePrintLevels': {
        type: Number,
        default: 0
      },
      'mobilePrintLevelImgs': {
        type: Array,
        default: function(){return[]}
      },
      'mobilePrintLevelText': {
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
      Tree
    },
    methods: {
      showMobileMenu: function(){
        if(this.vW <= this.breakpoints.md){
          return true;
        }else{
          this.mobileMenuOpen = false;
          this.$emit('menuClose');
          return false;
        }
      },
      toggleMenu: function(event){
				if (event) event.preventDefault();
        this.mobileMenuOpen = this.mobileMenuOpen ? false : true;

				if(this.mobileMenuOpen){
          this.$emit('menuOpen');
        }else{
          this.$emit('menuClose');
          this.getWindowWidth();
        }
			},
      isMd: function(){
        //console.log(this.$currentViewport.label === 'md' || this.$currentViewport.label === 'lg');
        return this.$currentViewport.label === 'md' || this.$currentViewport.label === 'lg';
      }
    },
    data () {
      return{
        mobileMenuOpen : false,
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

  text-align: left;

  &--header{

    @include mq($until: 'md'){
      height: 100vh;
      width: 100vw;
      margin: 0;
      left:0;
      top: 0;
      @include mt(9);
      text-align: center;
      position: fixed;
      opacity: 0;
      visibility: hidden;
      display: none;
      z-index: $z-top;
      transition: .2s ease-in-out;
      ul{
        flex-flow: row wrap;
        justify-content: space-around;
        width: 100%;
        font-size: 1.2rem;
        ul{
          font-size: 1rem;
        }
      }
    }
    .tree{
      .tree__item{
        align-self: center;
      }
    }
  }

  &--open{

    @include mq($until: 'md'){
      opacity: 1;
      visibility: visible;
      display: flex;
      background: $gray-lightest;
      transition: .2s ease-in-out;
      overflow: scroll;
      @include pt(4);
      @include pb(4);
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

    ul{
      font-size: 1.2rem;
      @include mb(2);
      ul{
        font-size: 1rem;
      }
    }
    .tree{
      .tree__item{
        align-self: flex-start;
        .img{
          min-width: 50%;
          max-width: 50%;
        }
      }
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
};

</style>
