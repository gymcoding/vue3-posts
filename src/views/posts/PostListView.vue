<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="(item, index) in items" :key="item.id" class="col-4">
				<PostItem
					:title="item.title"
					:content="item.content"
					:created-at="item.createdAt"
					@click="goPage(item.id, index)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = getPosts();
const goPage = (id, index) => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
