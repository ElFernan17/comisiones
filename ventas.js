const ventasBase = 5;

function calcularComision(ventas, producto) {
    let comision = 0;

    if (ventas > ventasBase) {
        let ventasExtra = ventas - ventasBase;

        comision = ventasExtra * (producto * 0.10);
    }

    return comision
}

function calcular(){

//recuperar propiedades de la caja de texto

    //let cmpSueldoBase = document.getElementById("txtSueldoBase");

    //let cmpVentas = document.getElementById("txtVentas");

    //let cmpPrecio = document.getElementById("txtPrecio");

//recuperar el valor de lacaja de texto

    //let sueldoBaseStr = cmpSueldoBase.value;
    //let ventasStr = cmpVentas.value;
    //let precioStr = cmpPrecio.value;

    let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    let ventasStr = recuperarTexto("txtVentas");
    let precioStr = recuperarTexto("txtPrecio");

//transformar a float

    //let sueldoBase = parseFloat(sueldoBaseStr);
    //let ventas = parseFloat(ventasStr);
    //let precio = parseFloat(precioStr);

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let ventas = recuperarFloat("txtVentas");
    let precio = recuperarFloat("txtPrecio");

    let comision = calcularComision(ventas, precio);

    let total = sueldoBase + comision

    mostrarTextoSpan("spSueldoBase", sueldoBase)

    mostrarTextoSpan("spComision", comision)

    mostrarTextoSpan("spTotal", total)
}