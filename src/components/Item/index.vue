<script setup lang="ts">
import { ref } from 'vue';
import ItemEdit from '@components/Item/ItemEdit.vue';
import type { Item } from '@store/todoItems/state';
import store from '@store/index';

const props = defineProps<{
  item: Item,
  index: number
}>()

const isEditMode = ref(false);
// Handle the action of pressing the delete button
const handleDeleteClick = () => {
  store.dispatch("DELETE_ITEM", props.item.id)
}
// Turn on editing mode for the current item
const handleEditClick = () => {
  isEditMode.value = true;
}

const cancelEditItem = () => {
  isEditMode.value = false;
}
</script>

<template>
  <tr v-if="!isEditMode" class="item">
    <td class="text-center">{{ index }}</td>
    <td>
      <pre class="custom-pre">{{ item.name }}</pre>
    </td>
    <td class="text-center">
      <span v-if="item.level === 0" class="label label-default">Low</span>
      <span v-else-if="item.level === 1" class="label label-info">Medium</span>
      <span v-else-if="item.level === 2" class="label label-danger">High</span>
    </td>
    <td>
      <button type="button" class="btn btn-warning btn-sm marginR5" @click="handleEditClick">Edit</button>
      <button type="button" class="btn btn-danger btn-sm" @click="handleDeleteClick">Delete</button>
    </td>
  </tr>
  <ItemEdit :item="item" :index="index" @cancelEditedItem="cancelEditItem" v-else />
</template>

<style scoped>
.custom-pre {
  white-space: pre;
  font-family: inherit;
  background-color: white;
  border: none;
  margin: 0;
  padding: 0;
  font-size: inherit;
}

.item:hover .custom-pre {
  background-color: #f5f5f5;
}
</style>