<template>
  <li>
    <p>{{todo.todo}}</p>
    <button @click="remove(todo.id)">delete</button>
    <button>edit</button>
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['todo'],
  methods: {
    remove (id) {
      this.$store.commit('deleteTodo', id)
    }
  }
}
</script>
