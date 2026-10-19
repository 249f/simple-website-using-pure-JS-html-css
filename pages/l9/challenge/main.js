let users = [];
let posts = [];
let sidenav = document.getElementById("sidenav")
let render = document.getElementById("render")
let test = document.getElementById("test")
function getusers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            // console.log(request.response)
            users = request.response
            programmm()
            // console.log(request.status)
        }
        else {
            alert("Field to fetch users")
        }
    }
}

function getposts(userID) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
    request.responseType = "json"
    request.send()
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            posts = request.response
            //  console.log(request.status)
        }
        else {
            alert("feild to fetch posts")
        }
    }
}
getusers()

function programmm() {
    let holder = ``
    for (user of users) {
        holder += `
          <div>
                <h1>${user.name}</h1>
                <p>${user.email}</p>
                <button onclick= ${getposts(5)}>get posts</button>
            </div>        
        `}
    sidenav.innerHTML = holder

    // ###############################
    let pholder = ``
    for (post of posts) {
        pholder += `
         <div>
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            </div>
        
        `
    }
    render.innerHTML = pholder
}
test.onclick = getposts(1)


