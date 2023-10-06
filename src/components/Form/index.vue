<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, defineEmits } from "vue";
import store from '@store/index';

const emits = defineEmits(["handleAddFormVisible"])

// Initialize the initial value for form data
const formData = ref({
  name: '',
  level: '1',
});

// Handled when submitting the form
const handleSubmitForm = () => {
  if (formData.value.name !== "") {
    const { name, level } = formData.value;
    formData.value.name = '';
    const newItem = {
      name: name,
      level: Number(level)
    }
    store.dispatch("addItem", newItem);
  }
  else {
    alert("Please enter item name");
  }
}

// Operation to delete data on the form
const handleClearForm = () => {
  formData.value.name = '';
  emits("handleAddFormVisible")
}

</script>

<template>
  <div>
    <form class="form-inline" @submit.prevent="handleSubmitForm">
      <div class="form-group marginR5 ">
        <input type="text" class="form-control" placeholder="Item Name" v-model="formData.name" />
      </div>
      <div class="form-group">
        <select class="form-control marginR5" v-model="formData.level">
          <option :value="0">Low</option>
          <option :value="1">Medium</option>
          <option :value="2">High</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary marginR5 ">Submit</button>
      <button type="button" class="btn btn-default" @click="handleClearForm">Cancel</button>
    </form>
  </div>
</template>

<style scoped></style>