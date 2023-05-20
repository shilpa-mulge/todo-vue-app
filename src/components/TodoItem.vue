<template>
  <div
    class="px-1 p-2 m-2 h6 d-flex justify-content-between w-100 border rounded"
  >
    <div>{{ item.todo }}</div>
    <div>
      <input type="checkbox" :checked="item.completed" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  components: {},
};
</script>

<style></style>
