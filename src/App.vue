<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
</script>

<template>
	<TheHeader></TheHeader>

	<TheView></TheView>

	<AppAlert />
</template>

<style>
.container {
	max-width: 940px;
}
</style>
