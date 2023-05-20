<template>
  <div
    class="px-1 p-2 m-2 h6 d-flex justify-content-between w-100 border rounded"
  >
    <div class="d-flex align-items-center">
      <div class="text-success curser">
        <i class="fa fa-edit"></i>
      </div>
      <div class="text-danger curser" @click="deleteTodo">
        <i class="fa fa-trash"></i>
      </div>
    </div>
    <div :class="{ through: item.completed }">{{ item.todo }}</div>
    <div>
      <input type="checkbox" :checked="item.completed" @click="check" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    check() {
      this.$emit("checkItem", this.item.id);
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.item.id);
    },
  },
  components: {},
};
</script>

<style>
.through {
  text-decoration: line-through;
}
.curser {
  cursor: pointer;
}
</style>
