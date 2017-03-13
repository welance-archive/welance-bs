<template>
  <div class="menu" :class="'menu-' + name">
    <div class="text-wrap">
      <div class="text-wrap__col">
        <quote  v-if="bigText || smallTextPre || smallTextSub"
                :name="name"
                :small-text-pre="smallTextPre"
                :big-text="bigText"
                :small-text-sub="smallTextSub"
        ></quote>
      </div>
    </div>
    <div class="menu-wrap">
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
    </div>
  </div>
</template>

<script>
import Quote from 'components/common/Quote.vue';

export default {
    name: 'MenuComponent',
    props: [
      'smallTextPre',
      'bigText',
      'smallTextSub',
      'lists',
      'name',
      'levels',
      'showImages'
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
@import "~styles/main.scss";

.menu {
  @include make-container-max-widths();
  margin: 0 auto;
}
.text-wrap{
  @include make-row();
  flex-direction: row;
  overflow: hidden;

  &__col{
    @include make-col-ready();
    @include make-col(10);
    @include mq($until: 'lg'){
      @include make-col(12);
    }
  }
}
.menu-wrap{
  @include make-row();
  flex-direction: row;

  &__list{
  }

  &__menu-header-img{
    //border: 1px solid blue;
  }

  &__menu-title{
    //display: none;
    font-size: 1.5em;
  }
  &__menu-item{
    //border: 1px solid red;
  }

  &__col{
    @include make-col-ready();
    @include make-col(3);
    @include mb(4);

    @include mq($until: 'lg'){
        @include make-col(4);
    }

    @include mq($until: 'md'){
        @include make-col(6);
    }
    @include mq($until: 'sm'){
      @include pl(6);
      @include pr(6);
      @include make-col(12);
      text-align: center;
    }
  }
};

</style>
