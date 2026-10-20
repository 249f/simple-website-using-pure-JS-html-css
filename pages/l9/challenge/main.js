let sidenav = document.getElementById("sidenav");
let render = document.getElementById("render");
let x = []
function getusers(){
    let users = []
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function(){

        // ##########################



        // ################################




    users = request.response
    
      x = users
    sidenav.innerHTML = ``
      for (user of users){
        
        sidenav.innerHTML += `
          <div>
                <h1>${user.name}</h1>
                <p>${user.email}</p>
               <button onClick = "getposts(${user.id})">get posts for user ${user.id}</button>
            </div>
        
        
        `
      }
    
    }
  
}

getusers()
function getposts(id){
    let request = new XMLHttpRequest()
    request.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    request.responseType = "json"
    request.send()
    request.onload = function(){
        let posts = request.response
        render.innerHTML = ``
        for(post of posts){
            render.innerHTML += `
             <div>
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            </div>
            
            `
        }

    }
}
