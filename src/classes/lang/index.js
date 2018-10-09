import store from '@/store'

const language = {
    /**
     * gets translations for labels. (short texts)
     *
     * @param key   always a category.key format.
     * @returns {string}
     */
    getLabel(key) {
        if (_.isUndefined(key)) {
            return ''
        }

        //split key on .
        const keys_split = Array.isArray(key) ? key : key.split('.')

        let label = store.state.translations.labels

        if(!_.isEmpty(label)) {
            for (let single of label) {
                if (single.category == keys_split[0] && single.label == keys_split[1]) {
                    return single.translation
                }
            }
        }
        return ''
    },
    /**
     * gets translations for long texts
     *
     * @param key
     * @returns string
     */
    getTextTranslation(key) {
        if (_.isUndefined(key) || _.isEmpty(key)) {
            return ''
        }

        let text = store.state.translations.text

        if(!_.isEmpty(text)) {
            console.log('text not empty')
            for (let current of text) {
                console.log('running through')
                if (current.component === key) {
                    console.log('found it!')
                    return current.text
                }
            }
        }
    },
    /**
     * gets longtexts from api, only for current page.
     *
     * @param location
     */
    fetchTexts (location) {
        store.dispatch('translations/getText', location)
    }
}

window.aka = window.aka || {}
window.aka.lang = Object.assign(window.aka.lang || {}, language)
