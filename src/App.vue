<template>
  <div class="m-3 text-center h4 p-3">TODO APP</div>
  <div class="p-3 w-75 m-2 mx-auto border bg-light">
    <todo-input @addTodo="addTodo"></todo-input>
    <todo-search @searchTodo="searchTodo"></todo-search>
    <todo-list @setStatus="setStatus">
      <todo-item
        @updateTodo="updateTodo"
        @deleteTodo="deleteTodo"
        @checkItem="checkItem"
        v-for="item in tasksList"
        :key="item.id"
        :item="item"
        :status="status"
      ></todo-item>
    </todo-list>
    <div class="mt-3 h6">
      <span>Pending Tasks: {{ incomplete }}</span>
    </div>
  </div>
</template>

<script>
import "firebase/compat/firestore";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import firebaseApp from "./main";

export default {
  name: "App",
  data() {
    return {
      items: [],
      status: null,
      searchTask: "",
    };
  },
  mounted() {
    this.db.collection("todos").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          this.items.push({
            id: change.doc.id,
            completed: change.doc.data().completed,
            todo: change.doc.data().todo,
          });
        } else if (change.type == "removed") {
          this.items = this.items.filter((item) => item.id !== change.doc.id);
        } else if (change.type === "modified") {
          this.items = this.items.map((item) => {
            if (item.id === change.doc.id) {
              return {
                ...change.doc.data(),
                id: change.doc.id,
              };
            }
            return item;
          });
        }
      });
    });
  },
  computed: {
    tasksList() {
      if (this.searchTask) {
        return this.items.filter((task) => task.todo.includes(this.searchTask));
      } else {
        return this.items;
      }
    },
    incomplete() {
      return this.items.filter((item) => item.completed == false).length;
    },
    itemsLength() {
      return this.items.length;
    },
    getId() {
      if (this.itemsLength) {
        return this.items[this.items.length - 1].id + 1;
      }
      return 1;
    },
    db() {
      return firebaseApp.firestore();
    },
  },
  methods: {
    addTodo(todo) {
      let todoItem = {
        todo,
        completed: false,
      };
      this.db.collection("todos").add(todoItem);
    },
    checkItem(id) {
      let item = this.items.find((item) => item.id === id);
      item.completed = !item.completed;
      this.updateTodo({
        id: id,
        completed: item.completed,
        todo: item.todo,
      });
    },
    deleteTodo(id) {
      this.db.collection("todos").doc(id).delete();
    },
    updateTodo(todo) {
      this.db.collection("todos").doc(todo.id).update(todo);
    },
    setStatus(val) {
      this.status = val;
    },
    searchTodo(todo) {
      this.searchTask = todo;
    },
  },
  components: {
    TodoInput,
    TodoItem,
    TodoList,
    TodoSearch,
  },
};
</script>

<style></style>
