import axios from 'axios'
import ENV from "../../../env.json"

const getTranslations = (language) =>
    axios.get(ENV.api_url + "/translations?language=" + language, {
        headers: {
            "Accept": "application/json"
        }
    })

export default {
    namespaced: true,
    state() {
        return {
            labels: {},
            current: null
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
         * @returns {Promise}
         */
        get({commit, state}, language = ENV.default_language) {
            return new Promise((resolve, reject) => {
                // If we don't have the labels yet, or we'd like to force a reload we retrieve the labels from the api.
                if (_.isEmpty(state.labels) || state.current !== language) {
                    getTranslations(language)
                        .then(response => {
                            commit('set', response.data)
                            commit('setCurrent', language)
                            resolve()
                        }, error => reject(error))
                } else {
                    resolve()
                }
            })
        },
    },
    mutations: {
        set(state, labels) {
            state.labels = labels
        },
        setCurrent(state, value) {
            state.current = value
        }
    }
}
