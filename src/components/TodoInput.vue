<template>
  <div class="w-100 p-2">
    <input
      type="text"
      class="form-control"
      placeholder="Add todo"
      v-model="todo"
      @keydown.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.todo !== "") {
        this.$emit("addTodo", this.todo);
        this.todo = "";
      }
    },
  },
};
</script>

<style></style>
