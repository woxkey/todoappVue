import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo (state, payload) {
      state.todos.push(payload)
    },
    deleteTodo (state, payload) {
      const i = state.todos.map(item => item.id).indexOf(payload)
      state.todos.splice(i, 1)
    }
  },
  plugins: [vuexLocal.plugin]
})
