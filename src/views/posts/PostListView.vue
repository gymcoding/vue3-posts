<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div class="col-4">
				<PostItem
					title="제목"
					content="내용"
					created-at="2020-01-01"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
</script>

<style lang="scss" scoped></style>
