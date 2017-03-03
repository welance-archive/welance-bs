<template>
  <div class="section">
    <div class="service-list">
      <div class="text-container">
        <div class="text-container__col">
          <h4 class="title title--s">
            {{smallText}}
          </h4>
          <h1 class="title title--l">
            {{text}}
          </h1>
        </div>
      </div>
      <div class="list-container">
        <div class="list-container__col" v-for="service in services">
          <h4 class="title title--s">{{service.title}}</h4>
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
    name: 'ServiceListComponent',
    data () {
        return{
            text: 'Welance is a bag bicycle rights, High Life sartorial cray craft beer',
						smallText: 'Our Capabilites',
            services: [
                {
                  title: "List Headline",
                  items: [
                    {title: "List Element", url: "http://example.com"},
                    {title: "List Element2", url: "http://example.com"},
                    {title: "List Element3", url: "http://example.com"},
                    {title: "List Element4", url: "http://example.com"}
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
}

.service-list {
  @include make-container-max-widths();
  margin: 0 auto;
  padding: 20vh 0;
}
.text-container{
  @include make-row();
  background:red;
  flex-direction: row;
  overflow: hidden;
  
  &__col{
    @include make-col-ready();
    @include make-col(12);
  }
}
.list-container{
  background:green;
  @include make-row();
  flex-direction: row;

  &__col{
    border: 1px solid blue;
    @include make-col-ready();
    @include make-col(4);
  }
};


</style>
