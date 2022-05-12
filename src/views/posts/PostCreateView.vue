<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input type="text" class="form-control" id="title" />
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea class="form-control" id="content" rows="3"></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goListPage = () => router.push({ name: 'PostList' });
</script>

<style lang="scss" scoped></style>
