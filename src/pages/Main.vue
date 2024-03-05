<script setup lang="ts">
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {useTodoStore} from "@/store/todo-store.ts";
import {Button} from "@/components/ui/button";

const todoStore = useTodoStore()


</script>

<template>
  <div class="my-32 space-y-3 w-fit max-w-md mx-auto">
    <Card>
      <CardHeader class="p-4">
        <CardTitle>Completed To-Dos: {{ todoStore.total }}</CardTitle>
      </CardHeader>
    </Card>
    <Card>
      <CardHeader class="p-4">
        <CardTitle>Completed To-Dos: {{ todoStore.completed }}</CardTitle>
      </CardHeader>
    </Card>
    <Card>
      <CardHeader class="p-4">
        <CardTitle>Not Completed To-Dos: {{ todoStore.pending }}</CardTitle>
      </CardHeader>
    </Card>
    <div class="flex justify-end">
      <RouterLink to="/todos">
        <Button>Go To All</Button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>