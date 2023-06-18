<template>
  <li>
    <p class="todo" contenteditable v-text="todo.todo" @keydown.enter="endEdit" @blur="onEdit($event, todo.id)"></p>
    <button @click="remove(todo.id)">delete</button>
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['todo'],
  data () {
    return {
      isEditable: false
    }
  },
  methods: {
    remove (id) {
      this.$store.commit('deleteTodo', id)
    },
    onEdit (e, id) {
      this.$store.commit('editTodo', {id, todo: e.target.innerText})
    },
    endEdit () {
      this.$el.querySelector('.todo').blur()
    }
  }
}
</script>
