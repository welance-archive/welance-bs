<template>
  <div class="menu" :class="'menu-' + name">
    <nav class="menu-wrap" :class="'menu-wrap--' + mode">
      <ul class="menu-wrap__col" v-for="(list, indexL) in lists">

        <template v-if="list.url">
          <li class="menu-wrap__menu-title" :class="'menu-wrap__menu-title-' + indexL">
            <div  v-if="showImages"
                  class="img menu-wrap__menu-header-img"
                  :class="[list.image.ratio ? 'img--ratio-' + list.image.ratio : '']"
                  :style="{ backgroundImage: 'url(' + list.image.src + ')' }"
            ></div>
            <router-link v-if="list.url" :to="list.url">
              {{list.title}}
            </router-link>
          </li>
        </template>
        <template v-else-if="list.extUrl">
          <li class="menu-wrap__menu-title" :class="'menu-wrap__menu-title-' + indexL">
            <div  v-if="showImages"
                  class="img menu-wrap__menu-header-img"
                  :class="[list.image.ratio ? 'img--ratio-' + list.image.ratio : '']"
                  :style="{ backgroundImage: 'url(' + list.image.src + ')' }"
            ></div>
            <a v-if="list.extUrl" :href="list.extUrl" :target="list.extUrlTarget ? list.extUrlTarget : '_blank'">{{list.title}}</a>
          </li>
        </template>
        <template v-else>
          <li class="menu-wrap__menu-title" :class="'menu-wrap__menu-title-' + indexL">
            <div  v-if="showImages"
                  class="img menu-wrap__menu-header-img"
                  :class="[list.image.ratio ? 'img--ratio-' + list.image.ratio : '']"
                  :style="{ backgroundImage: 'url(' + list.image.src + ')' }"
            ></div>
            {{list.title}}
          </li>
        </template>

        <ul v-if="levels!==1" class="menu-wrap__list" :class="'menu-wrap__menu-item-' + indexL">

          <li class="menu-wrap__menu-item" :class="'menu-wrap__menu-item-' + index" v-for="(item,index) in list.items">

            <div  v-if="showImages"
                  class="img menu-wrap__menu-header-img"
                  :class="[list.image.ratio ? 'img--ratio-' + list.image.ratio : '']"
                  :style="{ backgroundImage: 'url(' + list.image.src + ')' }"
            ></div>

            <template v-if="item.url">
              <router-link v-if="item.url" :to="item.url">{{item.title}}</router-link>
            </template>
            <template v-else-if="item.extUrl">
              <a :href="item.extUrl" :target="item.extUrlTarget ? item.extUrlTarget : '_blank'">{{item.title}}</a>
            </template>
            <template v-else>
              {{item.title}}
            </template>

          </li>

        </ul>

      </ul>
    </nav>
  </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    name: 'MenuComponent',
    props: [
      'lists',
      'name',
      'levels',
      'showImages',
      'mode'
    ],
    components: {
      Quote
    },
    data () {
        return{}
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main.scss";

.menu {
  //@include make-container-max-widths();
  //margin: 0 auto;
  height: 100%;
  display: flex;
}

.menu-wrap{
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  overflow: hidden;
  justify-content: space-between;

  &__col{
    align-self: center;

    @include mq($until: 'md'){
      width: 100%;
      text-align: center;
    }
    //background: blue;
  }
  &__list{
  }

  &__menu-header-img{
    //border: 1px solid blue;
  }

  &__menu-title{
    //display: none;
  }
  &__menu-item{
    //border: 1px solid red;
  }

  &--header{

  }

  &--footer{
    @include mq($until: 'md'){
      flex-flow: column wrap;
      justify-content: flex-start;
      @include ml(3);
      @include mr(3);
    }

    .menu-wrap__col{
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
