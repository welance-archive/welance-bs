<template>
  <div class="section">
    <div class="client-list">
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
  //background: red;
}

.client-list {
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
    @include make-col(3);
  }
  img{
    width:100%;
  }
};


</style>
