login = document.getElementById('login')
login.disabled = true
function digito(){
    username = document.getElementById('username')
    password = document.getElementById('password')
    eye_open = document.getElementById('eye_open')
    eye_close = document.getElementById('eye_close')
    if (password.value){
        if (password.type == 'password'){
            eye_open.style.display = 'block'
            eye_close.style.display = 'none'
        } else if (password.type == 'text'){
            eye_open.style.display = 'none'
            eye_close.style.display = 'block'
        }
    } else{
        eye_close.style.display = 'none'
        eye_open.style.display = 'none'
    }
    if (username.value && password.value.length > 5){
        login.disabled = false
        login.classList.remove('disabled')
        login.classList.add('login_enabled')
        console.log('Cadastrado com sucesso')

    } else if (!login.classList.contains('disabled')){
        login.classList.add('disabled')
        login.classList.remove('login_enabled')
        login.disabled = true
    }
}

function eye_click(){
    password = document.getElementById('password')
    eye_open = document.getElementById('eye_open')
    eye_close = document.getElementById('eye_close')
    if (password.value){
        if (password.type == 'password'){
            password.type = 'text'
            eye_open.style.display = 'none'
            eye_close.style.display = 'block'
        } else if (password.type == 'text'){
            password.type = 'password'
            eye_close.style.display = 'none'
            eye_open.style.display = 'block'
        }

    } else{
        eye_close.style.display = 'none'
        eye_open.style.display = 'none'
    }
}