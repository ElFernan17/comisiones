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

    let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    let ventasStr = recuperarTexto("txtVentas");
    let precioStr = recuperarTexto("txtPrecio");

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let ventas = recuperarFloat("txtVentas");
    let precio = recuperarFloat("txtPrecio");

    let comision = calcularComision(ventas, precio);

    let total = sueldoBase + comision

    mostrarTextoSpan("spSueldoBase", sueldoBase)

    mostrarTextoSpan("spComision", comision)

    mostrarTextoSpan("spTotal", total)
}