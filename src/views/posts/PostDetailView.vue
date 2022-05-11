<template>
	<div>
		<h2 class="mb-4">{{ item?.title }}</h2>
		<p class="text">{{ item?.content }}</p>
		<p class="text-muted">{{ item?.createdAt }}</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div v-if="item?.prevId" class="col-auto">
				<button class="btn btn-outline-dark" @click="goDetailPage(item.prevId)">
					이전글
				</button>
			</div>
			<div v-if="item?.nextId" class="col-auto">
				<button class="btn btn-outline-dark" @click="goDetailPage(item.nextId)">
					다음글
				</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="removePost">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { getPostById, deletePost } from '@/api/posts';
import { ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
// http://localhost:3000/posts/[object%20PointerEvent]
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const item = ref({
	title: null,
	content: null,
});
const fetchItem = targetId => {
	item.value = getPostById(targetId);
};
fetchItem(id);

// watch(
// 	() => route.params.id,
// 	value => fetchItem(value),
// );

onBeforeRouteUpdate((to, from) => {
	fetchItem(to.params.id);
});

const goListPage = () => router.push({ name: 'PostList' });
const goDetailPage = targetId =>
	router.push({ name: 'PostDetail', params: { id: targetId } });
const goEditPage = () => router.push({ name: 'PostEdit', params: { id } });
const removePost = () => {
	if (confirm('삭제 하시겠습니까?')) {
		deletePost(id);
		goListPage();
	}
};
</script>

<style lang="scss" scoped></style>
