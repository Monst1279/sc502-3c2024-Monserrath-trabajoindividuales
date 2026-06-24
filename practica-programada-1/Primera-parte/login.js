console.log("Hola, soy login.js!");

const realizarReservacion = (event) => {

    event.preventDefault(); 
    console.log('Validando reservación...');

    const nameForm = document.getElementById('name');
    const emailForm = document.getElementById('email');
    const fechaForm = document.getElementById('fecha');
    const personasForm = document.getElementById('personas');
    const contactoForm = document.getElementById('contacto');
    
    const mensajeDiv = document.getElementById('mensaje');

    mensajeDiv.innerHTML = "";

    if(nameForm.value == "" || emailForm.value == "" || fechaForm.value == "" || personasForm.value == "" || contactoForm.value == "") {
        mensajeDiv.innerHTML = "Error: Todos los campos son obligatorios y no pueden estar vacíos.";
        return; 
    }

    if(personasForm.value <= 0) {
        mensajeDiv.innerHTML = "Error: El número de personas debe ser mayor a cero.";
        return;
    }

    const hoy = new Date().toISOString().split("T")[0];

    if(fechaForm.value < hoy) {
        mensajeDiv.innerHTML = "Error: La fecha de reservación no puede ser anterior a la fecha actual.";
        return;
    }

    if(!contactoForm.value.includes("@") && contactoForm.value.length < 8) {
        mensajeDiv.innerHTML = "Error: El contacto debe incluir un '@' o un número telefónico válido.";
        return;
    }


    mensajeDiv.innerHTML = `
        <div style="color: green; margin-top: 15px;">
            <h3>¡Reservación procesada con éxito!</h3>
            <p><strong>Cliente:</strong> ${nameForm.value}</p>
            <p><strong>Correo:</strong> ${emailForm.value}</p>
            <p><strong>Fecha:</strong> ${fechaForm.value}</p>
            <p><strong>Personas:</strong> ${personasForm.value}</p>
            <p><strong>Contacto:</strong> ${contactoForm.value}</p>
        </div>
    `;
}

const formulario = document.querySelector('#frm-login');

if(formulario != null) {
    formulario.addEventListener('submit', realizarReservacion);
} else {
    alert('El formulario no se encuentra');
}