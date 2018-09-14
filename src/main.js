import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(Vuex)

//require stylesheet
require('./assets/SASS/main.sass')

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
