<template>
  <header class="header" :class="'header-' + name">
    <div class="header__wrap">
      <div class="header__row">
        <div class="header__col header__col--logo">
          <slot name="logo">
              <router-link :to="{ path: '/' }">
                <img v-if="details.logo" class="logo" :alt="details.altLogo" :src="details.logo"/>
                <img v-if="!details.logo" class="logo" :alt="'your logo will appear here and link to root'" :src="''"/>
              </router-link>
          </slot>
        </div>
        <div class="header__col header__col--extra">
          <slot name="extra">col-1<br/>Slot <em>EXTRA</em></slot>
        </div>
        <div class="header__col header__col--menu">
          <slot name="menu">This is a col-9 in slot <em>MENU</em></slot>
        </div>
      </div>
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
  props: [
    'name',
    'contacts',
    'menu',
    'details'
  ],
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
@import "~styles/main.scss";

.header {

  &__wrap{
    @include make-container-max-widths();
    margin: 0 auto;
  }

  &__row{
    @include make-row-no-gutters();
    margin: 0;
  }

  &__col{
    @include make-col-ready();
    &--logo{
      z-index: 9;
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
