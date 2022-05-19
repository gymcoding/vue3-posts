<template>
	<div class="row g-3">
		<div v-for="(item, index) in items" :key="index" :class="colClass">
			<slot :item="item" :index="index"></slot>
		</div>
	</div>
</template>

<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
	},
	colClass: {
		type: String,
		default: 'col-4',
	},
});
</script>

<style lang="scss" scoped></style>
