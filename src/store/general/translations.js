import axios from 'axios'
import ENV from "../../../env.json"

//default state
const state = {
    translations: []
}

//getters
const getters = {
    Translations: ({state}) {
        return _.isEmpty(state.translations) ? state.translations : 'translations where not fetched'
    }
}

//actions
const actions = {
    getTranslations: ({state, commit}, language) {
    // set default language
    if (_.isEmpty([language])) {
        language = ENV.default_language
        return "hello?"
    }

    //get all translations.
    axios.get(ENV.api_url + "/translations?value=" + language)
        .then((response) => {
            commit(state.setTranslations(response))
        })
        .catch((error) => {
            console.warn(error)
        })
    }
}

//mutations
const mutations = {
    setTranslations(state, {translations}) {
        state.translations = translations
    }
}

export default {
    state,
    getters
}