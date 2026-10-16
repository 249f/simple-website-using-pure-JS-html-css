let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let divideBtn = document.getElementById("divide-btn") 
let resultSpan = document.getElementById("result")
divideBtn.addEventListener("click", function(){
    let x = input1.value
    let y = input2.value
    try{
         let result = divide(x,y)
         resultSpan.innerHTML = result
    }
    catch(error){
        alert(error)
    }
   
    
        
}) 