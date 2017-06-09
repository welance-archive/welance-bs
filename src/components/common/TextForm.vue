<template>
  <div class="text-form" :class="'text-form-' + name">
    <div class="text-form__container">
      <div class="text-form__col">
        <form>
          <p>
            <span v-for="(selectable, index) in selectables" v-bind:item="selectable" v-bind:index="index">
              {{selectable.text_before}}
              <dropdown
                :options="selectable.selections.options"
                :value="selectable.selections.options[0]"
                :close-on-select="true"
                :hide-selected="true"
                :clear-on-select="true"
                :multiple="true"
                select-label=""
                :placeholder="selectable.placeholder"
              ></dropdown>
              {{selectable.text_after}}
            </span>
          </p>
        </form>
        <h5>
          {{smallText}}
        </h5>
      </div>
    </div>
    <div class="text-form__action">
        <button type="button" class="btn btn--primary">Get Free Quote ⟶</button>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
  name: 'TextForm',
  props: [
    'name',
    'selectables'
  ],
  components: {
    Dropdown
  },
  data () {
    return{}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~styles/main-sass-only.scss";

.text-form{
  @include make-container-max-widths();
  margin: 0 auto;

  &__container{
    @include make-row();
    flex-direction: row;
    overflow: inherit;
  }

  &__col{
    @include make-col-ready();
    @include make-col(12);
  }
  &__action{
    @include make-col-ready();
    @include make-col(12);
    text-align: right;
  }
}

</style>
