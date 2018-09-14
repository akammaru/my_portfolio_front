import axios from 'axios'
import ENV from "../../../env.json"

//default state
const state = {
  translations: []
}

//getters
const getters = {
  getTranslations: () => {
    axios.get(ENV.api_url + "/translations")
      .then((response) => {
        this.translations = response
        return true
      })
      .catch((error) => {
        console.warn(error)
      })
    return false
  }
}

export default {
  state,
  getters
}
