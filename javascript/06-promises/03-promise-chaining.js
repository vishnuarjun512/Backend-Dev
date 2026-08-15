function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Vishnu",
      });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Learning JavaScript", "Building a Node API"]);
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Great post!", "Keep learning!"]);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);

    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Promise chaining

function getUserData() {
  return new Promise((resolve, reject) => {
    const user = {
      name: "Rohit",
      age: 25,
    };
    const success = false;
    if (success) {
      resolve(user);
    } else {
      throw new Error("User aint legit!");
      reject("User not found");
    }
  });
}

function getDetails(user) {
  return new Promise((resolve, reject) => {
    resolve(console.log(user));
  });
}

getUserData()
  .then((user) => {
    getDetails(user);
  })
  .catch((error) => {
    console.log(error);
  });
