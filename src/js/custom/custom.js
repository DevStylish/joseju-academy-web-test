// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

let inpNombre = document.getElementById('validationCustom01');
let inpApellidos = document.getElementById('validationCustom02');
let inpEmail = document.getElementById('validationCustomEmail');
let inpMensaje = document.getElementById('validationCustom03');
let inpCodPostal = document.getElementById('validationCustom05');

function comprobarNoNumeros(valor) {
  let regex = /\d/;

  return regex.test(valor);
}

inpNombre.addEventListener('blur', () => {
  if (inpNombre.value.length === 0) {
    inpNombre.classList.remove('is-valid');
    inpNombre.classList.add('is-invalid');
  } else {
    if (comprobarNoNumeros(inpNombre.value)) {
      inpNombre.classList.remove('is-valid');
      inpNombre.classList.add('is-invalid');
    } else {
      inpNombre.classList.remove('is-invalid');
      inpNombre.classList.add('is-valid');
    }
  }
});

inpApellidos.addEventListener('blur', () => {
  if (inpApellidos.value.length === 0) {
    inpApellidos.classList.remove('is-valid');
    inpApellidos.classList.add('is-invalid');
  } else {
    if (comprobarNoNumeros(inpApellidos.value)) {
      inpApellidos.classList.remove('is-valid');
      inpApellidos.classList.add('is-invalid');
    } else {
      inpApellidos.classList.remove('is-invalid');
      inpApellidos.classList.add('is-valid');
    }
  }
});

inpEmail.addEventListener('blur', () => {
  if (inpEmail.value.length === 0) {
    inpEmail.classList.remove('is-valid');
    inpEmail.classList.add('is-invalid');
  } else {
    let regex = new RegExp(/.+["@"].+[/./]/);

    if (regex.test(inpEmail.value)) {
      inpEmail.classList.remove('is-invalid');
      inpEmail.classList.add('is-valid');
    } else {
      inpEmail.classList.remove('is-valid');
      inpEmail.classList.add('is-invalid');
    }
  }
});

inpMensaje.addEventListener('blur', () => {
  if (inpMensaje.value.length < 5) {
    inpMensaje.classList.remove('is-valid');
    inpMensaje.classList.add('is-invalid');
  } else {
    let mensajeSplited = inpMensaje.value.split(" ");
    let mensajeUnido = "";

    mensajeSplited.forEach((palabras) => {
      mensajeUnido += palabras;
    });

    if (mensajeUnido.length < 5) {
      inpMensaje.classList.remove('is-valid');
      inpMensaje.classList.add('is-invalid');
    } else {
      inpMensaje.classList.remove('is-invalid');
      inpMensaje.classList.add('is-valid');
    }
  }
});

inpCodPostal.addEventListener('blur', () => {
  if (inpCodPostal.value.length === 0) {
    inpCodPostal.classList.remove('is-valid');
    inpCodPostal.classList.add('is-invalid');
  } else {
    inpCodPostal.classList.remove('is-invalid');
    inpCodPostal.classList.add('is-valid');
  }
});

let formulario = document.querySelector('.needs-validation');

function comprobarCampoCorrecto(listadoCampos) {
  let todoCorrecto = true;

  listadoCampos.forEach((campo) => {
    if (campo.classList.contains('is-invalid')) {
      todoCorrecto = false;
    }
  });

  let checkbox = document.getElementById("invalidCheck");

  if(!checkbox.checked){
    todoCorrecto = false;
  }

  return todoCorrecto;
}

function crearSpinner() {
  let spinner = document.createElement('SPAN');
  spinner.setAttribute('class', 'spinner-border spinner-border-sm');
  spinner.setAttribute('role', 'status');
  spinner.ariaHidden = true;
  return spinner;
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  let listaCampos = [inpNombre, inpApellidos, inpEmail, inpMensaje, inpCodPostal];

  if (comprobarCampoCorrecto(listaCampos)) {
    let btnEnviar = document.getElementById('btnEnviar');

    btnEnviar.disabled = true;
    btnEnviar.setAttribute('class', 'btn btn-primary');
    btnEnviar.textContent = " enviando..."
    let spinner = crearSpinner();
    btnEnviar.insertAdjacentElement('afterbegin', spinner);
    setTimeout(() => {
      // action="https://formsubmit.co/mmarper1002@iesmartinezm.es" method="POST"
      formulario.action = 'https://formsubmit.co/mmarper1002@iesmartinezm.es';
      formulario.method = "POST"
      formulario.submit();
    }, 3000);
  }

})