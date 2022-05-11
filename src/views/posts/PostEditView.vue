<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @submit.prevent="editForm">
			<div class="mb-3">
				<label for="title" class="form-label"> 제목 </label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
			</div>
			<div class="pt-4">
				<button
					type="submit"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button type="submit" class="btn btn-primary me-2">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const form = ref({
	title: null,
	content: null,
});
const fetchItem = () => {
	const item = getPostById(id);
	form.value.title = item.title;
	form.value.content = item.content;
};
fetchItem();
const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
const editForm = () => {
	const data = Object.assign({}, form.value);
	updatePost(id, data);
	goDetailPage();
};
</script>

<style lang="scss" scoped></style>
