<template>
  <div
    class="px-1 p-2 m-2 h6 d-flex justify-content-between w-100 border rounded"
  >
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
  },
  components: {},
};
</script>

<style>
.through {
  text-decoration: line-through;
}
</style>
