
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let submit = document.getElementById("submit")

let userEmail
let userPassword
submit.onclick = () => {
   userEmail = emailInput.value
   userPassword = passwordInput.value
   login(userEmail,userPassword)
}
function login(email,password){
    axios.post("https://reqres.in/api/login",{
    "email" : `${email}`,
    "password" : `${password}`
})
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {alert(err)})
}
