const posts = [
	{ id: 1, title: '제목1', content: '내용1', createdAt: '2022-01-01' },
	{ id: 2, title: '제목2', content: '내용2', createdAt: '2022-02-02' },
	{ id: 3, title: '제목3', content: '내용3', createdAt: '2022-03-03' },
	{ id: 4, title: '제목4', content: '내용4', createdAt: '2022-04-04' },
	{ id: 5, title: '제목5', content: '내용5', createdAt: '2022-05-05' },
];
export function getPosts() {
	return posts;
}

export function createPost(data) {
	data.id = Date.now();
	posts.push(data);
}
export function getPostById(id) {
	// debugger;
	const numberId = parseInt(id);
	const post = posts.find(post => post.id === numberId);

	// prevId, nextId 구하기
	const index = posts.findIndex(post => post.id === numberId);
	let prev, next;
	try {
		prev = posts[index - 1];
		next = posts[index + 1];
	} catch (e) {}
	post.prevId = prev?.id;
	post.nextId = next?.id;
	return post;
}

export function updatePost(id, data) {
	const numberId = parseInt(id);
	const target = posts.find(post => post.id === numberId);
	target.title = data.title;
	target.content = data.content;
}

export function deletePost(id) {
	const numberId = parseInt(id);
	const targetIndex = posts.findIndex(post => post.id === numberId);
	posts.splice(targetIndex, 1);
}
