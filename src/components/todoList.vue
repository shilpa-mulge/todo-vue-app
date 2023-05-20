<template>
  <div class="d-flex flex-column p-2 align-items-start justify-content-start">
    <slot></slot>
    <div class=".filter">
      <button @click="setStatus(null)">All</button>
      <button @click="setStatus(true)">Completed</button>
      <button @click="setStatus(false)">Pending</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setStatus(val) {
      this.$emit("setStatus", val);
    },
  },
};
</script>

<style scoped>
.filter {
  padding: 5px 0;
  margin: 5px 0 0 0;
}
button {
  margin: 0 5px;
  background-color: rgb(200, 232, 243);
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
button:hover {
  cursor: pointer;
}
button:focus {
  outline: none;
}
</style>
