let apidiv = document.getElementById("apidiv")
let data;
let data2 = []
let tbody = document.getElementById("tbody")
let request = new XMLHttpRequest
request.open("GET","https://jsonplaceholder.typicode.com/posts")
request.responseType = "json"
request.send()
request.onload = function(){
    data = request.response
    data2 = data
    filltable()
}

function filltable(){
    let table = ``;
    for(post of data2){
        table+= `
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
        `
    }


    tbody.innerHTML = table
}




// ########## the debugger ######################
// let tester = setInterval(function(){console.log(data2)}, 1000)
// let tester2 = setTimeout(function(){console.log(data2)}, 5000)

