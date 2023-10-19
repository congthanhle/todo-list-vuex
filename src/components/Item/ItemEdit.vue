<script setup lang="ts">
import { ref } from 'vue';
import type { Item } from '@/store/todoItems/state';
import store from "@store/index"

const props = defineProps<{
	item: Item,
	index: number
}>()

const emits = defineEmits(["cancelEditedItem"])

// Assign the item's value to the form for editing
const formData = ref({
	name: props.item.name,
	level: props.item.level
});

const handleSaveClick = () => {
	const { name, level } = formData.value;
	const editedItem = {
		id: props.item.id,
		name,
		level,
	}
	store.dispatch("EDIT_ITEM", editedItem);
	handleCancelClick();
}

const handleCancelClick = () => {
	emits('cancelEditedItem');
}

</script>
<template>
	<tr>
		<td class="text-center">{{ index }}</td>
		<td>
			<input type="text" class="form-control" v-model="formData.name" />
		</td>
		<td class="text-center">
			<select class="form-control" v-model="formData.level">
				<option :value=0>Low</option>
				<option :value=1>Medium</option>
				<option :value=2>High</option>
			</select>
		</td>
		<td>
			<button type="button" class="btn btn-default btn-sm marginR5" @click="handleCancelClick">Cancel</button>
			<button type="button" class="btn btn-success btn-sm" @click="handleSaveClick">Save</button>
		</td>
	</tr>
</template>

<style scoped></style>