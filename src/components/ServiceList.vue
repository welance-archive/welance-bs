<template>
  <div class="section">
    <div class="service-list">
      <div class="text-container">
        <div class="text-container__col">
          <h5 class="text-container__subheading">
            {{smallText}}
          </h5>
          <h2>
            {{text}}
          </h2>
        </div>
      </div>
      <div class="list-container">
        <div class="list-container__col" v-for="service in services">
          <h5 class="list-container__service-title">{{service.title}}</h5>
          <ul>
            <li v-for="item in service.items"><a v-bind:href="item.url">{{item.title}}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ServiceList',
    data () {
        return{
            text: 'We make digital products and help organisations big and small connect with their audience.',
						smallText: 'Our Capabilites',
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

.section{
  background: $ultra-light-grey;
  @include mq($until: 'sm'){
    padding: 0 3em;
  }
}

.service-list {
  @include make-container-max-widths();
  margin: 0 auto;
  padding: 20vh 0;
}
.text-container{
  @include make-row();
  flex-direction: row;
  overflow: hidden;
  padding: 0 0 10vh 0;

  &__col{
    @include make-col-ready();
    @include make-col(10);
      @include mq($until: 'lg'){
        @include make-col(12);
      }
  }
  &__subheading{
    @include mb(3);
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
  &__service-title{
    @include mb(2);
  }

  & ul{
    margin: 0;
    padding: 0;
  }

  & li{
    list-style: none;
    padding: 0;
    margin-bottom:0.5em;
  }
};


</style>
