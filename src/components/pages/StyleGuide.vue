<template>
<div>
  <div class="wrap wrap--contained styles">
    <a id="forkMe" href="https://github.com/welance/welance-bs">Fork - GitHub</a>

    <quote
      :name="'main'"
      :type="'main'"
      :small-text-pre="''"
      :big-text="'Welance Bootstrap & Style Guide'"
      :small-text-sub="'Default styles and VueJS components of the Welance Bootstrapm –visualised.'">
    </quote>

    <section class="grid-section">

      <quote
        :name="'grid'"
        :small-text-pre="''"
        :big-text="'Grid System'"
        :small-text-sub="'Helper Classes'">
      </quote>

      <div class="row">
        <p class="col col--12-12">
          You can generate as many grids as your project requires by simple changing the SASS variable <strong>$grids</strong><br/>
          Eg.:
          <pre> $grids: (1, 5, 7, 8, 12);</pre>
          Will generate 5 grids helper classes for 1, 5, 7, 8 and 12 columns grid andding helpers that you can use like:
          <pre> class="col col--1-12@xl col--6-12@lg col--4-12@md col--12-12@xs"</pre>
          applied to 12 elements would generate this (resize window to see changes):
        </p>
      </div>
      <div class="row row-example">
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
        <div class="col col-example col--1-12@xl col--6-12@lg col--3-12@md col--12-12@xs">col</div>
      </div>
      <div class="row">
        <p class="col col--12-12">
          And obsviously you can mix them up!
          <pre> class="col col--4-12@xl col--1-8@lg col--1-5@xs"</pre>
          applied to 5 elements would generate this (resize window to see changes):
        </p>
      </div>
      <div class="row row-example">
        <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
        <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
        <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
        <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
        <div class="col-example col col--4-12@xl col--1-8@lg col--1-5@xs">col</div>
      </div>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END GRID -->

    <!-- ––––––––––––––––––––––––––––––––––––––- COLORS -->
    <section class="colors-section">

        <quote
          :name="'colors'"
          :small-text-pre="''"
          :big-text="'Colors'"
          :small-text-sub="'SASS Color variables'">
        </quote>

        <div class="row">
          <div class="col col--2-12@lg col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--primary"></div>
              <h6><strong>$brand-primary</strong></h6>
            </div>
          </div>
          <div class="col col--2-12@lg col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--success"></div>
              <h6><strong>$brand-success</strong></h6>
            </div>
          </div>
          <div class="col col--2-12@lg col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--info"></div>
              <h6><strong>$brand-info</strong></h6>
            </div>
          </div>
          <div class="col col--2-12@lg col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--warning"></div>
              <h6><strong>$brand-warning</strong></h6>
            </div>
          </div>
          <div class="col col--2-12@lg col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--danger"></div>
              <h6><strong>$brand-danger</strong></h6>
            </div>
          </div>
          <div class="col col--2-12@lg col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--inverse"></div>
              <h6><strong>$brand-inverse</strong></h6>
            </div>
          </div>
        </div>

        <quote
          :name="'colors-2'"
          :small-text-pre="''"
          :big-text="'...'"
          :small-text-sub="'Gray Scale'">
        </quote>


        <div class="row">
          <div class="col col--1-7@lg col--4-12@md col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--black"></div>
              <h6><strong>$black</strong></h6>
            </div>
          </div>
          <div class="col col--1-7@lg col--4-12@md col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--gray-dark"></div>
              <h6><strong>$gray-dark</strong></h6>
            </div>
          </div>
          <div class="col col--1-7@lg col--4-12@md col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--gray"></div>
              <h6><strong>$gray</strong></h6>
            </div>
          </div>
          <div class="col col--1-7@lg col--4-12@md col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--gray-light"></div>
              <h6><strong>$gray-light</strong></h6>
            </div>
          </div>
          <div class="col col--1-7@lg col--4-12@md col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--gray-lighter"></div>
              <h6><strong>$gray-lighter</strong></h6>
            </div>
          </div>
          <div class="col col--1-7@lg col--4-12@md col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--gray-lightest"></div>
              <h6><strong>$gray-lightest</strong></h6>
            </div>
          </div>
          <div class="col col--1-7@lg col--4-12@md col--4-12@sm col--6-12@xs">
            <div class="color-item">
              <div class="color color--white"></div>
              <h6><strong>$white</strong></h6>
            </div>
          </div>
        </div>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END COLORS -->

    <!-- ––––––––––––––––––––––––––––––––––––––- TYPOGRAPHY -->
    <section class="typography-section">

        <quote
          :name="'typography'"
          :small-text-pre="''"
          :big-text="'Typography'"
          :small-text-sub="'A quick presentation of the headings and text styles available'">
        </quote>

        <div class="row">
          <h1 class="lines col col--12-12" v-html="'–H1 ' + msg + ' –H1'"></h1>
          <h2 class="lines col col--12-12" v-html="'–H2 ' + msg + ' –H2'"></h2>
          <h3 class="lines col col--12-12" v-html="'–H3 ' + msg + ' –H3'"></h3>
          <h4 class="lines col col--12-12" v-html="'–H4 ' + msg + ' –H4'"></h4>
          <h5 class="lines col col--12-12" v-html="'–H5 ' + msg + ' –H5'"></h5>
          <h6 class="lines col col--12-12" v-html="'–H6 ' + msg + ' –H6'"></h6>
        </div>
        <br><br>
        <div class="row">
          <p class="lines col col--12-12" v-html="paragraph"></p>
          <p class="lines col col--12-12" v-html="paragraph"></p>

          <p class="lines col col--4-12@md col--12-12@sm" v-html="paragraph"></p>
          <p class="lines col col--4-12@md col--12-12@sm" v-html="paragraph"></p>
          <p class="lines col col--4-12@md col--12-12@sm" v-html="paragraph"></p>

          <p class="lines col col--6-12@md col--6-12@sm col--12-12@xs" v-html="paragraph"></p>
          <p class="lines col col--6-12@md col--6-12@sm col--12-12@xs" v-html="paragraph"></p>
        </div>


    </section>

    <section class="typography-section">

        <quote
          :name="'type'"
          :small-text-pre="''"
          :big-text="'Typefaces'"
          :small-text-sub="''">
        </quote>

        <h4 class="col-12">Standard TypeFace</h4>
        <p class="col-12" v-html="alphabet"></p>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END TYPOGRAPHY -->

    <!-- ––––––––––––––––––––––––––––––––––––––- BUTTONS -->
    <section class="btn-section">

        <quote
          :name="'buttons'"
          :small-text-pre="''"
          :big-text="'Buttons'"
          :small-text-sub="'Normal, Outline, No-Outline, Full, Big, Normal, Small, Tiny, Rounded'">
        </quote>

        <div class="row">
          <div class="col col--12-12">
            <button class="btn" type="button">default</button>
            <button class="btn" type="button" disabled="disabled">default</button>
            <button class="btn btn--outline" type="button">default</button>
            <button class="btn btn--outline" disabled="disabled" type="button">default</button>
            <button class="btn btn--no-outline" type="button">default</button>
            <button class="btn btn--no-outline" disabled="disabled" type="button">default</button>
            <br/><br/>
            <button class="btn btn--primary" type="button">primary</button>
            <button class="btn btn--primary" type="button" disabled="disabled">primary</button>
            <button class="btn btn--primary btn--outline" type="button">primary</button>
            <button class="btn btn--primary btn--outline" disabled="disabled" type="button">primary</button>
            <button class="btn btn--primary btn--no-outline" type="button">primary</button>
            <button class="btn btn--primary btn--no-outline" disabled="disabled" type="button">primary</button>
            <br/><br/>
            <button class="btn btn--info" type="button">info</button>
            <button class="btn btn--info" type="button" disabled="disabled">info</button>
            <button class="btn btn--info btn--outline" type="button">info</button>
            <button class="btn btn--info btn--outline" disabled="disabled" type="button">info</button>
            <button class="btn btn--info btn--no-outline" type="button">info</button>
            <button class="btn btn--info btn--no-outline" disabled="disabled" type="button">info</button>
            <br/><br/>
            <button class="btn btn--warning" type="button">warning</button>
            <button class="btn btn--warning" disabled="disabled" type="button">warning</button>
            <button class="btn btn--warning btn--outline" type="button">warning</button>
            <button class="btn btn--warning btn--outline" disabled="disabled" type="button">warning</button>
            <button class="btn btn--warning btn--no-outline" type="button">warning</button>
            <button class="btn btn--warning btn--no-outline" disabled="disabled" type="button">warning</button>
            <br/><br/>
            <button class="btn btn--danger" type="button">danger</button>
            <button class="btn btn--danger" type="button" disabled="disabled">danger</button>
            <button class="btn btn--danger btn--outline" type="button">danger</button>
            <button class="btn btn--danger btn--outline" type="button" disabled="disabled">danger</button>
            <button class="btn btn--danger btn--no-outline" type="button">danger</button>
            <button class="btn btn--danger btn--no-outline" type="button" disabled="disabled">danger</button>
            <br/><br/>
            <button class="btn btn--success" type="button">success</button>
            <button class="btn btn--success" type="button" disabled="disabled">success</button>
            <button class="btn btn--success btn--outline" type="button">success</button>
            <button class="btn btn--success btn--outline" type="button" disabled="disabled">success</button>
            <button class="btn btn--success btn--no-outline" type="button">success</button>
            <button class="btn btn--success btn--no-outline" type="button" disabled="disabled">success</button>
            <br/><br/>
            <button class="btn btn--full btn--primary btn--outline" type="button">full</button>
            <br/><br/>
            <button class="btn btn--primary btn--big" type="button">I'm a Big Button!</button>
            <br/><br/>
            <button class="btn btn--primary" type="button">I'm a Normal Button</button>
            <br/><br/>
            <button class="btn btn--primary btn--small" type="button">I'm a Small Button</button>
            <br/><br/>
            <button class="btn btn--primary btn--tiny" type="button">I'm a tiny Button</button>
            <button class="btn btn--primary btn--tiny btn--outline" type="button">I'm a tiny Button</button>
            <br/><br/>
            <button class="btn btn--warning btn--outline btn--rounded" type="button">rounded</button>
            <button class="btn btn--warning btn--outline btn--rounded" type="button">rounded<br/>with smt<br/>like... five<br/>lines<br/>in it<br/></button>
          </div>
        </div>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END BUTTONS -->

    <hr/>

    <!-- ––––––––––––––––––––––––––––––––––––––- HERO -->
    <section class="section">

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

    </section>
  </div> <!-- /.styles -->

  <section class="hero-section">

    <hero
      :name="'main'"
      :debug="false"
      :contained="true"
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

  <div class="wrap styles">

    <!-- ––––––––––––––––––––––––––––––––––––––- GALLERY -->
    <section class="quote-section">

        <quote
          :name="'gallery'"
          :contained="true"
          :small-text-pre="''"
          :big-text="'Gallery'"
          :small-text-sub="'The gallery component has different <em>gallery-types</em>'">
        </quote>

        <div class="col-12">
          <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/hcpyxdqx/embedded/html,js"></iframe>
        </div>

    </section>

  </div> <!-- /.styles -->

    <section class="gallery-section">

      <quote
        :name="'gallery-off'"
        :contained="true"
        :small-text-pre="''"
        :big-text="'...'"
        :small-text-sub="'<strong>off-canvas</strong> (great for filling full width of a page without worries on overflowing them)'">
      </quote>

      <gallery
        :name="'off'"
        :images="officeImages"
        :gallery-type="'off-canvas'"
      ></gallery>

      <quote
        :name="'gallery-squares'"
        :contained="true"
        :small-text-pre="''"
        :big-text="'...'"
        :small-text-sub="'<strong>squares</strong> (great for logos, users, and generally squared layouts)'">
      </quote>

      <gallery
        :name="'squares'"
        :images="officeImages"
        :gallery-type="'squares'"
      ></gallery>

      <quote
        :name="'gallery-blocky'"
        :contained="true"
        :small-text-pre="''"
        :big-text="'...'"
        :small-text-sub="'<strong>blocky</strong> (great for filling spaces completely)'">
      </quote>

      <gallery
        :name="'blocky'"
        :images="officeImages"
        :gallery-type="'blocky'"
      ></gallery>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END GALLERY -->

  <div class="wrap wrap--contained styles">

    <!-- ––––––––––––––––––––––––––––––––––––––- LISTS -->
    <section class="lists-section">

      <quote
        :name="'list'"
        :small-text-pre="''"
        :big-text="'Lists'"
        :small-text-sub="'A component for listing (recursively)'">
      </quote>

      <div class="col--12-12">

        <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/c6s2tntm/2/embedded/html,js"></iframe>

        <list
          :name="'example'"
          :debug="true"
          :contained="false"
          :columnClass="'col col--3-12@xl col--4-12@lg col--6-12@md col--12-12@xs'"
          :print-levels="2"
          :print-level-imgs="[1, 0, 0, 0]"
          :print-level-text="[0, 1, 1, 1]"
          :list="servicesList"
          class="row">
        </list>

      </div>


    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END LISTS -->


    <!-- ––––––––––––––––––––––––––––––––––––––- MODAL -->
    <section class="lists-section">

      <quote
        :name="'modal'"
        :small-text-pre="''"
        :big-text="'Modal'"
        :small-text-sub="'Show/Hide a Modal with 3 option for <em>sizes</em> (\'tiny\', \'half\', \'full\')'">
      </quote>

      <div class="col-12">
        <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/vhpxcdvs/embedded/html,js"></iframe>
      </div>

      <div class="col-12">
        <br/><br/>
        <button @click="openModal" class="btn" type="button">show me a HALF Modal</button>
      </div>

    </section>

    <modal
      :name="'project'"
      :modal-size="'half'"
      v-if="showModal"
      @close="closeModal()">
    </modal>
    <!-- ––––––––––––––––––––––––––––––––––––––- END MODAL -->

    <!-- ––––––––––––––––––––––––––––––––––––––- LIST -->
    <section class="lists-section">

      <quote
        :name="'header'"
        :small-text-pre="''"
        :big-text="'Header'"
        :small-text-sub="'Adds a header on top of the page'">
      </quote>

      <div class="col-12">
        <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/aash1c26/embedded/html,js"></iframe>
      </div>
      <br/><br/>

      <div class="col-12">
        <header-component
          :name="'main'"
          :contacts="contacts"
          :details="details"
          :menu="menu">
        </header-component>
      </div>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END LIST -->


    <!-- ––––––––––––––––––––––––––––––––––––––- FIXED ITEM -->
    <section class="section">

      <quote
        :name="'menu'"
        :small-text-pre="''"
        :big-text="'Menu'"
        :small-text-sub="'Similarly to the list component adds a menu, up to 2 level recursion.<br/>It can link externarl URLs or internal routes and show Images.'">
      </quote>

      <div class="col-12">
        <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/g5ym2u26/embedded/html,js"></iframe>
      </div>

      <quote
        :name="'menu-1'"
        :small-text-pre="''"
        :big-text="'...'"
        :small-text-sub="'MODE: Header (default) + 1 Level of Menu Items'">
      </quote>

      <div class="col-12">
        <menu-component slot="menu"
          :levels="1"
          :show-images="false"
          :name="'header'"
          :lists="menu"
          :mode="'header'">
        </menu-component>
      </div>

      <quote
        :name="'menu-2'"
        :small-text-pre="''"
        :big-text="'...'"
        :small-text-sub="'MODE: Header (default) + 2 Levels of Menu Items'">
      </quote>

      <div class="col-12">
        <menu-component slot="menu"
          :levels="2"
          :show-images="false"
          :name="'header'"
          :lists="menu"
          :mode="'header'">
        </menu-component>
      </div>

      <quote
        :name="'menu-2'"
        :small-text-pre="''"
        :big-text="'...'"
        :small-text-sub="'MODE: Footer + 2 Levels of Menu Items'">
      </quote>

      <div class="col-12">
        <menu-component slot="menu"
          :levels="2"
          :show-images="false"
          :name="'header'"
          :lists="menu"
          :mode="'footer'">
        </menu-component>
      </div>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END FIXED ITEM -->


    <!-- ––––––––––––––––––––––––––––––––––––––- FIXED ITEM -->
    <section class="section">

      <quote
        :name="'fixed-item'"
        :small-text-pre="''"
        :big-text="'Fixed Item'"
        :small-text-sub="'Adds a FIXED status (on top of the page) to any component (HTML or Vue)'">
      </quote>

      <div class="col-12">
        <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/wv0y0pfx/1/embedded/html"></iframe>
      </div>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END FIXED ITEM -->

  </div> <!-- /.wrap .styles -->
