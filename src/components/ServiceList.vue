<template>
  <section class="section">
    <div class="service-list">
      <div class="text-container">
        <div class="text-container__col">
          <quote  :small-text-pre="smallTextPre"
                  :big-text="bigText"
                  :small-text-sub="smallTextSub"
          ></quote>
        </div>
      </div>
      <div class="list-container">
        <div class="list-container__col" v-for="service in services">
          <h5 class="list-container__list-title">{{service.title}}</h5>
          <ul class="list-container__list">
            <li class="list-container__list-item" v-for="item in service.items"><a v-bind:href="item.url">{{item.title}}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Quote from 'components/common/Quote.vue';

export default {
    name: 'ServiceList',
    components: {
      Quote
    },
    data () {
        return{
            smallTextPre: 'Services',
            bigText: 'These is what we do best and what we can help you with Professionally.',
						smallTextSub: '',
            services: [
                {
                  title: "Journey Maps",
                  items: [
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element2", url: "http://example.com"},
                    {title: "List Element3", url: "http://example.com"},
                    {title: "List Element4", url: "http://example.com"}
                  ]
                },
                {
                  title: "User Research",
                  items: [
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"}
                  ]
                },
                {
                  title: "eCommerce",
                  items: [
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"}
                  ]
                },
                {
                  title: "List Headline",
                  items: [
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"}
                  ]
                },
                {
                  title: "List Headline",
                  items: [
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"}
                  ]
                },
                {
                  title: "List Headline",
                  items: [
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element", url: "http://example.com"}
                  ]
                }
            ]
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{}

.service-list {
  @include make-container-max-widths();
  margin: 0 auto;
}
.text-container{
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
.list-container{
  @include make-row();
  flex-direction: row;

  &__col{
    @include make-col-ready();
    @include make-col(4);
    @include mq($until: 'md'){
        @include make-col(6);
    }
    @include mq($until: 'sm'){
        @include make-col(12);
    }
    @include mq($from: 'xl'){
        @include make-col(3);
    }
    margin-bottom: 3em;
  }
  &__list-title{
    @include mb(2);
  }

  &__list{
    margin: 0;
    padding: 0;
  }

  &__list-item{
    list-style: none;
    padding: 0;
    margin-bottom:0.5em;
  }
};


</style>
