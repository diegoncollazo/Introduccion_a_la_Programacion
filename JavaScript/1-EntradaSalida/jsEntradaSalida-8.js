function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;
	dividendo=document.getElementById('numeroDividendo').value;
	dividendo=parseInt(dividendo);
	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor);
	resto=dividendo%divisor;
	alert("El resto es: "+resto);
}