</div>
</template>

<script>
import HeaderComponent from '../common/HeaderComponent.vue';
import FooterComponent from '../common/FooterComponent.vue';
import MenuComponent from '../common/MenuComponent.vue';
import Hero from '../common/Hero.vue';
import Quote from '../common/Quote.vue';
import Modal from '../common/Modal.vue';
import Gallery from '../common/Gallery.vue';
import TextForm from '../common/TextForm.vue';
import List from '../common/List.vue';

export default {
  name: 'StyleGuide',
  watch: {
    '$route' (to, from) {
      console.log('route changed');
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Hero,
    Quote,
    Modal,
    Gallery,
    TextForm,
    List
  },
  methods: {
    openModal: function(){
      this.showModal = true;
      this.$emit('modalOpened');
    },
    closeModal: function(){
      this.showModal = false;
      this.$emit('modalClosed');
    },
  },
  created () {},
  data () {
    return {
      msg: "This letter 'qjg' gos on a new line so you can <a href=\"#\">simply</a> check the letter 'g'",
      paragraph: "Lorem Ipsum <a href=\"#\">is simply dummy</a> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alphabet: " ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/> abcdefghijklmnopqrstuvwxyz <br/> 0123456789",

      showModal: false,

      mainQuoteSmallTextPre: 'The Coolest',
      mainQuoteBigText: 'kids on the...new line:<br/>block',
      mainQuoteSmallTextSub: '',

      ctasExample:
        [
          {title: 'go to external link', action: 'http://example.com', class: 'btn col--4-12@sm col--12-12@xs btn--primary'},
          {title: 'go to internal link', action: 'add-route-here', class: 'btn col--4-12@sm col--12-12@xs btn--primary'},
          {title: 'execute function', action: this.openModal, class: 'btn col--4-12@sm col--12-12@xs btn--primary'}
        ],
      visualElement:
        {
          type: 'image', class: 'img img--ratio-1-1', url: 'https://fillmurray.com/1400/1400'
        },
      servicesList: [
        {
          title: 'Web Design - NO URL',
          url: '',
          target: '_blank',
          class: 'col col--3-12',
          image: {
              src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
              srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
              ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Web Design 1 - EXT URL',
              url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              },
              items: [
                {
                  title: '-- 3rd level',
                  url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
                  target: '_blank',
                  class: 'col col--3-12',
                  image: {
                    src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                    srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                    ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
                  },
                  items: [
                  {
                    title: '--- 4th level',
                    url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
                    target: '_blank',
                    class: 'col col--3-12',
                    image: {
                      src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                      srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                      ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
                    }
                  }
                ]
                }
              ]
            },
            {
              title: 'Web Design 2 - internal URL',
              url: '/styles',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'To Route!',
          url: '/route-here',
          target: '_blank',
          class: 'col col--3-12',
          image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Awesomeness 1',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 1',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 3',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Function!',
          url: this.openModal,
          target: '_blank',
          class: 'col col--3-12',
          image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Ultra Awesomeness 1',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 2',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 3',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'No url',
          url: '',
          target: '_blank',
          class: 'col col--3-12',
          image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Something Else 1',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 2',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 3',
              url: '/',
              target: '_blank',
              class: 'col col--3-12',
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        }
      ],

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
      ],

      clientsImages: [
        {
          src: 'http://placehold.it/800x400?text=LOGO+HERE',
          srcRetina: 'http://placehold.it/800x800?text=LOGO+HERE',
          ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
          title: '',
          subtitle: '',
          alt: '',
          link: '',
          target: ''
        },
        {
          src: 'http://placehold.it/801x401?text=LOGO+HERE',
          srcRetina: 'http://placehold.it/801x801?text=LOGO+HERE',
          ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
          title: '',
          subtitle: '',
          alt: '',
          link: '',
          target: ''
        },
        {
          src: 'http://placehold.it/802x402?text=LOGO+HERE',
          srcRetina: 'http://placehold.it/802x802?text=LOGO+HERE',
          ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
          title: '',
          subtitle: '',
          alt: '',
          link: '',
          target: ''
        },
        {
          src: 'http://placehold.it/403x403?text=LOGO+HERE',
          srcRetina: 'http://placehold.it/803x803?text=LOGO+HERE',
          ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
          title: '',
          subtitle: '',
          alt: '',
          link: 'http://example.com',
          target: ''
        },
        {
          src: 'http://placehold.it/404x404?text=LOGO+HERE',
          srcRetina: 'http://placehold.it/804x804?text=LOGO+HERE',
          ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
          title: '',
          subtitle: '',
          alt: '',
          link: '',
          target: ''
        },
        {
          src: 'http://placehold.it/405x405?text=LOGO+HERE',
          srcRetina: 'http://placehold.it/805x805?text=LOGO+HERE',
          ratio: '1-1', //see welanstrap/_images.scsss for possible ratio values
          title: '',
          subtitle: '',
          alt: '',
          link: '',
          target: ''
        }
      ],

      startProjectSelectables: [
        {
          placeholder: "Tool",
          text_before: "I want need a ",
          selections: {
            selected: null,
            options: ["Web App", "Mobile App", "Website", "Shop Online", "Custom Solution"]
          },
          text_after: " ",
        },
        {
          placeholder: "Business",
          text_before: "for my ",
          selections: {
            selected: null,
            options: ["Startup/Venture","Company","Non Profit Org","Government Org"]
          },
          text_after: ". "
        },
        {
          placeholder: "Something",
          text_before: "It should also include ",
          selections: {
            selected: null,
            options: ["Corporate Identity (re)Design", "Maintenance Contract", "Marketing Plan", "Metrics Tracker"]
          },
          text_after: " ",
        },
        {
          placeholder: "Yesterday",
          text_before: "and I want to start ",
          selections: {
            selected: null,
            options: ["ASAP", "this Week", "this Month", "this Year"]
          },
          text_after: ". "
        },
        {
          placeholder: "Nothing yet",
          text_before: "Oh! I've done ",
          selections: {
            selected: "nothing yet",
            options: ["nothing yet", "some parts", "a lot already"]
          },
          text_after: "."
        }
      ],

      contacts: {
        phone: '+49 30 609 857 750',
        address: 'Waldemarstraße 37a',
        zip: '12043',
        city: 'Berlin',
        country: 'GERMANY',
      },

      details: {
        title: 'Welance',
        subtitle: 'Freelance Collective',
        logo: 'assets/images/logo.svg',
        altLogo: 'Welance - Freelancing Collectively'
      },

      menu: [
        {
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Web Design 1 - EXT URL',
              url: '',
              extUrl: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2 - internal URL',
              url: '/styles',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Ultra Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Styles',
          url: '/styles',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Something Else 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'https://fillmurray.com/400/400',
                srcRetina: 'https://fillmurray.com/800/800',
                ratio: '16-9' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main-sass-only.scss";

$light-gray:  #f3f3f3;
$border-gray: #f1f1f1;

.styles{

  .row-example{
    @include mt(2);
    @include mb(4);
    width: 100%;
    margin: 0 auto;
  }
  .col-example{
    border: 1px solid rgba(60,60,255,.4);
    min-height: 60px;
    color: rgba(60,60,255,1);
  }

  //sections general styles
  section{
    @include pt(6);
    @include pb(6);
  }

  .colors-section{

    .color-item{
      text-align: center;
      align-self: center;
      border: 1px solid $border-gray;
      @include mt(2);
      h6{
        @include mt(2);
      }
    }

    .color{
      width: 100%;
      height: 140px;
      background: white;
      border-radius: 5px;
      border: 1px solid $border-gray;
      &--primary{
        background: $brand-primary;
      }
      &--success{
        background: $brand-success;
      }
      &--info{
        background: $brand-info;
      }
      &--warning{
        background: $brand-warning;
      }
      &--danger{
        background: $brand-danger;
      }
      &--inverse{
        background: $brand-inverse;
      }
      &--gray{
        background: $gray;
      }
      &--gray-dark{
        background: $gray-dark;
      }
      &--gray-light{
        background: $gray-light;
      }
      &--gray-lighter{
        background: $gray-lighter;
      }
      &--gray-lightest{
        background: $gray-lightest;
      }
      &--white{
        background: $white;
      }
      &--black{
        background: $black;
      }
    }
  }

  .typography-section {
    .lines{
      &:nth-child(odd){
        border-bottom: 1px solid deepskyblue;
        border-top: 1px solid deepskyblue;
      }
      border-bottom: 1px solid deepskyblue;
      border-top: 1px solid deepskyblue;
    }
  }
}

.gallery-section{
  overflow: hidden;
}

.hero-section{
  @include make-container();
  background: $light-gray;
  @include pt(3);
  @include pb(3);
}
</style>
