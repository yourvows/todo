<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Checkbox} from "@/components/ui/checkbox"
import {Button} from "@/components/ui/button"
import {TrashIcon} from '@heroicons/vue/24/solid'
import {useTodoStore} from "@/store/todo-store.ts";
import {computed, ref} from "vue";
import {Input} from '@/components/ui/input'


const todosStore = useTodoStore()
const todos = computed<ITodo[]>(() => todosStore.todos)
const newTodoText = ref("");

const deleteTodo = (id: string) => {
  todosStore.remove(id)
}

const addTodo = () => {
  if (newTodoText.value.trim()) {
    todosStore.addTodo(newTodoText.value);
    newTodoText.value = "";
  }
};

const saveEdit = (todo: ITodo) => {
  console.log(todo)
  todosStore.update(todo.id, todo);
};
</script>

<template>
  <div class="my-32 w-full max-w-md mx-auto">
    <div class="flex mb-1 justify-start">
      <RouterLink to="/">
        <Button>Go Back To Stats</Button>
      </RouterLink>
    </div>
    <Card>
      <CardHeader class="p-4">
        <CardTitle>To-Do List</CardTitle>
      </CardHeader>
      <CardContent class="p-4">
        <div v-for="todo in todos" class="flex items-center space-x-4 mb-4">
          <Checkbox @click="saveEdit(todo)" :checked="todo.completed" :id="todo.id"/>
          <Input
              @change="saveEdit(todo)"
              :class="{'line-through': todo.completed}"
              class="flex-1" v-model="todo.text"
              type="text"/>
          <Button @click="deleteTodo(todo.id)" class="text-red-500" variant="outline">
            <TrashIcon class="w-4 h-4"/>
          </Button>
        </div>
        <div class="flex items-center justify-center">
          <Input class="mr-3" v-model="newTodoText"/>
          <Button @click="addTodo" variant="outline">Add</Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
