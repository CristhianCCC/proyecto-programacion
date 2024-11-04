document.addEventListener('DOMContentLoaded', function() {
    navegactionFija()
})


//agregando barra de navegacion smoth
function navegactionFija() {
    const header = document.querySelector('.header-content')
    const secondarysectioncontent = document.querySelector('.secondarysectioncontent')


//window es mas global que document ya que document se encuentra dentro de window
    window.addEventListener('scroll', function() { 
        if(secondarysectioncontent.getBoundingClientRect().bottom < 1){ //si el contador de la clase es menor a 1 se agregara la clase fixed para que el nav quede estatico despues de pasar la clase
            header.classList.add('fixed')
        }else {
            header.classList.remove('fixed')
        }
    })
}


/*formulario -------------------------------------------------------------------*/

const form = document.getElementById('form');
form.addEventListener('submit', sendEmail);

const serviceId = 'service_zogo54i'; /*Llamando al servicio*/
const templateId = 'template_p93ejqe'; /*Llamando al template*/
const apikey = 'DPReyWS1KNx7Yt91m'; /*Api/llave publica*/

function sendEmail(event){
    event.preventDefault(); /*Prevenir la eliminacion o limpieza de los datos en el form*/
    emailjs.init(serviceId); /*para iniciar el servicio*/

    /*para realizar la conexion*/
    emailjs.sendForm(serviceId, templateId, form, apikey).then(result => swal("Su mensaje fue enviado con exito", "Gracias por contactarnos!, en breve nos pondremos en contacto con usted", "success"))
    if (form.empty == true){
            swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
        function(){
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        })
    }
    
}