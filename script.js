const html = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonLargo = document.querySelector('.app__card-button--largo')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botones = document.querySelectorAll('.app__card-button')

//El addEvenListener espera que suceda un evento, cuando este pase ejecuta una función.
//La arrow function es una manera más corta de hacer una función
botonCorto.addEventListener('click', () => {
    //Con el setAttribute podemos cambiar el valor de algun elemento a otro valor
    cambiarContexto('descanso-corto')
    botonCorto.classList.add('active')
});

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')
    botonEnfoque.classList.add('active')
});

botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo')
    botonLargo.classList.add('active')
});

function cambiarContexto(contexto) {
    html.setAttribute ('data-contexto', contexto)
    banner.setAttribute ('src', `/imagenes/${contexto}.png`)

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>`
            break;
        
        case "descanso-corto":
            titulo.innerHTML = `¿Qué tal tomar un respiro?, <br>
                <strong class="app__title-strong"> ¡Haz una pausa corta! </strong>`
            break;

        case "descanso-largo":
            titulo.innerHTML = `Hora de volver a la superficie, <br>
                <strong class="app__title-strong"> Haz una pausa larga </strong>`
    
        default:
            break;
    }
}