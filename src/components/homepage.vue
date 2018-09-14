<template>
    <div>
        <p style="color: greenyellow">
            This should be homepage.

            lets test his: {{ language }}
        </p>
    </div>
</template>

<script>
    import ENV from "../../env"
    export default {
        data() {
            return {

            }
        },
        computed: {
            language () {
                return ENV.default_language
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>