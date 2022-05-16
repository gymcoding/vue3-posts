<template>
	<Transition name="slide">
		<div v-if="show" class="app-alert alert" :class="typeStyle" role="alert">
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
const typeStyle = computed(() =>
	props.type === 'error' ? 'alert-danger' : 'alert-primary',
);
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
