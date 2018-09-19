import store from '@/store'

const language = {
  /**
   *
   * @param key   always a category.key format.
   * @returns {string}
   */
  getLabel (key) {
    if(_.isUndefined(key)) {
      return ''
    }

    //split key on .
    const keys_split = Array.isArray(key) ? key : key.split('.')

    let label = store.state.translations.labels

    for (let single of label) {
      if(single.category == keys_split[0] && single.label == keys_split[1] ) {
        return single.translation
      }
    }
  },

  reloadLang () {
    store.dispatch('translations/get', true)
  }
}

window.aka = window.aka || {}
window.aka.lang = Object.assign(window.aka.lang || {}, language)
