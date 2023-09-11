/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
/*	
	var numeroUno;
	var numeroDos;
	numeroUno=parseInt(document.getElementById('numeroUno').value);
	numeroDos=parseInt(document.getElementById('numeroDos').value);
	resultado=numeroUno+numeroDos;
	alert("La suma es "+resultado);
	
*/
	var numeroUno;
	var numeroDos;
	var resultado;
//	numeroUno="6";
//	numeroDos=6;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	alert(resultado);
}

