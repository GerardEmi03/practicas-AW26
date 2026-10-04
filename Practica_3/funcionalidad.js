function guardarAuto(event) {
  event.preventDefault();
  var modelo = document.getElementById('modelo').value;
  alert("Modelo: " + modelo);

  var color = document.getElementById('color').value;
  alert("Color: " + color);

  var foto = document.getElementById('foto').value;
  alert("Foto: " + foto);

  var activo = document.querySelector('input[name="activo"]:checked') ? document.querySelector('input[name="activo"]:checked').value : 'No seleccionado';
  alert("Activo: " + activo);
}

function guardarEscuderia(event) {
  event.preventDefault();
  var nombre = document.getElementById('nombre').value;
  alert("Nombre: " + nombre);

  var descripcion = document.getElementById('descripcion').value;
  alert("Descripción: " + descripcion);
}

function guardarCorredor(event) {
  event.preventDefault();
  var nombre = document.getElementById('nombre').value;
  alert("Nombre: " + nombre);

  var app = document.getElementById('app').value;
  alert("Apellido Paterno: " + app);

  var apm = document.getElementById('apm').value;
  alert("Apellido Materno: " + apm);

  var edad = document.getElementById('edad').value;
  alert("Edad: " + edad);

  var genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : 'No seleccionado';
  alert("Género: " + genero);

  var foto = document.getElementById('foto').value;
  alert("Foto: " + foto);
}

function guardarRelaciones(event) {
  event.preventDefault();
  var auto = document.getElementById('auto').value;
  alert("Auto: " + auto);

  var corredor = document.getElementById('corredor').value;
  alert("Corredor: " + corredor);

  var piloto1 = document.getElementById('piloto1').value;
  alert("Piloto 1: " + piloto1);

  var piloto2 = document.getElementById('piloto2').value;
  alert("Piloto 2: " + piloto2);
}