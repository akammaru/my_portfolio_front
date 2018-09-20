<template>
    <div>
        <p style="color: greenyellow">
            This should be homepage.

            {{ label('language.dutch') }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'homepage',
        data() {
            return {
               label: aka.lang.getLabel
            }
        },
        computed: {
        }
    }
</script>

