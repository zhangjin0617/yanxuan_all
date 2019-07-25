<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>

import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
</style>
