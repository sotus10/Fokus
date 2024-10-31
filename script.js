const html = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonLargo = document.querySelector('.app__card-button--largo')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const banner = document.querySelector('.app__image')

//El addEvenListener espera que suceda un evento, cuando este pase ejecuta una función.
//La arrow function es una manera más corta de hacer una función
botonCorto.addEventListener('click', () => {
    //Con el setAttribute podemos cambiar el valor de algun elemento a otro valor
    html.setAttribute ('data-contexto', 'descanso-corto')
    banner.setAttribute ('src', './imagenes/descanso-corto.png')
})

botonEnfoque.addEventListener('click', () => {
    html.setAttribute ('data-contexto','enfoque' )
    banner.setAttribute ('src', './imagenes/enfoque.png')
})

botonLargo.addEventListener('click', () => {
    html.setAttribute ('data-contexto', 'descanso-largo')
    banner.setAttribute ('src', './imagenes/descanso-largo.png')
})

function cambiarContexto() {
    
}