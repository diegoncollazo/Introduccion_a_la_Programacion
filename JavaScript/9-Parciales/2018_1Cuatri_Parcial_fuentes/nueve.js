function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var temperaturaPar;
	var productoMasPesado;
	var marcaProductoMasPesado;
	var bajoCero;
	var bandera;
	var contadorPromedioPeso;
	var promedioPeso;
	var pesoMaximo;
	var pesoMinimo;
	var resultado;

	temperaturaPar = 0;
	bajoCero = 0;
	contadorPromedioPeso = 0;
	promedioPeso =0;
	resultado = 0;

	while (respuesta != "no")
	{
		marca = prompt("Ingrese la marca del producto: ");
		peso = prompt("Ingrese el peso del producto: ");
		peso = parseInt(peso);
		while (peso<1 || peso>100)
		{
			peso = prompt("Re-ingrese el peso del producto: ");
			peso = parseInt(peso);
		}
		temperatura = prompt("Ingrese la temperatura del producto: ");
		temperatura = parseInt(temperatura);
		while (temperatura<-30 || temperatura>30)
		{
			temperatura = prompt("Re-ingrese el temperatura del producto: ");
			temperatura = parseInt(temperatura);
		}

		contadorPromedioPeso++;
		promedioPeso = promedioPeso + peso;

		if (temperatura % 2 == 0 && temperatura != 0)
		{
			temperaturaPar++;
		}
		if (contadorPromedioPeso == 1)
		{
			productoMasPesado = peso;
			marcaProductoMasPesado = marca;
			pesoMaximo = peso;
			pesoMinimo = peso;
		}
		if (peso > productoMasPesado)
		{
			productoMasPesado = peso;
			marcaProductoMasPesado = marca;
		}
		if (temperatura < 0)
		{
			bajoCero++;
		}
		if (peso > pesoMaximo)
		{
			pesoMaximo = peso;
		}
		if (peso < pesoMinimo)
		{
			pesoMinimo = peso;
		}		
		respuesta = prompt("Ingrese 'no' para parar la carga");
	}
	resultado = promedioPeso / contadorPromedioPeso;
	document.write("Cantidad de temperaturas pares: "+temperaturaPar+"<br>");
	document.write("Marca del producto mas pesado: "+marcaProductoMasPesado+"<br>");
	document.write("Cantidad de productos que se conservan a menos de 0 grados: "+bajoCero+"<br>");
	document.write("Promedio de peso de productos: "+resultado+"<br>");
	document.write("Peso maximo: "+pesoMaximo+"<br>");
	document.write("Peso minimo: "+pesoMinimo+"<br>");
}