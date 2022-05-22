<template>
	<div class="text-center text-danger py-4">
		{{ message }}
	</div>
</template>

<script setup>
defineProps({
	message: String,
});
</script>
