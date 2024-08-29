document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
    const contactEmail = document.getElementById('contactEmail').checked;
    const contactPhone = document.getElementById('contactPhone').checked;
    const fileUpload = document.getElementById('fileUpload').value;
    const message = document.getElementById('message').value;
    const comments = document.getElementById('comments').value;

    // Imprimir datos en la consola
    console.log(`Nombre: ${name}`);
    console.log(`Fecha de Nacimiento: ${dob}`);
    console.log(`Correo Electrónico: ${email}`);
    console.log(`Teléfono: ${phone}`);
    console.log(`Dirección: ${address}, ${city}, ${state}, ${zip}`);
    console.log(`Género: ${gender}`);
    console.log(`País: ${country}`);
    console.log(`Preferencias de Contacto: ${contactEmail ? 'Correo Electrónico' : ''} ${contactPhone ? 'Teléfono' : ''}`);
    console.log(`Archivo Subido: ${fileUpload}`);
    console.log(`Mensaje: ${message}`);
    console.log(`Comentarios o Sugerencias: ${comments}`);

    // Mostrar modal de confirmación
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
});
