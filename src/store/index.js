//base imports
import Vue from 'vue'
import Vuex from 'vuex'

//helpers
import '@/classes'

//store imports
import translations from './modules/translations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    translations
  }
})
