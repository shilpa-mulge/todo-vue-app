<template>
  <!-- search -->
  <div class="d-flex align-items-center justify-content-between mt-4">
    <h3 class="text-gray-600">Your tasks:</h3>
    <div class="d-flex align-items-center h-25">
      <i v-if="!isSearch" @click="isSearch = true" class="fa fa-search"></i>

      <!-- After clicking search icon -->
      <div
        class="border border-grey-300 rounded d-flex justify-content-between align-items-center"
        v-if="isSearch"
      >
        <i class="fa fa-search"></i>

        <input
          v-model="searchInput"
          type="text"
          class="w-75 border-0 text-sm px-7 py-1"
          placeholder="search your task"
          @keypress="searchTodo"
        />

        <i @click="closeSearch()" class="fa fa-close"></i>
      </div>
      <!-- Search end -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSearch: false,
      searchInput: "",
    };
  },
  methods: {
    closeSearch() {
      this.searchInput = null;
      this.isSearch = false;
    },
    searchTodo() {
      this.$emit("searchTodo", this.searchInput);
    },
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
</style>
