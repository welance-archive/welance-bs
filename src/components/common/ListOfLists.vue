<template>
  <div class="list-of-lists" :class="'list-of-lists-' + name">
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
    <div class="list-wrap">
      <div class="list-wrap__col" v-for="(list, indexL) in lists">

        <template v-if="list.url">
          <div  class="img list-wrap__list-header-img"
                :class="[list.image.ratio ? 'img--ratio-' + list.image.ratio : '']"
                :style="{ backgroundImage: 'url(' + list.image.src + ')' }"
          ></div>
          <h5 class="list-wrap__list-title" :class="'list-wrap__list-title-' + indexL">
            <router-link v-if="list.url" :to="list.url">{{list.title}}</router-link>
          </h5>
        </template>
        <template v-else-if="list.extUrl">
          <div  class="img list-wrap__list-header-img"
                  :class="[list.image.ratio ? 'img--ratio-' + list.image.ratio : '']"
                  :style="{ backgroundImage: 'url(' + list.image.src + ')' }"
          ></div>
          <h5 class="list-wrap__list-title" :class="'list-wrap__list-title-' + indexL">
            <a v-if="list.extUrl" :href="list.extUrl" :target="list.extUrlTarget ? list.extUrlTarget : '_blank'">{{list.title}}</a>
          </h5>
        </template>
        <template v-else>
          <div  class="img list-wrap__list-header-img"
                  :class="[list.image.ratio ? 'img--ratio-' + list.image.ratio : '']"
                  :style="{ backgroundImage: 'url(' + list.image.src + ')' }"
          ></div>
          <h5 class="list-wrap__list-title" :class="'list-wrap__list-title-' + indexL">{{list.title}}</h5>
        </template>

        <ul v-if="levels!==1" class="list-wrap__list" :class="'list-wrap__list-item-' + indexL">

          <li class="list-wrap__list-item" :class="'list-wrap__list-item-' + index" v-for="(item,index) in list.items">

              <div  class="img"
                    :class="[item.image.ratio ? 'img--ratio-' + item.image.ratio : '']"
                    :style="{ backgroundImage: 'url(' + item.image.src + ')' }"
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

      </div>
    </div>
  </div>
</template>

<script>
import Quote from 'components/common/Quote.vue';

export default {
    name: 'ListOfLists',
    props: [
      'smallTextPre',
      'bigText',
      'smallTextSub',
      'lists',
      'name',
      'levels'
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

.list-of-lists {
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
.list-wrap{
  @include make-row();
  flex-direction: row;

  &__list{
  }

  &__list-header-img{
    //border: 1px solid blue;
  }

  &__list-title{
    //display: none;
  }
  &__list-item{
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
      @include pl(4);
      @include pr(4);
      @include make-col(12);
      text-align: center;
    }
  }
};

</style>
