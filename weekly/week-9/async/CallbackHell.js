function getUser(userId, callback) {
    setTimeout(() => {
        console.log('User data fetched');
        callback({ userId, name: 'John' });
    }, 1000);
}

function getPosts(user, callback) {
    setTimeout(() => {
        console.log(`Posts fetched for user ${user.name}`);
        callback(['Post 1', 'Post 2']);
    }, 1000);
}

function getComments(posts, callback) {
    setTimeout(() => {
        console.log(`Comments fetched for posts: ${posts.join(', ')}`);
        callback(['Comment 1', 'Comment 2']);
    }, 1000);
}

getUser(1, (user) => {
    getPosts(user, (posts) => {
        getComments(posts, (comments) => {
            console.log('Final result:', comments);
        });
    });
});
