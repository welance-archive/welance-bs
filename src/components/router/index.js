import Vue from 'vue';
import Router from 'vue-router';

import StyleGuide from './../pages/StyleGuide.vue';

import GridPage from './../pages/components/basic-styling/Grid.vue';
import ColorsPage from './../pages/components/basic-styling/Colors.vue';
import ButtonsPage from './../pages/components/basic-styling/Buttons.vue';
import TypographyPage from './../pages/components/basic-styling/Typography.vue';

import HeroPage from './../pages/components/data-display/Hero.vue';
import HeaderFooterPage from './../pages/components/data-display/HeaderFooter.vue';
import GalleryPage from './../pages/components/data-display/Gallery.vue';
import ListsPage from './../pages/components/data-display/Lists.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [

      {
        path: '',
        component: StyleGuide
      },
      {
        path: '/',
        component: StyleGuide
      },
      {
        path: '/components/basic-styling/grid',
        component: GridPage
      },
      {
        path: '/components/basic-styling/colors',
        component: ColorsPage
      },
      {
        path: '/components/basic-styling/typography',
        component: TypographyPage
      },
      {
        path: '/components/basic-styling/buttons',
        component: ButtonsPage
      },
      {
        path: '/components/data-display/gallery',
        component: GalleryPage
      },
      {
        path: '/components/data-display/lists',
        component: ListsPage
      },
      {
        path: '/components/data-display/hero',
        component: HeroPage
      },
      {
        path: '/components/data-display/header-footer',
        component: HeaderFooterPage
      }

    ]
});
