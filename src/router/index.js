import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/edit/:id',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
