<template>
  <div class="section">
    <div class="client-list">
      <div class="text-container">
        <div class="text-container__col">
          <h5>
            {{smallText}}
          </h5>
          <h2>
            {{text}}
          </h2>
        </div>
      </div>
      <div class="list-container">
        <div class="list-container__col" v-for="client in clients">
           <img v-bind:src="client.imgUrl" v-bind:alt="client.name">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LogoListComponent',
    data () {
        return{
            text: 'Welance is a bag bicycle rights, High Life sartorial cray craft beer',
						smallText: 'Our Clients',
            clients: [
                {
                  name: "Client Name",
                  imgUrl: "https://placehold.it/200x200"
                },
                {
                  name: "Client Name",
                  imgUrl: "https://placehold.it/200x200"
                },
                {
                  name: "Client Name",
                  imgUrl: "https://placehold.it/200x200"
                },
                {
                  name: "Client Name",
                  imgUrl: "https://placehold.it/200x200"
                },
                {
                  name: "Client Name",
                  imgUrl: "https://placehold.it/200x200"
                },
                {
                  name: "Client Name",
                  imgUrl: "https://placehold.it/200x200"
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
    @include mq($until: 'md'){
      padding: 0 3em;
      overflow: hidden;
    }

}

.client-list {
  @include make-container-max-widths();
  margin: 0 auto;
  padding: 20vh 0;
}
.text-container{
  @include make-row();

  flex-direction: row;
  overflow: hidden;
  padding: 0 0 5vh 0;

  &__col{
    @include make-col-ready();
    @include make-col(10);
  }
}
.list-container{

  @include make-row();
  flex-direction: row;

  &__col{
    @include make-col-ready();
    @include make-col(3);
    margin-bottom: 30px;
      @include mq($until: 'md'){
          @include make-col(6);
      }
      @include mq($until: 'sm'){
          @include make-col(12);
      }


  }
  img{
    width:100%;
  }
};


</style>
