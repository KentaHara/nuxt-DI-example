<template>
  <div class="todo">
    <div class="todo_wrapper">
      <div v-for="todo in todos" :key="todo.title">
        <p>{{ todo.title }} / status = {{ todo.status }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Todo } from '@model/Todo'

export default Vue.extend({
  data (): {todos: Todo[]} {
    return {
      todos: []
    }
  },
  mounted () {
    this.todos = this.$todo.getTodoAll()
  }
})
</script>

<style scoped>
.todo {
  position: relative;
  height: 100vh;
}
.todo_wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
</style>
