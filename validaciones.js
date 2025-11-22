document.getElementById("formRegistro").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let fecha = document.getElementById("fecha").value;
    let genero = document.getElementById("genero").value;

    let area = document.querySelector("input[name='area']:checked");

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Correo electrónico inválido.");
        return;
    }

    if (edad <= 10) {
        alert("La edad debe ser mayor a 10.");
        return;
    }

    if (fecha === "") {
        alert("Debe seleccionar una fecha.");
        return;
    }

    if (genero === "") {
        alert("Seleccione un género.");
        return;
    }

    if (!area) {
        alert("Seleccione un área de interés.");
        return;
    }

    alert("Formulario enviado correctamente. ¡Gracias por inscribirte!");
});

