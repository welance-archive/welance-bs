<template>
<div>
  <div class="wrap wrap--contained">
    <div class="row">
      <div class="col col--3-12@lg col--12-12@xs">
        <!--:open-all="true"-->
        <list
          :name="'menuzio'"
          :debug="false"
          :columnClass="'col--12-12@xs'"
          :mode="'tree'"
          :open-all="true"
          :print-levels="5"
          :print-level-imgs="[0,0,0,0,0]"
          :print-level-text="[1,1,1,1,1]"
          :list="componentsMenu">
        </list>
      </div>
      <div class="col col--9-12@lg col--12-12@xs">
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
            <div class="row">
              <list
                :name="'example'"
                :debug="false"
                :contained="false"
                :columnClass="'col col--3-12@xl col--4-12@lg col--6-12@md col--12-12@xs'"
                :print-levels="4"
                :print-level-imgs="[1, 0, 0, 0]"
                :print-level-text="[1, 1, 1, 1]"
                :list="servicesList">
              </list>
            </div>

          </div>

        </section>
        <!-- ––––––––––––––––––––––––––––––––––––––- END LISTS -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Quote from '../../../common/Quote.vue';
import List from '../../../common/List.vue';
import axios from 'axios';

export default {
  name: 'ListsPage',
  watch: {
    '$route' (to, from) {
      console.log('route changed');
    }
  },
  components: {
    Quote,
    List
  },
  methods: {
    exampleFunction : function(){
      alert('here you can have function calls')
    }
  },
  data(){
    return{
      componentsMenu : [],
      servicesList: [
        {
          title: 'Web Design - NO URL',
          url: '',
          target: '_blank',
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
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              },
              items: [
                {
                  title: '3rd level',
                  url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
                  target: '_blank',
                  image: {
                    src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                    srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                    ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
                  },
                  items: [
                  {
                    title: '4th level',
                    url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
                    target: '_blank',
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
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              },
              items: [
                {
                  title: '3rd level',
                  url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
                  target: '_blank',
                  image: {
                    src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                    srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                    ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
                  },
                  items: [
                  {
                    title: '4th level',
                    url: 'https://welance-handbook.herokuapp.com/welance-development-guidelines.html',
                    target: '_blank',
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
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
            },
            {
              title: 'Awesomeness 1',
              url: '/',
              target: '_blank',
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
          url: this.exampleFunction,
          target: '_blank',
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
              image: {
                src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                srcRetina: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=ICON_HERE&w=400&h=400',
                ratio: '3-2' //see welanstrap/_images.scsss for possible ratio values
              }
            }
          ]
        }
      ]
    }
  },
  created () {
    axios.get(`/assets/data/components-menu.json`)
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

</style>
