function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;
	base = prompt("Ingrese la base");
	altura = prompt("Ingrese la altura");
	superficie = base * altura / 2;
	perimetro = 3*base;
	alert("El perimetro es "+perimetro+" y la superficie es "+superficie);
}