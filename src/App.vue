<template>
  <div class="p-3 w-75 m-2 mx-auto border bg-light">
    <todo-input @addTodo="addTodo"></todo-input>
    <todo-list>
      <todo-item
        @checkItem="checkItem"
        v-for="item in items"
        :key="item.id"
        :item="item"
      ></todo-item>
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
  computed: {
    itemsLength() {
      return this.items.length;
    },
    getId() {
      if (this.itemsLength) {
        return this.items[this.items.length - 1].id + 1;
      }
      return 1;
    },
  },
  methods: {
    addTodo(todo) {
      this.items.push({
        id: this.getId,
        todo,
        completed: false,
      });
    },
    checkItem(id) {
      this.items = this.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    },
  },
  components: {
    TodoInput,
    TodoItem,
    TodoList,
  },
};
</script>

<style></style>
