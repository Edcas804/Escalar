
function myFunction() {
    var xwidth = document.getElementById("width").value;
    var xheight = document.getElementById("height").value;
   
   	//porcentaje de conversion deseado
    var xporcentaje = document.getElementById("porcentaje").value;
	
    //nueva medida
    var xwidth2 = document.getElementById("width2").value;
    var xheight2 = document.getElementById("height2").value;
   
   //temporales  
    var porcentaje1= 0;
	var finalwidht= 0;
	var finalheigth= 0;
    
	
   
   	  if(xporcentaje > 0 && xwidth2 > 0 ){
	       document.getElementById("resultado").innerHTML = "Solo puedes ingresar un dato para realizar el proceso: Porcentaje, Width o Height."
	  }
	  else if(xwidth == 0 && xheight == 0 && xwidth2 == 0 && xheight2 == 0 && xporcentaje == 0){
	       
		   document.getElementById("resultado").innerHTML = "Ingresa los valores"
	  }
	  else if(xporcentaje > 0 && xheight2 > 0 ){
	       document.getElementById("resultado").innerHTML = "Solo puedes ingresar un dato para realizar el proceso: Porcentaje, Width o Height."
	  }
	  else if( xwidth2 > 0 ){
	        porcentaje1=(xwidth2*100)/xwidth;
			finalwidht=(xwidth*porcentaje1)/100;
		    finalheigth=(xheight*porcentaje1)/100;
			document.getElementById("resultado").innerHTML = "Width=" + finalwidht + " Height=" + finalheigth;
            document.getElementById("resultado2").innerHTML ="Razón de cambio:"+ porcentaje1 +"%";
	  }
	  else if(xheight2 > 0){
	       porcentaje1=(xheight2*100)/xheight;
			finalwidht=(xwidth*porcentaje1)/100;
		    finalheigth=(xheight*porcentaje1)/100;
			document.getElementById("resultado").innerHTML = "Width=" + finalwidht + " Height=" + finalheigth;
			document.getElementById("resultado2").innerHTML ="Razón de cambio:"+ porcentaje1 +"%";
	  }
	  
	  else if(xwidth2 == 0){
	       finalwidht=(xwidth*xporcentaje)/100;
		   finalheigth=(xheight*xporcentaje)/100;
	     
		   document.getElementById("resultado").innerHTML = "Width=" + finalwidht + " Heigth=" + finalheigth;
	  }
	  else if(xheight2 == 0){
	       finalwidht=(xwidth*xporcentaje)/100;
		   finalheigth=(xheight*xporcentaje)/100;
		   document.getElementById("resultado").innerHTML = "Width=" + finalwidht + " Height=" + finalheigth;
	     
	  }

	  else{
	       alert("Por favor verificar los datos")
	  }
 }
