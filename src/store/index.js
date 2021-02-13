import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/global/layout'
import user from './modules/global/user'
import api from './modules/global/api'
import auth from './modules/dialog/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {layout, user, auth, api,}
})
