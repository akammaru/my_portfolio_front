<template>
    <div id="app">
        <custom-nav/>
        <router-view/>
        <div v-if="debug">
            <p>debug mode is active</p>
        </div>
    </div>
</template>

<script>
    import customNav from '@/components/customNav'
    import ENV from '../env'

    export default {
        data() {
            return {
                debug: ENV.debug
            }
        },
        components: {
            customNav
        },
        beforeCreate() {
            let value = this.$store.getters.getTranslations
            console.warn(value)
        }

    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
