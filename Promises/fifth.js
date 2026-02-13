function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ name: "Alice", id: 1 }), 1000);
    });
}

function fetchPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Post1", "Post2"]), 1000);
    });
}

fetchUser()
    .then(user => {
        console.log("User:", user.name); // Alice
        return fetchPosts(user.id);       // returns a promise
    })
    .then(posts => {
        console.log("Posts:", posts);    // ["Post1", "Post2"]
    });
