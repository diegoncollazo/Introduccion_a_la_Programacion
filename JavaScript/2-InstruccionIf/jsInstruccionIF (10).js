function mostrar()
{
	var nota;
	nota = Math.round(Math.random()*(10-1)+1);
	if (nota >= 9 && nota <= 10)
	{
		alert("Su nota es: "+nota+". Excelente.");
	}
	else if (nota >=4 && nota < 9) 
	{		
		alert("Su nota es: "+nota+". Aprobo.");
	}
	else
	{
		alert("Su nota es: "+nota+". Vamos, la proxima se puede.");
	}
}