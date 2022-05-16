<template>
	<Transition>
		<div v-if="show" class="app-alert alert" :class="styleClass" role="alert">
			{{ message }}
		</div>
	</Transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
	message: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'error',
		validator: value => ['success', 'error'].includes(value),
	},
});
const styleClass = computed(() =>
	props.type === 'error' ? 'alert-danger' : 'alert-primary',
);
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}
.v-enter-to,
.v-leave-from {
	opacity: 1;
}
</style>
