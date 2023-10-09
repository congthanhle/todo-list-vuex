<script setup lang="ts">
import { ref } from "vue";
import store from '@/store';

const sortOption = ref("")

const handleSortOption = (option: string) => {
	sortOption.value = option;
	store.dispatch("sortItems", sortOption.value)
};

</script>


<template>
	<div class="dropdown">
		<button class="btn btn-default dropdown-toggle marginR5 " type="button" data-toggle="dropdown" aria-haspopup="true"
			aria-expanded="true">
			Sort by <span class="caret" />
		</button>
		<ul class="dropdown-menu">
			<li><a @click="handleSortOption('Name-ASC')" role="button">Name ASC</a></li>
			<li><a @click="handleSortOption('Name-DESC')" role="button">Name DESC</a></li>
			<li role="separator" class="divider" />
			<li><a @click="handleSortOption('Level-ASC')" role="button">Level ASC</a></li>
			<li><a @click="handleSortOption('Level-DESC')" role="button">Level DESC</a></li>
		</ul>
		<span class="label label-success label-medium">{{ sortOption }}</span>
	</div>
</template>
	

<style scoped></style>