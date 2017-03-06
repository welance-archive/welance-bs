<template>
  <div class="section">
    <div class="text-form">
      <div class="text-form__container">
        <div class="text-form__col">
          <form>
            <p>
              <span v-for="(selectable, index) in selectables" v-bind:item="selectable" v-bind:index="index">
                {{selectable.text_before}}
                <dropdown-component
                  :options="selectable.selections.options"
                  :value="selectable.selections.options[0]"
                  :close-on-select="false"
                  :hide-selected="true"
                  :clear-on-select="false"
                  :multiple="true"
                  select-label=""
                  placeholder=""
                ></dropdown-component>
                {{selectable.text_after}}
              </span>
            </p>
          </form>
          <h5>
            {{smallText}}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownComponent from './DropdownComponent.vue';

export default {
    name: 'TextFormComponent',
    components: {
      DropdownComponent
    },
    data () {
        return{
            text: 'This is a huge text with some content in it',
						smallText: 'M. Gandhi',
            selectables: [
                {
                  text_before: "I want need a ",
                  selections: {
                    selected: null,
                    options: ["Web App", "Mobile App", "Website", "Shop Online", "Custom Solution"]
                  },
                  text_after: " ",
                },
                {
                  text_before: "for my ",
                  selections: {
                    selected: null,
                    options: ["Startup/Venture","Company","Non Profit Org","Government Org"]
                  },
                  text_after: ". "
                },
                {
                  text_before: "It should also include ",
                  selections: {
                    selected: null,
                    options: ["Corporate Identity (re)Design", "Maintenance Contract", "Marketing Plan", "Metrics Tracker"]
                  },
                  text_after: " ",
                },
                {
                  text_before: "and I want to start ",
                  selections: {
                    selected: null,
                    options: ["ASAP", "this Week", "this Month", "this Year"]
                  },
                  text_after: ". "
                },
                {
                  text_before: "Oh! I've done ",
                  selections: {
                    selected: "nothing yet",
                    options: ["nothing yet", "some parts", "a lot already"]
                  },
                  text_after: "."
                }
            ]
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~styles/main.scss";

.section{
  //background: red;
}

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
}

</style>
