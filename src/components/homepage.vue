<template>
    <div>
        <p style="color: greenyellow">
            This should be homepage.

            {{ label('language.english') }}
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              label: aka.lang.getLabel
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>

</style>
