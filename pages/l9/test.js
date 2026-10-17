// gpt : get posts tittles on a h1 tag

function gptonh1 (){
    let request = new XMLHttpRequest()
request.open("GET","https://jsonplaceholder.typicode.com/posts")
request.responseType = "json"
request.send()
request.onload = function() { 
    console.log("done")
    let result = request.response
    let holder = ``
    for(res of result){
        holder+= `
        <h1>${res.title}</h1>
        `
    }
    document.body.innerHTML = holder;
 }
}

