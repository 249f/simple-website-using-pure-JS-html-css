let sidenav = document.getElementById("sidenav");
let render = document.getElementById("render");
function getusers() {
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function () {
        let users = request.response
        sidenav.innerHTML = ``
        for (user of users) {
            sidenav.innerHTML += `
          <div onClick = "userclicked(${user.id}, this)">
                <h1>${user.name}</h1>
                <p>${user.email}</p>
            </div>
        `
        }
    }
}


function getposts(id) {
    let request = new XMLHttpRequest()
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    request.responseType = "json"
    request.send()
    request.onload = function () {
        let posts = request.response
        render.innerHTML = ``
        for (post of posts) {
            render.innerHTML += `
             <div>
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            </div>
            
            `
        }

    }
}

function userclicked(id,div){
getposts(id)

// remove active class from other users cards
let notActiveDivs = document.getElementsByClassName("active")
for(d of notActiveDivs) {
    d.classList.remove("active")
}

// add active class to the clicked card
 div.classList.add("active")
}

getusers()

// call the first user's posts to fill the empty space on load
getposts(1)
