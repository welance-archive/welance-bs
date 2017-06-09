<template>
  <header class="header" :class="'header-' + name">

    <pre v-if="debug" class="row">
      ℹ️ HeaderComponent

      SLOTS:
        • row-01
        • row-02
          • logo (make-col(2))
          • extra (make-col(1))
          • menu (make-col(9))
        • row-03

      PROPS:
        • name (string)
        • debug (boolean)
        • details (json)
        • contacts (json)
    </pre>

    <div class="wrap header__wrap" :class="{'wrap--contained' : contained}">
      <slot name="row-01">
        <div class="row header__row"></div>
      </slot>
      <slot name="row-02">
        <div class="row header__row">
          <div class="col header__col header__col--logo">
            <slot name="logo" v-if="details">
                <router-link :to="'/'">
                  <img v-if="details.logo" class="logo" :alt="details.altLogo" :src="details.logo"/>
                  <img v-if="!details.logo" class="logo" :alt="'MISSING LOGO in details json'" :src="''"/>
                </router-link>
            </slot>
          </div>
          <div class="col header__col header__col--extra">
            <slot name="extra"></slot>
          </div>
          <div class="col header__col header__col--menu">
            <slot name="menu"></slot>
          </div>
        </div>
      </slot>
      <slot name="row-03">
        <div class="row header__row"></div>
      </slot>
    </div>
  </header>
</template>

<script>
import MenuComponent from './MenuComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MenuComponent
  },
  props: {
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
    'contacts': {
      type: Object,
      default: {}
    },
    'details': {
      type: Object,
      default: {}
    }
  },
  data () {
    return{}
  },
  computed: {
    availabilityText: function(){
      return 'We are available in 5 min';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main-sass-only.scss";

.header {
  z-index: $z-super-top;

  &__col{
    &--logo{
      @include make-col(2);
    }
    &--extra{
      @include make-col(1);
    }
    &--menu{
      @include make-col(9);
    }
  }

}

</style>
