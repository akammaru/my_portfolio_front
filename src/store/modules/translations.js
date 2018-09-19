import axios from 'axios'
import ENV from "../../../env.json"

const getLabels = () =>
  axios.get(ENV.api_url + "/translations?language=" + ENV.default_language, {
  headers: {
    "Accept": "application/json"
  }
})

export default {
  namespaced: true,
  state() {
    return {
      labels: {},
      test: {}
    }
  },
  actions: {
    /**
     *
     * @param commit
     * @param state
     * @param reload
     *
     * @returns {Promise}
     */
    get({commit, state}, reload = false) {
      return new Promise((resolve, reject) => {
        // If we don't have the labels yet, or we'd like to force a reload we retrieve the labels from the api.
        if (_.isEmpty(state.labels) || reload) {
          getLabels()
            .then(response => {
              commit('set', response.data)
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
    }
  }
}
