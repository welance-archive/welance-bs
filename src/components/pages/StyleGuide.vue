<template>
  <div class="styles">

    <a id="forkMe" href="https://github.com/welance/welance-bs">Fork me on GitHub</a>

    <quote
      :name="'main'"
      :type="'main'"
      :small-text-pre="''"
      :big-text="'Welance Bootstrap & Style Guide'"
      :small-text-sub="'Default styles and VueJS components of the Welance Bootstrapm –visualised.'">
    </quote>

    <hr/>

    <!-- ––––––––––––––––––––––––––––––––––––––- COLORS -->
    <section class="colors-section">
      <div class="row">
        <quote
          :name="'colors'"
          :small-text-pre="''"
          :big-text="'Colors'"
          :small-text-sub="'Actual Colors'">
        </quote>

        <div class="color-items">
          <div class="color-item">
            <div class="color color--primary"></div>
            <h6><strong>$brand-primary</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--success"></div>
            <h6><strong>$brand-success</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--info"></div>
            <h6><strong>$brand-info</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--warning"></div>
            <h6><strong>$brand-warning</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--danger"></div>
            <h6><strong>$brand-danger</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--inverse"></div>
            <h6><strong>$brand-inverse</strong></h6>
          </div>
        </div>

        <quote
          :name="'colors-2'"
          :small-text-pre="''"
          :big-text="'...'"
          :small-text-sub="'Gray Scale'">
        </quote>


        <div class="color-items">
          <div class="color-item">
            <div class="color color--gray-dark"></div>
            <h6><strong>$gray-dark</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--gray"></div>
            <h6><strong>$gray</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--gray-light"></div>
            <h6><strong>$gray-light</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--gray-lighter"></div>
            <h6><strong>$gray-lighter</strong></h6>
          </div>
          <div class="color-item">
            <div class="color color--gray-lightest"></div>
            <h6><strong>$gray-lightest</strong></h6>
          </div>

          <div class="color-item">
            <div class="color color--black"></div>
            <h6><strong>$black</strong></h6>
          </div>
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
      <div class="row">
        <quote
          :name="'typography'"
          :small-text-pre="''"
          :big-text="'Typography'"
          :small-text-sub="'A quick presentation of the headings and text styles available'">
        </quote>

        <hr/>
        <h1 class="bg col-12" v-html="'–H1 ' + msg + ' –H1'"></h1>
        <h2 class="bg col-12" v-html="'–H2 ' + msg + ' –H2'"></h2>
        <h3 class="bg col-12" v-html="'–H3 ' + msg + ' –H3'"></h3>
        <h4 class="bg col-12" v-html="'–H4 ' + msg + ' –H4'"></h4>
        <h5 class="bg col-12" v-html="'–H5 ' + msg + ' –H5'"></h5>
        <h6 class="bg col-12" v-html="'–H6 ' + msg + ' –H6'"></h6>
        <p class="bg col-12" v-html="paragraph"></p>
        <p class="bg col-12" v-html="paragraph"></p>

        <p class="bg col-3" v-html="paragraph"></p>
        <p class="bg col-3" v-html="paragraph"></p>
        <p class="bg col-3" v-html="paragraph"></p>

        <p class="bg col-2" v-html="paragraph"></p>
        <p class="bg col-2" v-html="paragraph"></p>

      </div>
    </section>

    <section class="typography-section">
      <div class="row">
        <quote
          :name="'type'"
          :small-text-pre="''"
          :big-text="'Typefaces'"
          :small-text-sub="''">
        </quote>

        <h4 class="col-12">Standard TypeFace</h4>
        <p class="col-12" v-html="alphabet"></p>
      </div>
    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END TYPOGRAPHY -->

    <!-- ––––––––––––––––––––––––––––––––––––––- BUTTONS -->
    <section class="btn-section">
      <div class="row">
        <quote
          :name="'buttons'"
          :small-text-pre="''"
          :big-text="'Buttons'"
          :small-text-sub="''">
        </quote>

        <div class="col-12">
          <button class="btn" type="button">default</button><button class="btn" type="button" disabled="disabled">default</button>
          <br/>
          <button class="btn btn--info" type="button">info</button><button class="btn btn--info" type="button" disabled="disabled">info</button>
          <br/>
          <button class="btn btn--warning" type="button">warning</button><button class="btn btn--warning" type="button" disabled="disabled">warning</button>
          <br/>
          <button class="btn btn--danger" type="button">danger</button><button class="btn btn--danger" type="button" disabled="disabled">danger</button>
          <br/>
          <button class="btn btn--success" type="button">success</button><button class="btn btn--success" type="button" disabled="disabled">success</button>
          <br/>
          <button class="btn btn--primary btn--big" type="button">big</button>
          <br/>
          <button class="btn btn--primary" type="button">normal</button>
          <br/>
          <button class="btn btn--primary btn--small" type="button">small</button>
          <br/>
          <button class="btn btn--primary btn--tiny" type="button">tiny</button>
        </div>
      </div>
    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END BUTTONS -->

    <hr/>

    <!-- ––––––––––––––––––––––––––––––––––––––- HERO -->
    <section class="section">
      <quote
        :name="'hero'"
        :small-text-pre="''"
        :big-text="'Hero component'"
        :small-text-sub="'This is how you create an hero component'">
      </quote>

      <div class="col-12">
        <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/5vqrchv4/5/embedded/html/"></iframe>
      </div>

    </section>
    <section class="hero-section">
      <hero
        :name="'main'"
        :title="heroTitle"
        :subtitle="heroSubtitle"
        :image="heroImage"
        :open-modal="openModal"
        :ctaUrl="heroUrl"
        :ctaText="'View Modal (\'half\' mode)'"
      ></hero>
    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END HERO -->


    <!-- ––––––––––––––––––––––––––––––––––––––- GALLERY -->
    <section class="quote-section">
      <quote
        :name="'gallery'"
        :small-text-pre="''"
        :big-text="'Gallery'"
        :small-text-sub="'The gallery component has different <em>gallery-types</em>'">
      </quote>

      <div class="col-12">
        <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/hcpyxdqx/embedded/html,js"></iframe>
      </div>

    </section>

    <section class="gallery-section">

      <quote
        :name="'gallery-off'"
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
        :name="'gallery-off'"
        :small-text-pre="''"
        :big-text="'...'"
        :small-text-sub="'<strong>squares</strong> (great for logos, users, and generally squared layouts)'">
      </quote>

      <gallery
        :name="'off'"
        :images="officeImages"
        :gallery-type="'squares'"
      ></gallery>

      <quote
        :name="'gallery-off'"
        :small-text-pre="''"
        :big-text="'...'"
        :small-text-sub="'<strong>blocky</strong> (great for filling spaces completely)'">
      </quote>

      <gallery
        :name="'off'"
        :images="officeImages"
        :gallery-type="'blocky'"
      ></gallery>

    </section>
    <!-- ––––––––––––––––––––––––––––––––––––––- END GALLERY -->


    <!-- ––––––––––––––––––––––––––––––––––––––- LISTS -->
    <section class="lists-section">

      <quote
        :name="'list'"
        :small-text-pre="''"
        :big-text="'Lists'"
        :small-text-sub="'A component with optional quote for listing (recursively up to 2 levels)'">
      </quote>

      <div class="col-12">
        <iframe style="border: none; width:100%; height: 300px;" src="https://jsfiddle.net/c6s2tntm/1/embedded/html,js"></iframe>
      </div>

      <list-of-lists
        :name="'list'"
        :smallTextPre="'Optional Pre-text'"
        :bigText="'Optional title of the list'"
				:smallTextSub="'Optional Sub-text'"
        :lists="servicesList"
        :levelOneImg="true"
        :levelTwoImg="false">
      </list-of-lists>


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

      <div class="col-12">
        <header-component
          :name="'main'"
          :contacts="{}"
          :details="{}"
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
          :smallTextPre="''"
          :bigText="''"
          :smallTextSub="''"
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
          :smallTextPre="''"
          :bigText="''"
          :smallTextSub="''"
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
          :smallTextPre="''"
          :bigText="''"
          :smallTextSub="''"
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
import ListOfLists from '../common/ListOfLists.vue';
import LogoList from '../common/LogoList.vue';

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
    ListOfLists,
    LogoList
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
      msg: "This is a new line with <a href=\"#\">simply</a> the letter 'g' in it.",
      paragraph: "Lorem Ipsum <a href=\"#\">is simply dummy</a> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      alphabet: " ABCDEFGHIJKLMNOPQRSTUVWXYZ <br/> abcdefghijklmnopqrstuvwxyz <br/> 0123456789",

      showModal: false,

      heroTitle: 'We are the coolest kids in town, really kewl. 🖖',
      heroSubtitle: 'I am seriously guys',
      heroImage: 'https://fillmurray.com/1400/1400',
      heroUrl: '',      //if empty, opens modal using "open-modal" prop, if filled, goest to internal route (eg. YES: "/contacts", NO: "http://example.com")

      mainQuoteSmallTextPre: 'The Coolest',
      mainQuoteBigText: 'kids on the...new line:<br/>block',
      mainQuoteSmallTextSub: '',

      servicesList: [
        {
          title: 'Web Design - NO URL',
          url: '',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
              src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
              srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
              ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Web Design 1 - EXT URL',
              url: '',
              extUrl: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2 - internal URL',
              url: '/styles',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Web Design 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Awesomeness',
          url: '',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Awesomeness 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Ultra Awesomeness',
          url: '',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Ultra Awesomeness 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Ultra Awesomeness 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        },
        {
          title: 'Something Else',
          url: '',
          extUrl: '',
          extUrlTarget: '_blank',
          image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
          },
          items: [
            {
              title: 'Something Else 1',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 2',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            },
            {
              title: 'Something Else 3',
              url: '/',
              extUrl: '',
              extUrlTarget: '_blank',
              image: {
                src: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
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
@import "./src/sass/main.scss";

$light-gray:  #f3f3f3;
$border-gray: #f1f1f1;

.styles{
  @include mt(6);
  @include mb(6);
  @include mq($until: 'sm'){
    @include pl(6);
    @include pr(6);
  }

  .row{
    @include make-row();
  }

  .col-12{
    @include make-col-ready();
    @include make-col(12);
  }
  .col-3{
    @include make-col-ready();
    @include make-col(4);
  }
  .col-2{
    @include make-col-ready();
    @include make-col(6);
  }
  //sections general styles
  .colors-section, .quote-section, .lists-section, .clients-section,
  .contact-section, .typography-section, .btn-section, .section{
    @include make-container-max-widths();
    margin: 0 auto;
    @include pt(6);
    @include pb(6);
  }

  .colors-section{
    .color-items{
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-flow: row wrap;

      .color-item{
        text-align: center;
        border: 1px solid $border-gray;
        border-radius: 5px;
        @include mt(2);
        @include ml(2);
        h6{
          @include mt(2);
        }
      }
    }

    .color{
      width: 140px;
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
        background: $gray-light;
      }
      &--gray-lightest{
        background: $gray-light;
      }
      &--white{
        background: $white;
      }
      &--black{
        background: $black;
      }
    }
  }

  .hero-section{
    background: $light-gray;
    @include pt(6);
    @include pb(6);
  }

  .typography-section {
    .bg{
      &:nth-child(odd){
        border-bottom: 1px solid deepskyblue;
        border-top: 1px solid deepskyblue;
      }
      border-bottom: 1px solid deepskyblue;
      border-top: 1px solid deepskyblue;
    }
  }

  #forkMe {
    top: 3em;
    right: -6em;
    color: #fff;
    display: block;
    position: fixed;
    text-align: center;
    text-decoration: none;
    letter-spacing: .06em;
    background-color: black;
    padding: 0.5em 5em 0.4em 5em;
    //text-shadow: 0 0 0.75em #444;
    box-shadow: 0 0 0.5em rgba(0,0,0,0.5);
    transform: rotate(45deg) scale(0.75,1);
    font: bold 16px/1.2em Arial, Sans-Serif;
    z-index:9999999999999;
    &:before {
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      margin: -0.3em -5em;
      transform: scale(0.7);
      border: 2px rgba(255,255,255,0.7) dashed;
    }
    &:hover {
      background: orangered;
    }
  }


}
</style>
