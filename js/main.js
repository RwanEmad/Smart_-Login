

let form = document.getElementById('form')
let input = document.getElementsByTagName('input')


let userName = document.getElementById('Name')
let userEmail = document.getElementById('Email')
let userPass = document.getElementById('Password')

let btns = document.getElementsByClassName('btn')
let signUpBtn = document.getElementById('SignUpBtn')
let LoginBtn = document.getElementById('LoginBtn')

let signUpCaption = document.getElementById('signUpCaption')
let signinCaption = document.getElementById('signinCaption')

let toSignupBtn = document.getElementById('toSignup')
let toSigninBtn = document.getElementById('toSignin')

let logOutBtn = document.getElementById('logOutBtn')

let logo = document.getElementById('logo')

let eyeClosed = document.getElementById('eyeClosed')
let eyeOpen = document.getElementById('eyeOpen')

// let Button = document.getElementById('button')

logOutBtn.addEventListener('click', function () {
    home.classList.add('d-none')
    loginSystem.classList.remove('d-none')
    clearInput()
})

eyeClosed.addEventListener('click', function () {
    displayPass()
})
eyeOpen.addEventListener('click', function () {
    hiddPass()
})

let users = []

if (localStorage.getItem("Users") != null) {
    users = JSON.parse(localStorage.getItem("Users"))
    console.log(users)
}
else {
    localStorage.setItem("Users", JSON.stringify(users))
    console.log(users)

}

toSignupBtn.addEventListener('click', function () {
    navigateToSignup()
})

toSigninBtn.addEventListener('click', function () {
    navigateToLogin()
})

signUpBtn.addEventListener('click', function () {
    signUpBtn.style.boxShadow = "0px 0px 4px 2px rgba(23, 162, 184,0.75)"
    adduser()

})


LoginBtn.addEventListener('click', function () {
    LoginBtn.style.boxShadow = "0px 0px 4px 2px rgba(23, 162, 184,0.75)"
    login()
})
document.addEventListener('keydown', function (e) {
    // console.log(e)
    if (e.key == 'Enter') {
        LoginBtn.style.boxShadow = "0px 0px 4px 2px rgba(23, 162, 184,0.75)"
        for (let i = 0; i < userName.classList.length; i++) {

            if (signUpBtn.classList[i] == 'd-none') {
                login()
            }
            else if (LoginBtn.classList[i] == 'd-none') {
                adduser()
            }
        }


    }

})

// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener('input', function (e) {
//         validate(e.target)
//     })

// }



// userPass.addEventListener('input', function (e) {
//     console.log(e)
//     validate(userPass)
// })


function navigateToSignup() {
    userName.classList.remove('d-none')
    signUpBtn.classList.remove('d-none')
    LoginBtn.classList.add('d-none')

    signUpCaption.classList.add('d-none')
    signinCaption.classList.remove('d-none')

    form.nextElementSibling.classList.add('d-none')

}


function navigateToLogin() {
    userName.classList.add('d-none')
    signUpBtn.classList.add('d-none')
    LoginBtn.classList.remove('d-none')



    signUpCaption.classList.remove('d-none')
    signinCaption.classList.add('d-none')

    form.nextElementSibling.classList.add('d-none')
    SuccessTxt.classList.add('d-none')



    document.getElementById('SuccessTxt').classList.add('d-none')

}
function navigateToHome() {
    home.classList.remove('d-none')
    loginSystem.classList.add('d-none')
    LoginBtn.style.boxShadow = "none"

}

function displayPass() {
    if (userPass.type === 'password') {
        userPass.type = 'text';
        eyeClosed.classList.add('d-none')
        eyeOpen.classList.remove('d-none')
    }
}
function hiddPass() {
    if (userPass.type === 'text') {
        userPass.type = 'password';
        eyeClosed.classList.remove('d-none')
        eyeOpen.classList.add('d-none')
    }
}

function adduser() {
    let user = {
        name: userName.value,
        email: userEmail.value,
        pass: userPass.value
    }
    if (validate(userEmail) && validate(userName) && validate(userPass)) {

        console.log(user)
        users.push(user)
        console.log("ALL USERS" + users)
        clearInput()
        localStorage.setItem("Users", JSON.stringify(users))

        document.getElementById('SuccessTxt').classList.remove('d-none')
        form.nextElementSibling.classList.add('d-none')

        signUpBtn.style.boxShadow = "none"
        console.log(user)
    } else {
        form.nextElementSibling.classList.remove('d-none')
        console.log(user)

    }
}


function login() {
    if (validate(userEmail) && validate(userPass)) {
        for (i = 0; i < users.length; i++) {
            if (users[i].email === userEmail.value && users[i].pass === userPass.value) {
                console.log("Login Successfull")
                navigateToHome()
                document.getElementById('UserName').innerHTML = users[i].name
            }
            console.log(userEmail.value + userPass.value)
        }
    } else {
        form.nextElementSibling.classList.remove('d-none')

    }
}



function clearInput() {
    userName.value = ""
    userEmail.value = ""
    userPass.value = ""

}
function validate(hamo) {
    var validates = {
        Email: /^[a-z0-9]{3,20}@[a-z]{3,10}.com$/,
        Name: /^[a-zA-Z\s]{3,20}$/,
        Password: /^[A-Z\s]{1}[a-z0-9]{3,15}/
    }
    if (validates[hamo.id].test(hamo.value)) {
        return true
    } else {
        return false
    }
}

