import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//require stylesheet
require('./assets/SASS/main.sass')

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
