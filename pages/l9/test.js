// ################ get request ##################
// gpt : get posts tittles on a h1 tag
function gptonh1() {
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts")
    request.responseType = "json"
    request.send()
    request.onload = function () {
        console.log("done")
        let result = request.response
        let holder = ``
        for (res of result) {
            holder += `
        <h1>${res.title}</h1>
        `
        }
        document.body.innerHTML = holder;
    }
}

// ############ post request ###########

function postreq() {
    let request = new XMLHttpRequest()
    request.open("POST", "https://jsonplaceholder.typicode.com/posts")
    request.responseType = "json"
    let x = {
        "title": "test post",
        "body": "test post request",
        "userId": 1
    }

    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(x))
    request.onload = function () {
        let r = request.response;
        console.log(r)
        // console.log(request.status)
        if (request.status >= 200) {
            console.log("OK")
        }
    }
}




// ############## update request #####################
function putreq(){
    let request = new XMLHttpRequest;
    request.open("PUT","https://jsonplaceholder.typicode.com/posts/1")
    request.responseType = "json"
    request.setRequestHeader("Content-type", "application/json")
    let x = {
        "title": "ali"
    }
    request.send(JSON.stringify(x))
    request.onload = function(){
        console.log("OK")
        console.log(request.response)
        console.log(request.status)
    }
}
putreq();