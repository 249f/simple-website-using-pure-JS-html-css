function login() {
    axios.post("https://reqres.in/api/register", {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    })
        .then((response) => {
            let x = response.data
            localStorage.token = x.token
            createUser()
        }).catch((err => alert(err)))
}

function createUser() {
    axios.post("https://reqres.in/api/users", {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }, {
        headers: {
            Authorization: `${localStorage.token}`
        }
    }).then((response) => {
        console.log(response);

    })
}
login()