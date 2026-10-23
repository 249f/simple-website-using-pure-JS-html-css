let title1 = document.getElementById("title1")
let title2 = document.getElementById("title2")
let title3 = document.getElementById("title3")
let title4 = document.getElementById("title4")

async function showTS() {
    
    await showt1()
    await showt2()
    await showt3()
    showt4()
}
function showt1 (){
return new Promise((resolve) => {
    setTimeout(() => {
        title1.style.visibility = "visible"
        resolve()
    }, 1000)
}) 

}
function showt2 (){
return new Promise((resolve) => {
    setTimeout(() => {
        title2.style.visibility = "visible"
        resolve()
    }, 1000)
}) 

}
function showt3 (){
return new Promise((resolve) => {
    setTimeout(() => {
        title3.style.visibility = "visible"
        resolve()
    }, 1000)
}) 

}
function showt4 (){
return new Promise((resolve) => {
    setTimeout(() => {
        title4.style.visibility = "visible"
        resolve()
    }, 1000)
}) 

}
showTS()








