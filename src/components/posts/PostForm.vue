<template>
	<form>
		<div class="mb-3">
			<label for="title" class="form-label">제목</label>
			<!-- autofocus -->
			<!-- v-color="'yellow'" -->
			<input
				:value="title"
				v-focus
				@input="$emit('update:title', $event.target.value)"
				type="text"
				class="form-control"
				id="title"
			/>
		</div>
		<div class="mb-3">
			<label for="content" class="form-label">내용</label>
			<textarea
				:value="content"
				@input="$emit('update:content', $event.target.value)"
				class="form-control"
				id="content"
				rows="3"
			></textarea>
		</div>
		<div class="d-flex gap-2 mt-4">
			<slot name="actions"> </slot>
		</div>
	</form>
</template>

<script setup>
// const vFocus = {
// 	mounted: el => {
// 		el.focus();
// 	},
// };
defineProps({
	title: String,
	content: String,
});
defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
