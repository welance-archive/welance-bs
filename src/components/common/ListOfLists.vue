<template>
  <div class="list-of-lists" :class="'list-of-lists-' + name">
    <div class="text-wrap">
      <div class="text-wrap__col">
        <quote  :small-text-pre="smallTextPre"
                :big-text="bigText"
                :small-text-sub="smallTextSub"
        ></quote>
      </div>
    </div>
    <div class="list-wrap">
      <div class="list-wrap__col" v-for="(list, indexL) in lists">
        <h5 class="list-wrap__list-title" :class="'list-wrap__list-title-' + indexL">{{list.title}}</h5>
        <ul class="list-wrap__list" :class="'list-wrap__list-item-' + indexL">
          <li class="list-wrap__list-item" :class="'list-wrap__list-item-' + index" v-for="(item,index) in list.items">
            <a :href="item.url">{{item.title}}</a>
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
      'name'
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

  &__col{
    @include make-col-ready();
    @include make-col(4);
    @include mq($until: 'md'){
        @include make-col(6);
    }
    @include mq($until: 'sm'){
      @include pl(6);
      @include pr(6);
      @include make-col(12);
      text-align: center;
    }
    @include mb(4);
  }
};

</style>
