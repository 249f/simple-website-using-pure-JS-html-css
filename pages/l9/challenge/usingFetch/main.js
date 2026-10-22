let sidenav = document.getElementById("sidenav");
let render = document.getElementById("render");
function getusers() {
    let users;
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((response) => {
            users = response
            let usersHolder = ``
            for (user of users) {
                usersHolder += `
                <div onClick = "userclicked(${user.id}, this)">
                    <h1>${user.name}</h1>
                    <p>${user.email}</p>
                </div>
                `
            }
            sidenav.innerHTML = usersHolder
        })
}

function getposts(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then((response) => {
            let posts
            posts = response
            let postsHolder = ``
            for (post of posts) {
                postsHolder += `
                <div>
                <h1>${post.title}</h1>
                <p>${post.body}</p>
                </div>
                `
                render.innerHTML = postsHolder
            }
        })
}

function userclicked(id, div) {
    getposts(id)

    // remove active class from other users cards
    let notActiveDivs = document.getElementsByClassName("active")
    for (d of notActiveDivs) {
        d.classList.remove("active")
    }

    // add active class to the clicked card
    div.classList.add("active")
}

new Promise((resolve) => {
// getusers()

// using setTimeout to make sure users posts comes after users
setTimeout(() => {
    getusers()
    resolve()
},2000)

}).then(() => {
// call the first user's posts to fill the empty space on load
getposts(1)
})



