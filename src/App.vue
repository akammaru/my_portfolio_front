<template>
  <div id="app">
    <custom-nav/>
    <router-view/>
    <div v-if="debug">
      <p>debug mode is active</p>
    </div>
    <custom-foot/>
  </div>
</template>

<script>
  import customNav from '@/components/general/customNav'
  import customFoot from '@/components/general/customFooter'
  import ENV from '../env'

  export default {
    data() {
      return {
        debug: ENV.debug
      }
    },
    components: {
      customNav,
      customFoot
    }
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
