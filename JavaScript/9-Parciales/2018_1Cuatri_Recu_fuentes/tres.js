function mostrar()
{
	var precio;
	var porcentaje;
	var descuentoEnDinero;
	var precioConDescuento;
	var precioConDescuentoMasIva;
	var iva;

	precio = prompt("Ingrese el precio");
	porcentaje = prompt("Ingrese el porcentaje");
	descuentoEnDinero = precio*porcentaje/100;
	precioConDescuento = precio - descuentoEnDinero;
	iva = precioConDescuento*21/100;

	precioConDescuentoMasIva = precioConDescuento+iva;
	document.getElementById('elPrecioFinal').value = precioConDescuentoMasIva;
	alert("El descuento en dinero es: "+descuentoEnDinero+" el precio con descuento es "+precioConDescuento+" el iva es "+iva);

	
}