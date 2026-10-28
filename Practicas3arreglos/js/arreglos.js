var temperatura = new Array(7);
var resultadoPromedio = 0; 
var maximoT = 0;
var minimoT = 0;

function capturaPromedio() {
    var sumaTemperatura = 0;
    for (let i = 0; i < temperatura.length; i++) {
        let valor = parseFloat(prompt("Captura de la temperatura " + (i + 1) + ":"));
        temperatura[i] = valor;
        sumaTemperatura += valor;
    }
    maximoT = Math.max(...temperatura); 
    minimoT = Math.min(...temperatura); 
    resultadoPromedio = sumaTemperatura / 7;
}

function mostrarTemperatura() {
    document.getElementById("impPromedioTemperatura").innerHTML = "Promedio: " + resultadoPromedio.toFixed(2);
    document.getElementById("impMaximo").innerHTML = "Maximo: " + maximoT;
    document.getElementById("impMinimo").innerHTML = "Minimo: " + minimoT;
}

function calcularEjercicio2() {
    var puesto = document.getElementById('puesto').value;
    var nivel = document.getElementById('nivel').value;
    var horas = parseFloat(document.getElementById('horas').value) || 0;
    
    var tarifaBase = 0;

    switch (puesto) {
        case "disenador":
            if (nivel === "newbe"){ tarifaBase = 120;}
            else if (nivel === "jr"){ tarifaBase = 240;}
            else if (nivel === "sr"){ tarifaBase = 210;}
            break;
        case "programador":
            if (nivel === "newbe") {tarifaBase = 240;}
            else if (nivel === "jr") {tarifaBase = 280;}
            else if (nivel === "sr") {tarifaBase = 300;}
            break;
        case "lider":
            if (nivel === "newbe") {tarifaBase = 400;}
            else if (nivel === "jr") {tarifaBase = 600;}
            else if (nivel === "sr") {tarifaBase = 3000;}
            break;
    }

    var total = tarifaBase * horas;
    document.getElementById("resultado2").innerHTML = total;
}

function generarOcho() {
    var matriz = [
        ['S', 'S', 'S', 'S', 'S'],
        ['S', ' ', ' ', ' ', 'S'],
        ['S', ' ', ' ', ' ', 'S'],
        ['S', 'S', 'S', 'S', 'S'],
        ['S', ' ', ' ', ' ', 'S'],
        ['S', ' ', ' ', ' ', 'S'],
        ['S', 'S', 'S', 'S', 'S']
    ];

    var htmlTabla = "<table border='1' cellspacing='0' cellpadding='5'>";
    for (var i = 0; i < matriz.length; i++) {
        htmlTabla += "<tr>";
        for (var j = 0; j < matriz[i].length; j++) {
            var contenido = matriz[i][j];
            var estilo = contenido === 'S' ? "background-color: #a9dfbf; text-align: center; font-weight: bold;" : "text-align: center;";
            htmlTabla += `<td style="${style = estilo}">${contenido}</td>`;
        }
        htmlTabla += "</tr>";
    }
    htmlTabla += "</table>";

    document.getElementById("contenedorMatriz").innerHTML = htmlTabla;
}



var alumnos = [];

function inicializarArreglo() {
    alumnos = [];
    for (var i = 0; i < 10; i++) {
        var nombre = prompt("Ingresa el nombre del alumno " + (i + 1) + ":");
        alumnos.push(nombre);
    }
    document.getElementById("listaAlumnos").innerHTML = alumnos.join(", ");
    document.getElementById("resultadoEjercicio4").innerHTML = "Arreglo inicializado correctamente.";
}

function aplicarSplice() {
    var inicio = parseInt(document.getElementById("indexInicio").value);
    var cantidad = parseInt(document.getElementById("cantidadEliminar").value);
    
    alumnos.splice(inicio, cantidad);
    
    document.getElementById("listaAlumnos").innerHTML = alumnos.join(", ");
    document.getElementById("resultadoEjercicio4").innerHTML = `Se eliminaron ${cantidad} elementos desde el índice ${inicio}.`;
}

function vaciarPosicion() {
    var index = parseInt(document.getElementById("indexVaciar").value);
    if (index >= 0 && index < alumnos.length) {
        alumnos[index] = "(Vacío)"; 
        document.getElementById("listaAlumnos").innerHTML = alumnos.join(", ");
        document.getElementById("resultadoEjercicio4").innerHTML = `La posición ${index} ha sido vaciada.`;
    } else {
        alert("Índice fuera de rango o arreglo vacío.");
    }
}

var agendaDatos = [
    ["Lunes", "-", "-", "-"],
    ["Martes", "-", "-", "-"],
    ["Miércoles", "-", "-", "-"],
    ["Jueves", "-", "-", "-"],
    ["Viernes", "-", "-", "-"],
    ["Sábado", "-", "-", "-"],
    ["Domingo", "-", "-", "-"]
];

function guardarEvento() {
    var indiceDia = parseInt(document.getElementById("diaAgenda").value);
    var hora = document.getElementById("horaAgenda").value;
    var evento = document.getElementById("eventoAgenda").value;
    var descripcion = document.getElementById("descAgenda").value;

    agendaDatos[indiceDia][1] = hora || "-";
    agendaDatos[indiceDia][2] = evento || "-";
    agendaDatos[indiceDia][3] = descripcion || "-";

    var tbody = document.getElementById("cuerpoAgenda");
    tbody.innerHTML = "";

    for (var i = 0; i < agendaDatos.length; i++) {
        var fila = `<tr>
            <td>${agendaDatos[i][0]}</td>
            <td>${agendaDatos[i][1]}</td>
            <td>${agendaDatos[i][2]}</td>
            <td>${agendaDatos[i][3]}</td>
        </tr>`;
        tbody.innerHTML += fila;
    }
}

