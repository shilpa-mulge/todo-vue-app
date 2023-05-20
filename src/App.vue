<template>
  <div class="text-center text-grey mt-4">
    <todo-input></todo-input>
    <todo-list>
      <todo-item v-for="item in items" :key="item.id" :item="item"></todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          id: 1,
          todo: "Learning vue js",
          completed: false,
        },
        {
          id: 2,
          todo: "play game",
          completed: true,
        },
      ],
    };
  },
  components: {
    TodoInput,
    TodoItem,
    TodoList,
  },
};
</script>

<style></style>
