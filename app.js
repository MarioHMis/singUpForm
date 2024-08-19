document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación simple
    if (name && email && password) {
      document.getElementById("message").textContent = "¡Registro exitoso!";
      document.getElementById("message").style.color = "green";
      // Aquí puedes agregar lógica para enviar los datos al servidor
    } else {
      document.getElementById("message").textContent =
        "Por favor, completa todos los campos.";
      document.getElementById("message").style.color = "red";
    }
  });
