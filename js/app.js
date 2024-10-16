document.addEventListener('DOMContentLoaded', function() {
    navegactionFija()
})


//agregando barra de navegacion smoth
function navegactionFija() {
    const header = document.querySelector('.header-content')
    const whyuscontent = document.querySelector('.whyus-content')


//window es mas global que document ya que document se encuentra dentro de window
    window.addEventListener('scroll', function(){ 
        if(whyuscontent.getBoundingClientRect().bottom < 1){ //si el contador de la clase es menor a 1 se agregara la clase fixed para que el nav quede estatico despues de pasar la clase
            header.classList.add('fixed')
        }else {
            header.classList.remove('fixed')
        }
    })
}