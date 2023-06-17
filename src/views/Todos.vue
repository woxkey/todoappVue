<template>
  <div>
    <input v-model="todo" type="text">
    <button @click="add">Click</button>
    <ol>
      <todo-item v-for="todo in todos" v-bind:key="todo.item" v-bind:todo="todo"></todo-item>
    </ol>
  </div>
</template>

<script>
import {v4 as uuid} from 'uuid'
import TodoItem from '../components/TodoItem.vue'
export default {
  name: 'TodosPage',
  components: {
    TodoItem
  },
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    add () {
      this.$store.commit('addTodo', {todo: this.todo, id: uuid()})
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>

<style scoped>

</style>
