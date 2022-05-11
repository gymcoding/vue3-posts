<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>
			<small class="text-muted">
				{{ dayjs(createdAt).format('M월 D일 H시 m분 s초') }}
			</small>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const dayjs = inject('dayjs');
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
});
</script>

<style lang="scss" scoped></style>
