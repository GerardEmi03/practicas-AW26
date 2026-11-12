var reservacion = {
    rfc: '',
    cliente: '',
    ninos: 0,
    adultos: 0,
    totalHuespedes: 0,
    habitaciones: [], 
    capacidadTotalSeleccionada: 0,
    subtotal: 0,
    costoExtra: 0,
    total: 0,
    
    calcularTotal: function() {
        this.totalHuespedes = parseInt(this.ninos) + parseInt(this.adultos);
        this.subtotal = 0;
        this.capacidadTotalSeleccionada = 0;
        
        for (let i = 0; i < this.habitaciones.length; i++) {
            this.subtotal += this.habitaciones[i].precio;
            this.capacidadTotalSeleccionada += this.habitaciones[i].capacidadMax;
        }
        
        var diferencia = this.totalHuespedes - this.capacidadTotalSeleccionada;
        
        this.total = this.subtotal;
    }
};

function agregarHabitacion() {
    var valorHabitacion = document.getElementById("habitacion").value;
    var partes = valorHabitacion.split("|");
    
    var habObj = {
        nombre: partes[0],
        precio: parseFloat(partes[1]),
        capacidadMax: parseInt(partes[2])
    };
    
    reservacion.habitaciones.push(habObj);
    
    var listaH = document.getElementById("listaHabitaciones");
    var listaLi = document.createElement("li");
    listaLi.innerText = habObj.nombre + " - $" + habObj.precio + " (" + habObj.capacidadMax + " ps)";
    listaH.appendChild(listaLi);
}

function procesarEnviar() {
    reservacion.rfc = document.getElementById("rfc").value;
    reservacion.cliente = document.getElementById("nombre").value;
    reservacion.ninos = parseInt(document.getElementById("ninos").value) || 0;
    reservacion.adultos = parseInt(document.getElementById("adultos").value) || 0;
    
    if (!reservacion.rfc || !reservacion.cliente) {
        alert("Por favor, ingresa el RFC y el nombre del cliente.");
        return;
    }
    
    if (reservacion.habitaciones.length === 0) {
        alert("Debes seleccionar al menos una habitación.");
        return;
    }
    
    reservacion.calcularTotal();

    if (reservacion.totalHuespedes > reservacion.capacidadTotalSeleccionada) {
        var faltantes = reservacion.totalHuespedes - reservacion.capacidadTotalSeleccionada;
        alert("Faltan habitaciones para cubrir a todos los huéspedes. Tienes " + reservacion.totalHuespedes + " huésped(es) y tus habitaciones cubren " + reservacion.capacidadTotalSeleccionada + ".");
        return;
    }
    
    localStorage.setItem("registroReservacion", JSON.stringify(reservacion));
    window.open("ticket.html", "_Blank");
}

if (window.location.pathname.includes("ticket.html")) {
    window.onload = function() {
        var datosGuardados = localStorage.getItem("registroReservacion");
        if (datosGuardados) {
            var datosReservacion = JSON.parse(datosGuardados);
            
            document.getElementById("salidaRfc").innerText = datosReservacion.rfc;
            document.getElementById("salidaCliente").innerText = datosReservacion.cliente;
            document.getElementById("salidaHuespedes").innerText = "Adultos: " + datosReservacion.adultos + " | Niños: " + datosReservacion.ninos;
            document.getElementById("salidaSubtotal").innerText = "$" + datosReservacion.subtotal.toFixed(2);
            
            document.getElementById("salidaTotal").innerText = "$" + datosReservacion.total.toFixed(2);
            
            var contenedorLista = document.getElementById("salidaListaHabitaciones");
            contenedorLista.innerHTML = '';
            for (let i = 0; i < datosReservacion.habitaciones.length; i++) {
                var itemLi = document.createElement("li");
                itemLi.innerText = datosReservacion.habitaciones[i].nombre + " - $" + datosReservacion.habitaciones[i].precio;
                contenedorLista.appendChild(itemLi);
            }
        }
    }
}