<template>
  <li>
    <p class="todo" contenteditable v-text="todo.todo" @keydown.enter="endEdit" @blur="onEdit($event, todo.id)"></p>
    <img @click="remove(todo.id)" src="../assets/delete.svg" alt="remove">
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

<style scoped>
  img {
    cursor: pointer;
  }
  li {
    display: flex;
    width: 480px;
    justify-content: space-between;
    box-shadow: 0 0 10px 0 rgba(153,153,153,.5);
    padding: 0 15px;
    border-radius: 15px;
  }
  .todo {
    outline: 0px solid transparent;
    width: 100%;
  }
</style>
