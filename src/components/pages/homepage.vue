<template>
    <div>
        <p style="color: greenyellow">
            This should be homepage. <br />

            {{ label('language.dutch') }} <br />
        </p>
        <p v-html="text('lorem')">
            {{ text('lorem' )}}
        </p>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: 'homepage',
        data() {
            return {
                label: aka.lang.getLabel,
                text: aka.lang.getTextTranslation
            }
        },
        computed: {
        },
        mounted: () => {
            aka.lang.fetchTexts('general')
        }
    }
</script>