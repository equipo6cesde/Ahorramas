//Redireccionamos a paginas
//Botones del nav
const indexImage = document.getElementById('indexImage')
const buttonToRegister = document.getElementById('buttonToRegister')
const buttonToLogin = document.getElementById('buttonToLogin')
//Botones submit del formulario
const buttonRegister = document.getElementById('buttonRegister')
const buttonLogin = document.getElementById('buttonLogin')

indexImage.addEventListener('click', () => {
    location.href = '/index.html'
})
buttonToRegister.addEventListener('click', () => {
    location.href = './src/assets/pages/register.html'
})
buttonToLogin.addEventListener('click', () => {
    location.href = './src/assets/pages/logIn.html'
})