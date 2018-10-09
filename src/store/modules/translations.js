import axios from 'axios'
import ENV from "../../../env.json"

const getTranslations = (language) =>
    axios.get(ENV.api_url + "/translations/labels?language=" + language, {
        headers: {
            "Accept": "application/json"
        }
    })

const getLanguage = () => {
    return !_.isEmpty([localStorage.getItem('language')]) ? localStorage.getItem('language') : null
}



export default {
    namespaced: true,
    state() {
        return {
            labels: {},
            text: {},
            language: getLanguage()
        }
    },
    actions: {
        /**
         *
         * @param commit
         * @param state
         * @param language
         * @param reload
         *
         * @returns {string}
         */
        get ({commit, dispatch, state}, language) {
            //commit current language to state
            let changed = dispatch ('setLanguage', language)

            return new Promise((resolve, reject) => {
                // If we don't have the labels yet, or we'd like to force a reload we retrieve the labels from the api.
                if (changed || _.isEmpty(state.labels)) {
                    getTranslations(language)
                        .then(response => {
                            commit('set', response.data)
                            resolve()
                        }, error => reject(error))
                } else {
                    resolve()
                }
            })
        },

        /**
         * store current language setting
         *
         * @param state
         * @param language
         * @returns boolean
         */
        setLanguage ({commit, state}, language = ENV.default_language) {
            let changed = false

            if(_.isEmpty(state.language || state.language !== language)) {
                commit('setLanguage', language)
                changed = true
            }

            return changed
        },

        /**
         *
         * @param commit
         * @param dispatch
         * @param state
         * @param key
         * @return {string}
         */
        getText ({commit, dispatch, state}, key) {

            return new Promise((resolve, reject) => {
                // make sure there is a language set.
                dispatch('setLanguage')

                axios.get(ENV.api_url + "/translations/texts?language=" + state.language + "&key=" + key)
                    .then(response => {
                        commit('setText', response.data)
                        resolve()
                    }, error => reject(error))
            })
        }
    },
    mutations: {
        set(state, labels) {
            state.labels = labels
        },
        setLanguage(state, value) {
            state.language = value
            localStorage.setItem('language', value)
        },
        setText(state, value) {
            state.text = value
        }
    }
}
