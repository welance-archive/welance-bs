<template>
<div>
  <div class="wrap wrap--contained">
    <div class="row">
      <div class="col col--3-12@lg col--12-12@xs">
        <!--:open-all="true"-->
        <tree
          :name="'menuzio'"
          :debug="false"
          :columnClass="'col--12-12@xs'"
          :mode="'tree'"
          :open-all="true"
          :print-levels="5"
          :print-level-imgs="[0,0,0,0,0]"
          :print-level-text="[1,1,1,1,1]"
          :tree="componentsMenu">
        </tree>
      </div>
      <div class="col col--9-12@lg col--12-12@xs">
        <!-- ––––––––––––––––––––––––––––––––––––––- GALLERY -->
        <section class="gallery-section">

          <quote
            :name="'gallery'"
            :contained="false"
            :small-text-pre="''"
            :big-text="'Gallery'"
            :small-text-sub="'The gallery component has different <em>gallery-types</em>'">
          </quote>

          <div class="col-12">
            <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/hcpyxdqx/embedded/html,js"></iframe>
          </div>

          <quote
            :name="'gallery-off'"
            :contained="false"
            :small-text-pre="''"
            :big-text="'...'"
            :small-text-sub="'<strong>off-canvas</strong> (great for filling full width of a page without worries on overflowing them)'">
          </quote>

          <gallery
            :name="'off'"
            :contained="false"
            :images="officeImages"
            :gallery-type="'off-canvas'"
          ></gallery>

          <quote
            :name="'gallery-squares'"
            :contained="false"
            :small-text-pre="''"
            :big-text="'...'"
            :small-text-sub="'<strong>squares</strong> (great for logos, users, and generally squared layouts)'">
          </quote>

          <gallery
            :name="'squares'"
            :contained="false"
            :images="officeImages"
            :gallery-type="'squares'"
          ></gallery>

          <quote
            :name="'gallery-blocky'"
            :contained="false"
            :small-text-pre="''"
            :big-text="'...'"
            :small-text-sub="'<strong>blocky</strong> (great for filling spaces completely)'">
          </quote>

          <gallery
            :name="'blocky'"
            :contained="false"
            :images="officeImages"
            :gallery-type="'blocky'"
          ></gallery>

        </section>
        <!-- ––––––––––––––––––––––––––––––––––––––- END GALLERY -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Quote from '../../../common/Quote.vue';
import Tree from '../../../common/Tree.vue';
import Gallery from '../../../common/Gallery.vue';
import axios from 'axios';

export default {
  name: 'GalleryPage',
  watch: {
    '$route' (to, from) {
      console.log('route changed');
    }
  },
  components: {
    Quote,
    Tree,
    Gallery
  },
  data(){
    return{
      componentsMenu: [],
      officeImages: [
        {
          src: 'https://fillmurray.com/400/400',
          srcRetina: 'https://fillmurray.com/800/800',
          ratio: '9-16', //see welanstrap/_images.scsss for possible ratio values
          title: 'Title',
          subtitle: 'subtitle',
          alt: 'Alternate Text',
          link: '',
          target: '_blank'
        },
        {
          src: 'https://fillmurray.com/400/402',
          srcRetina: 'https://fillmurray.com/800/800',
          ratio: '16-9', //see welanstrap/_images.scsss for possible ratio values
          title: 'Title',
          subtitle: 'subtitle',
          alt: 'Alternate Text',
          link: '',
          target: '_blank'
        },
        {
          src: 'https://fillmurray.com/403/400',
          srcRetina: 'https://fillmurray.com/800/800',
          ratio: '9-16', //see welanstrap/_images.scsss for possible ratio values
          title: 'Title',
          subtitle: 'subtitle',
          alt: 'Alternate Text',
          link: '',
          target: '_blank'
        },
        {
          src: 'https://fillmurray.com/401/401',
          srcRetina: 'https://fillmurray.com/801/801',
          ratio: '12-16', //see welanstrap/_images.scsss for possible ratio values
          title: 'Title',
          subtitle: 'subtitle',
          alt: 'Alternate Text',
          link: '',
          target: '_blank'
        },
        {
          src: 'https://fillmurray.com/402/402',
          srcRetina: 'https://fillmurray.com/802/802',
          ratio: '9-16', //see welanstrap/_images.scsss for possible ratio values
          title: 'Title',
          subtitle: 'subtitle',
          alt: 'Alternate Text',
          link: '',
          target: '_blank'
        },
        {
          src: 'https://fillmurray.com/403/403',
          srcRetina: 'https://fillmurray.com/803/803',
          ratio: '12-16', //see welanstrap/_images.scsss for possible ratio values
          title: 'Title',
          subtitle: 'subtitle',
          alt: 'Alternate Text',
          link: 'http://example.com',
          target: '_blank'
        },
        {
          src: 'https://fillmurray.com/404/404',
          srcRetina: 'https://fillmurray.com/804/804',
          ratio: '9-16', //see welanstrap/_images.scsss for possible ratio values
          title: 'Title',
          subtitle: 'subtitle',
          alt: 'Alternate Text',
          link: '',
          target: '_blank'
        }
      ]
    }
  },
  created () {
    axios.get(API_URL + `assets/data/components-menu.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.componentsMenu = response.data;
    })
    .catch(e => {
      console.log(e);
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main-sass-only.scss";

.gallery-section{
  overflow: hidden;
}
</style>
