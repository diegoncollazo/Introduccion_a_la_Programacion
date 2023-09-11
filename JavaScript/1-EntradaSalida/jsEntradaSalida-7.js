function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	alert("La suma es: "+resultado);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno-numeroDos;
	alert("La resta es: "+resultado);	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno*numeroDos;
	alert("La multiplicación es: "+resultado);	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno/numeroDos;
	alert("La división es: "+resultado);
}