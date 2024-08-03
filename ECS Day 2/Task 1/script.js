
let pnames = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
           
            resolve(users);
        })
        .catch(error => {
            reject("Usernames not found");
        });
});

pnames.then((users) => {
    displayUserTabs(users);
}).catch((e) => {
    console.log(e);
});

function displayUserTabs(users) {
    let tabsContainer = document.getElementById("Tabs_Container");
    //displayUserPosts(user)
    users.map(user => {
        console.log(user);
        let tab = document.createElement("div");
        tab.id = "tab";
        tab.textContent = user.name;
        tabsContainer.appendChild(tab);
        tab.onclick = () => displayUserPosts(user.id);
    });
}

async function displayUserPosts(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        let posts = await response.json();
        displayPosts(posts);
    } catch (e) {
        console.log(e);
    }
}

function displayPosts(posts) {
    let postsContainer = document.getElementById("Posts_Container");
    postsContainer.innerHTML = ""; 
    posts.map(post => {
        let postTitle = document.createElement("div");
         postTitle.id = "pt"
        postTitle.textContent = post.title;
        postsContainer.appendChild(postTitle);
    });
}


