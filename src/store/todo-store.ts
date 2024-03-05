import {defineStore} from "pinia";

const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")!) : []
export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todos: todos as ITodo[],
  }),
  actions: {
    addTodo(text: ITodo['text']) {
      this.todos.push({
        id: new Date().toISOString(),
        text: text,
        completed: false,
      })
      localStorage.setItem("todos", JSON.stringify(this.todos))
    },
    remove(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
      localStorage.setItem("todos", JSON.stringify(this.todos))
    },
    update(id: ITodo['id'], todo: ITodo) {
      if(!todo.text) return this.remove(id)
      const index = this.todos.findIndex((todo) => todo.id === id)
      this.todos[index].text = todo.text
      this.todos[index].completed = !todo.completed
      localStorage.setItem("todos", JSON.stringify(this.todos))
    }
  },
  getters: {
    total: (state) => {
      return state.todos.length
    },
    completed: (state) => {
      return state.todos.filter((todo) => todo.completed).length
    },
    pending: (state) => {
      return state.todos.filter((todo) => !todo.completed).length
    }
  },
})