<template>
  <header class="header" :class="'header-' + name">
    <div class="header__wrap">
      <div class="header__row">
        <div class="header__col header__col--logo">
          <slot name="logo">
              <router-link :to="{ path: '/' }">
                <img class="logo" alt="logo" src="/assets/images/logo.svg"/>
              </router-link>
          </slot>
        </div>
        <div class="header__col header__col--extra">
          <slot name="extra"></slot>
        </div>
        <div class="header__col header__col--menu">
          <slot name="menu"></slot>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MenuComponent from 'components/common/MenuComponent.vue';

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
    @include make-row();
  }

  &__col{
    @include make-col-ready();

    &--logo{
      @include make-col(1);
    }
    &--extra{
      @include make-col(2);
    }
    &--menu{
      @include make-col(9);
    }
  }

}

</style>
