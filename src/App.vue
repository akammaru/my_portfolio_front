<template>
  <div id="app">
      <custom-nav />
    <router-view/>
  </div>
</template>

<script>
    import customNav from '@/components/customNav'
    import ENV from '../env'

export default {
  data() {
      return {

      }
  },
  components: {
    customNav
  },
  beforeCreate() {
    let tansltions_fetched = this.$store.getters.getTranslations
    if(ENV.debug_mode) {
      console.log('debug mode is active, please disable for production.')
      console.log("translations have been fetched: " + tansltions_fetched)
    }
  }

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
