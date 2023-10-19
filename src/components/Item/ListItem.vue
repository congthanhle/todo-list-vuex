<script setup lang="ts">
import { computed, onMounted } from 'vue';
import store from '@store/index';
import Item from "@components/Item/index.vue"

onMounted(() => {
  store.dispatch("FETCH_ITEMS");
})

const todoItems = computed(() => store.getters.ALL_ITEMS);

</script>

<template>
  <div class="panel panel-success">
    <div class="panel-heading">List Item</div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th :style="{ 'width': '10%' }" class="text-center">#</th>
          <th>Name</th>
          <th :style="{ 'width': '15%' }" class="text-center">Level</th>
          <th :style="{ 'width': '15%' }">Action</th>
        </tr>
      </thead>
      <tbody>
        <Item v-for="(item, index) in todoItems" :key="item.id" :index="index + 1" :item=item></Item>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>