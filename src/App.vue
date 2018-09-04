<template>
  <div id="app">
      <custom-nav />
    <router-view/>
  </div>
</template>

<script>
    import customNav from '@/components/customNav'
export default {
  data() {
      return {

      }
  },
    components: {
      customNav
    }

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
