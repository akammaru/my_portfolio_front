//base imports
import Vue from 'vue'
import Vuex from 'vuex'

//store imports
import translations from './general/translations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    translations
  }
})
