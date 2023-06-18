<template>
  <div class="container">
    <form class="container-inner">
      <input class="todo" @keydown.enter="add" placeholder= 'Enter task and add with "Enter" or "+"' v-model="todo" type="text">
      <img @click="add" src="../assets/add.svg" alt="add">
    </form>
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
      if (!this.todo) return
      this.$store.commit('addTodo', {todo: this.todo, id: uuid()})
      this.todo = ''
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
ol {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

img {
  width: 30px;
  height: 50px;
  cursor: pointer;
}

.container-inner {
  display: flex;
  width: 480px;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(153,153,153,.5);
  padding: 0 15px;
  border-radius: 15px;
}

input {
  width: 100%;
  outline: none;
  border: none;
}

ol {
  padding: 0;
}

</style>
