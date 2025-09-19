document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita recargar la página

  // Puedes guardar los datos si quieres usarlos después
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;

  alert("Bienvenido a Eco Market, " + nombre + " " + apellido);

  // Ocultar login y mostrar productos
  document.getElementById("login-container").style.display = "none";
  document.getElementById("productos-container").style.display = "block";
});