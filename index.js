const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando..';

   const serviceID = 'default_service';
   const templateID = 'template_o3e9ovd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});

var typed= new Typed(".efecto", {
    strings: ["Soy Programador Web", "Portfolio hecho con Html-Css-JS", "Frontend Developer", "Contácteme!"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let menuVisible=false;

function mostrarMenu(){
  if(menuVisible){
    document.getElementById("nav").classList="";
    menuVisible = false;
  }else{
    document.getElementById("nav").classList="responsive";
    menuVisible = true;
  }
}

function seleccionar(){
  document.getElementById("nav").classList="";
  menuVisible=false
}