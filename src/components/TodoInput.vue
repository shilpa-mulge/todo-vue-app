<template>
  <div class="w-100 p-2">
    <input
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
      this.$emit("addTodo", this.todo);
    },
  },
  components: {},
};
</script>

<style></style>
