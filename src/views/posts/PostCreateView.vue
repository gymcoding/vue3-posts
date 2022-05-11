<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<form @submit.prevent="addForm">
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
					@click="goListPage"
				>
					목록
				</button>
				<button type="submit" class="btn btn-primary me-2">저장</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { createPost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});
const goListPage = () => router.push({ name: 'PostList' });
const addForm = () => {
	const data = {
		title: form.value.title,
		content: form.value.content,
		createdAt: new Date(),
	};
	createPost(data);
	goListPage();
};
</script>

<style lang="scss" scoped></style>
