function Mostrar()
{
	var alrgo;
	var ancho;
	var perimetro;
	alrgo = document.getElementById('alrgo').value;
	alrgo = parseInt(alrgo);
	ancho = document.getElementById('ancho').value;
	ancho = parseInt(ancho);
	perimetro = alrgo * ancho * 3;
	alert(perimetro);
}