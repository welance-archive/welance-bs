export default {
  data: function() {
    return {
      vW: 0,
      //vH: 0,
      breakpoints: {xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1680}
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      //window.addEventListener('resize', this.getWindowHeight);

      //Init
      this.getWindowWidth()
      //this.getWindowHeight()
    })
  },
  methods: {
    getWindowWidth(event) {
      this.vW = document.documentElement.clientWidth;
    },
    /*getWindowHeight(event) {
      this.vH = document.documentElement.clientHeight;
    }*/
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    //window.removeEventListener('resize', this.getWindowHeight);
  }
};
