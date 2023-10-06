<script setup lang="ts">
import { ref } from 'vue';
import Title from "@components/Title/index.vue";
import Search from "@components/Search/index.vue";
import Sort from "@components/Sort/index.vue";
import Form from "@components/Form/index.vue";
import ListItem from "@components/Item/ListItem.vue";

const isAddFormVisible = ref(false);

const handleToggleAddBtn = () => {
  isAddFormVisible.value = !isAddFormVisible.value;
};


</script>

<template>
  <div class="container">
    <Title />
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <Search />
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Sort />
      </div>
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" class="btn btn-info btn-block marginB10" @click="handleToggleAddBtn">Add Item</button>
      </div>
    </div>
    <div class="row marginB10">
      <div class="col-md-offset-7 col-md-5">
        <Form v-if="isAddFormVisible" @handleAddFormVisible="handleToggleAddBtn"/>
      </div>
    </div>
    <ListItem />
  </div>
</template>

<style scoped></style>
