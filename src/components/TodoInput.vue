<template>
  <div class="w-100 p-2">
    <input class="form-control" placeholder="Add todo" v-model="todo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  components: {},
};
</script>

<style></style>
