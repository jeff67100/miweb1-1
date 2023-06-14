function showAlert(){alert("¡hola desde JavaScript!");};
document.querySelector("button.button-menu-toggle")

document.addEventListener("click", function() {
document.querySelector(".nav-links").classList.toggle("nav-links-responsive")})
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }

  function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validar los campos
    if (nombre.trim() === '') {
      alert('Por favor, ingresa tu nombre.');
      return;
    }

    if (email.trim() === '') {
      alert('Por favor, ingresa tu email.');
      return;
    }

    if (mensaje.trim() === '') {
      alert('Por favor, ingresa un mensaje.');
      return;
    }

    // Si todos los campos son válidos, puedes enviar el formulario aquí
    // Ejemplo: document.getElementById('formulario').submit();

    // Limpiar los campos después del envío exitoso (opcional)
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';

    alert('¡Formulario enviado con éxito!');
  }