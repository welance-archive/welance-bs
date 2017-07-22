<template>
<div>
  <modal
    :name="'project'"
    :modal-size="'half'"
    v-if="showModal"
    @modalClose="closeModal()">
    <div slot="body">
      Nam et eros ac nibh euismod venenatis. Sed turpis nisl, aliquam nec lacus id, interdum facilisis turpis. Etiam maximus ullamcorper ipsum, quis dictum nunc vulputate id. Nunc vel varius elit, vel tristique tortor. Integer sit amet purus id neque venenatis posuere vitae a turpis. Morbi vitae venenatis mi, a sodales libero. Nunc eget accumsan augue.

      Suspendisse sodales congue nisl, id consectetur tortor porttitor et. Aliquam interdum ut odio id pulvinar. Aenean et faucibus ante, eu pharetra nisi. Vivamus rutrum vitae sapien sit amet egestas. Phasellus quis quam eros. Pellentesque diam urna, condimentum eu maximus et, gravida non velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam interdum sem maximus sem malesuada consequat. Aenean at libero ullamcorper, lacinia nulla id, eleifend est.

      Maecenas lacinia condimentum lorem, at faucibus arcu mattis vel. Fusce varius, quam ut vulputate gravida, nibh dolor pellentesque massa, sit amet tempus tellus odio sit amet nunc. Ut efficitur commodo suscipit. Vivamus auctor quam a rhoncus vulputate. Vestibulum lobortis ac odio sit amet porta. Ut eu tincidunt justo, eu cursus eros. Mauris sem lorem, auctor a auctor vel, vehicula vel ex. Vivamus rhoncus, orci eget efficitur laoreet, tortor est iaculis nisl, sed rutrum arcu neque feugiat ex.

      Curabitur vitae elit varius, condimentum mauris vitae, imperdiet velit. Duis sed risus sed nisl semper ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec urna orci, condimentum eu nisl vel, interdum laoreet elit. In ornare magna orci, nec fermentum ex pellentesque sit amet. Curabitur luctus, sapien ac mollis efficitur, eros nisl posuere erat, eget egestas orci nisi accumsan felis. Nunc tincidunt ullamcorper ex, id tincidunt orci accumsan vitae. Aliquam varius ipsum gravida mauris viverra maximus. Cras eu suscipit nibh. Curabitur sed justo a est placerat rutrum ac tempor mauris.

      Mauris commodo malesuada turpis vitae blandit. Nunc quis purus vitae erat semper vehicula ac in quam. Morbi eget quam dignissim, fringilla dui quis, placerat est. Pellentesque pulvinar aliquet diam. Duis nec pharetra nunc. Nulla vitae nibh ultricies ipsum porttitor euismod nec feugiat tellus. Praesent ex turpis, bibendum in ornare id, tincidunt at ipsum. Phasellus ut ultrices dolor, suscipit viverra augue. In interdum, eros non sollicitudin porta, nisl felis elementum libero, et semper velit nisi egestas est. Nam mollis diam quis urna suscipit tristique.
    </div>
  </modal>
  <div class="wrap wrap--contained">
    <div class="row">
      <div class="col col--3-12@lg col--12-12@xs hide@md hide@sm hide@xs show-flex@lg">
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
        <!-- ––––––––––––––––––––––––––––––––––––––- HERO -->
        <section class="hero-section">
          <quote
            :name="'hero'"
            :debug="false"
            :contained="false"
            :small-text-pre="''"
            :big-text="'Hero component'"
            :small-text-sub="'This is how you create an hero component'">
          </quote>

          <div class="col-12">
            <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/5vqrchv4/6/embedded/html/"></iframe>
          </div>

          <hero
            :name="'main'"
            :debug="false"
            :contained="false"
            :pre-title="''"
            :title="'We are the coolest kids in town, really kewl. 🖖'"
            :sub-title="'I am seriously guys'"
            :visual-element="visualElement"
            :col-one-class="'col--7-12@md col--12-12@xs'"
            :col-two-class="'col--5-12@md col--12-12@xs show@sm hide@xs'"
            :reverse-cols="false"
            :ctas="ctasExample"
          ></hero>
        </section>
        <!-- ––––––––––––––––––––––––––––––––––––––- END HERO -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Quote from '../../../common/Quote.vue';
import Tree from '../../../common/Tree.vue';
import Hero from '../../../common/Hero.vue';
import Modal from '../../../common/Modal.vue';
import axios from 'axios';

export default {
  name: 'HeroPage',
  components: {
    Quote,
    Tree,
    Hero,
    Modal
  },
  methods: {
    openModal: function(){
      this.showModal = true;
      this.$emit('modalOpened');
    },
    closeModal: function(){
      this.showModal = false;
      this.$emit('modalClosed');
    }
  },
  data(){
    return{
      showModal: false,
      componentsMenu: [],
      ctasExample:
        [
          {title: 'go to external link', action: 'http://example.com', class: 'btn col--4-12@sm col--12-12@xs btn--primary'},
          {title: 'go to internal link', action: 'add-route-here', class: 'btn col--4-12@sm col--12-12@xs btn--primary'},
          {title: 'execute function', action: this.openModal, class: 'btn col--4-12@sm col--12-12@xs btn--primary'}
        ],
      visualElement: { type: 'image', class: 'img img--ratio-1-1', url: 'https://fillmurray.com/1400/1400' }
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
@import "~styles/main-sass-only.scss";

</style>
