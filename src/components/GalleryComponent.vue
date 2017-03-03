<template>
  <div class="section">
      <div class="gallery">
        <div class="gallery__container gallery__container--off-canvas">
            <div class="gallery__col gallery__col--odd-position">
                <img class="img img-square" src="https://placehold.it/400x300"/>
            </div>
            <div class="gallery__col gallery__col--odd-position">
                <img class="img img-square" src="https://placehold.it/300x400"/>
            </div>
            <div class="gallery__col gallery__col--odd-position">
                <img class="img img-square" src="https://placehold.it/400x300"/>
            </div>
            <div class="gallery__col gallery__col--odd-position">
                <img class="img img-square" src="https://placehold.it/300x400"/>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'GalleryComponent',
    data () {
        return{
            text: 'Image Row',
			smallText: 'About Us'
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{
  //background: red;
  overflow: hidden;
}

.gallery {
//  @include make-container();
  //margin: 0 auto;

  padding: 20vh 0px;
  position: relative;

  &__container{
    @include make-row();
    flex-direction: row;
    padding: 0px;
    margin: 0 auto;
    align-items: flex-end;
    
    &--off-canvas{
        overflow: hidden;
        position: relative;
        width: 120%;
        left: -10%;
        right: -10%;    
    }
 }

  &__col{
    @include make-col-ready();
    @include make-col(3);
		
    @include media-breakpoint-down('sm'){
    	@include make-col(12);
		}
		&--odd-position{
			&:nth-child(1){
				align-self: flex-start;
				border: 1px solid red;
			}
		}
	}

  img{
    width: 100%;
  }

};

</style>
