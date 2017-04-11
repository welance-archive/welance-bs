<template>
  <ul class="list" :class="[{'wrap wrap--contained' : contained}, 'list-' + name]">

    <pre v-if="debug && level == 1" class="row">
      ℹ️ Hero

      SLOTS:
        no slots

      PROPS:
        • name (string)
        • debug (boolean)
        • contained (boolean)
        • print-levels (array) eg, for a 4 nested level list: [1,0,0,0]
        • print-level-imgs (array) eg, for a 4 nested level list: [1,0,0,0]
        • print-level-text (array) eg, for a 4 nested level list: [1,0,0,0]
        • list (array) eg. [
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
                            ...
                            ]
    </pre>


    <li v-if="level <= printLevels" class="list__item" :class="['list__item-' + index, columnClass && !ignoreClass ? columnClass : 'col--12-12']" v-for="(item,index) in list">

        <router-link v-if="urlType(item.url) === 'internal'" :to="item.url">
          <div v-if="item.image.src && printLevelImgs[level-1]" class="img"
                :class="[item.image.ratio ? 'img--ratio-' + item.image.ratio : '']"
                :style="{ backgroundImage: 'url(' + item.image.src + ')' }">
          </div>
          <template v-if="printLevelText[level-1]">{{item.title}}</template>
        </router-link>

        <a v-else-if="urlType(item.url) === 'external'" :href="item.url">
          <div v-if="item.image.src && printLevelImgs[level-1]" class="img"
                :class="[item.image.ratio ? 'img--ratio-' + item.image.ratio : '']"
                :style="{ backgroundImage: 'url(' + item.image.src + ')' }">
          </div>
          <template v-if="printLevelText[level-1]">{{item.title}}</template>
        </a>

        <a href v-else-if="urlType(item.url) === 'function'" v-on:click.stop.prevent="item.url" >
          <div v-if="item.image.src && printLevelImgs[level-1]" class="img"
                :class="[item.image.ratio ? 'img--ratio-' + item.image.ratio : '']"
                :style="{ backgroundImage: 'url(' + item.image.src + ')' }">
          </div>
          <template v-if="printLevelText[level-1]">{{item.title}}</template>
        </a>

        <template v-else>
          <div v-if="item.image.src && printLevelImgs[level-1]" class="img"
                :class="[item.image.ratio ? 'img--ratio-' + item.image.ratio : '']"
                :style="{ backgroundImage: 'url(' + item.image.src + ')' }">
          </div>
          <template v-if="printLevelText[level-1]">{{item.title}}</template>
        </template>

        <list v-if="item.items && level <= printLevels"
          :name="'example-' + index"
          :debug="true"
          :contained="false"
          :level="addCount"
          :print-levels="printLevels"
          :print-level-imgs="printLevelImgs"
          :print-level-text="printLevelText"
          :ignore-class="true"
          :list="item.items">
        </list>

    </li>

  </ul>
</template>

<script>
export default {
    name: 'List',
    props:
    {
      'name': {
        type: String,
        default: 'default'
      },
      'debug': {
        type: Boolean,
        default: false
      },
      'contained': {
        type: Boolean,
        default: false
      },
      'level': {
        type: Number,
        default: 1
      },
      'printLevels': {
        type: Number,
        default: 0
      },
      'columnClass': {
        type: String,
        default: ''
      },
      'ignoreClass': {
        type: Boolean,
        default: false
      },
      'printLevelImgs': {
        type: Array,
        default: ''
      },
      'printLevelText': {
        type: Array,
        default: ''
      },
      'list': {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        cnt : 0
      }
    },
    computed: {
      addCount: function(){
        if(this.level){
          return this.cnt+this.level+1;
        }else{
          return 1;
        }
      }
    },
    mounted: function(){
      this.level = this.level ? this.level :  1;
    },
    methods: {
      urlType: function (value) {
        if(typeof value == 'function'){
          return 'function';
        }else if(value.indexOf('http') !== -1){
          return 'external';
        }else if(value === '' || value === undefined || value === 'undefined'){
          return '';
        }else{
          return 'internal';
        }
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/sass/main-sass-only.scss";

.list{
  @include mq($until: 'sm'){
    text-align: center;
  }
};

</style>
