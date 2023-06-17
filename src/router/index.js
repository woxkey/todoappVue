import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Todos from '../views/Todos.vue'
import NavBar from '../components/NavBar.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'NavBar',
    component: NavBar,
    children: [{
      path: '/todos', name: 'TodosPage', component: Todos
    }, {path: '/', name: 'HomePage', component: HomePage}]
  }]
})
