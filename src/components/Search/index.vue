<script setup lang="ts">
import { ref } from 'vue';
import store from '@/store';
const searchQuery = ref('');

const handleSearchQueryChange = () => {
  store.dispatch("SEARCH_ITEMS", searchQuery.value);
};
const handleClearQuery = () => {
  searchQuery.value = ""
  store.dispatch("SEARCH_ITEMS", searchQuery.value);
};
</script>

<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search item name" v-model="searchQuery"
      @input="handleSearchQueryChange" />
    <span class="input-group-btn">
      <button class="btn btn-info" type="button" @click="handleClearQuery">Clear</button>
    </span>
  </div>
</template>

<style scoped></style>