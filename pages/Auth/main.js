
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let submit = document.getElementById("submit")

let userEmail
let userPassword
submit.onclick = () => {
   userEmail = emailInput.value
   userPassword = passwordInput.value
   if(userEmail != "" && userPassword != ""){
     login(userEmail,userPassword)
   }
   else{
    alert("please fill all input felids")
   }
  
}
function login(email,password){
    axios.post("https://reqres.in/api/login",{
    "email" : `${email}`,
    "password" : `${password}`
})
    .then((response) => {
        console.log(response.data);
        loginSuccess()
    })
    .catch((err) => {
       
        console.log(err);
        alert(err)
    
    })
}

function loginSuccess(){
    location.href = "file:///E:/learn/simple%20website%20using%20pure%20JS%20html%20css/pages/Auth/success.html"
}
