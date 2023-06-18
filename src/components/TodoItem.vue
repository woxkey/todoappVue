<template>
  <li :class="{todoItem: isEditing}">
    <input ref="todo" :disabled="!isEditing" :value="todo.todo" class="todo" type="text">
    <img class="editIcon" v-if="!isEditing" @click="edit" src="../assets/edit.svg" alt="edit">
    <button v-else-if="isEditing" @click="save(todo.id)">
      Save
    </button>
    <button v-if="isEditing" @click="isEditing = false">Cancel</button>
    <img alt="remove" src="../assets/delete.svg" @click="remove(todo.id)">
  </li>
</template>

<script>

export default {
  name: 'todo-item',
  props: ['todo'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    remove (id) {
      this.$store.commit('deleteTodo', id)
    },
    save (id) {
      this.$store.commit('editTodo', {id, todo: this.$refs['todo'].value})
      this.isEditing = false
    },
    edit () {
      this.isEditing = !this.isEditing
    }
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
  width: 25px;
  height: 25px;
}

li {
  display: flex;
  width: 480px;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(153, 153, 153, .5);
  padding: 15px 15px;
  border-radius: 15px;
}

li:focus {
  border: 1px solid red;
}

.todo {
  outline: none;
  border: none;
  width: 100%;
}

.todo:disabled {
  background-color: transparent;
}

.editIcon {
  margin-right: 8px;
}

button {
  background-color: rgba(51, 51, 51, 0.05);
  width: 100px;
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  margin-right: 10px;
}

.todoItem {
  border: 1px solid black;
}

</style>
