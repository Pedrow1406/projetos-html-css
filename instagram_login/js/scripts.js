function show_password(){
    password = document.getElementById('password')
    show = document.getElementById('show')
    console.log(show.innerHTML)
    if (password.type == 'text') {
        password.type = 'password'
        show.innerHTML = 'Show'
    }else{
        password.type = 'text'
        show.innerHTML = '&nbsp&nbspHide'

    }
}
submit = document.getElementById('submit')
submit.disabled = true
function digitou(){
    username  = document.getElementById('username')
    password = document.getElementById('password')
    show = document.getElementById('show')

    existe_classe = submit.classList.contains("disable")
    if (!existe_classe){
        submit.classList.add("disable")
        submit.disabled = true
    }
    if (!password.value){
        show.style.display = 'none'
    } else{
        show.style.display = 'inline-block'
    }
    if (username.value && password.value.length > 5){
        submit.classList.remove("disable");
        submit.disabled = false
    }
}