// 获取帖子列表的过滤条件
const postListFilter = {
    fields: ["id", "title", "author", "vote", "updatedAt"],
    limit: 10,
    order: "updatedAt DESC",
    include: "authorPointer",
    includefilter: { user: { fields: ["id", "username"] } }
};

// 获取帖子详情的过滤条件
const postByIdFilter = id => ({
    fields: ["id", "title", "author", "vote", "updatedAt", "content"],
    where: { id: id },
    include: "authorPointer",
    includefilter: { user: { fields: ["id", "username"] } }
});

// 获取评论列表的过滤条件
const commentListFilter = postId => ({
    fields: ["id", "author", "updatedAt", "content"],
    where: { post: postId },
    limit: 20,
    order: "updatedAt DESC",
    include: "authorPointer",
    includefilter: { user: { fields: ["id", "username"] } }
});

const encodeFilter = (filter) => {
    return encodeURIComponent(JSON.stringify(filter));
}  

export default {
    login: `/user/login`,
    getPosts: `/post?filter=${encodeFilter(postListFilter)}`,
    modifyPost: (id) => `/post/${id}`,
    createPost: '/post',
    getPostDetail: (id) => `/post?filter=${encodeFilter(postByIdFilter(id))}`,
    getComments: (id) => `/comment?filter=${encodeFilter(commentListFilter(id))}`,
    createComments: '/comment'
};