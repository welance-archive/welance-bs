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
  name: 'ColorsPage',
  watch: {
    '$route' (to, from) {
      console.log('route changed');
    }
  },
  components: {
    Quote,
    List
  },
  data(){
    return{
      componentsMenu: []
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

$light-gray:  #f3f3f3;
$border-gray: #f1f1f1;

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
</style>
