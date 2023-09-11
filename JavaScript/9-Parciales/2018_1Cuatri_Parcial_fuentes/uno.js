
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	ancho =  prompt("Ingrese ancho del rectángulo: ");
	largo =  prompt("Ingrese largo del rectángulo: ");
	ancho = parseInt(ancho);
	largo = parseInt(largo);
	perimetro = (ancho+largo)*2;
	alert("El perimetro es: "+perimetro);
}