var opA
var opB
var opC
var op
var calculadora={
 init: function() {
	// variables
	var resultado=document.getElementById('display');
	var reset=document.getElementById('on');
	var suma=document.getElementById('mas');
	var resta=document.getElementById('menos');
	var multiplicacion=document.getElementById('por');
	var division=document.getElementById('dividido');
	var igual=document.getElementById('igual');
	var signo=document.getElementById('sign');
	var uno=document.getElementById('1');
	var dos=document.getElementById('2');
	var tres=document.getElementById('3');
	var cuatro=document.getElementById('4');
	var cinco=document.getElementById('5');
	var seis=document.getElementById('6');
	var siete=document.getElementById('7');
	var ocho=document.getElementById('8');
	var nueve=document.getElementById('9');
	var cero=document.getElementById('0');
	var punto=document.getElementById('punto');


	// cambiar tamaño
	reset.onmousedown=function(e){
		document.getElementById("on").style="height:60px;";
	}
	reset.onmouseup=function(e){
		document.getElementById("on").style="height:62.91px;";
	}
	suma.onmousedown=function(e){
		document.getElementById("mas").style="height:98%;";
	}
	suma.onmouseup=function(e){
		document.getElementById("mas").style="height:100%;";
	}
	resta.onmousedown=function(e){
		document.getElementById("menos").style="height:60px;";   
	}
	resta.onmouseup=function(e){
		document.getElementById("menos").style="height:62.91px;";
	}
	multiplicacion.onmousedown=function(e){
		document.getElementById("por").style="height:60px;"; 
	}
	multiplicacion.onmouseup=function(e){
		document.getElementById("por").style="height:62.91px;";
	}
	division.onmousedown=function(e){
		document.getElementById("dividido").style="height:60px;"; 
	}
	division.onmouseup=function(e){
		document.getElementById("dividido").style="height:62.91px;";
	}
	igual.onmousedown=function(e){
		document.getElementById("igual").style="height:60px;"; 
	}
	igual.onmouseup=function(e){
		document.getElementById("igual").style="height:62.91px;";
	}
	signo.onmousedown=function(e){
		document.getElementById("sign").style="height:60px;"; 
	}
	signo.onmouseup=function(e){
		document.getElementById("sign").style="height:62.91px;";
	}
	uno.onmousedown=function(e){
		document.getElementById("1").style="height:60px;"; 
	}
	uno.onmouseup=function(e){
		document.getElementById("1").style="height:62.91px;";
	}
	dos.onmousedown=function(e){
		document.getElementById("2").style="height:60px;"; 
	}
	dos.onmouseup=function(e){
		document.getElementById("2").style="height:62.91px;";
	}
	tres.onmousedown=function(e){
		document.getElementById("3").style="height:60px;"; 
	}
	tres.onmouseup=function(e){
		document.getElementById("3").style="height:62.91px;";
	}
	cuatro.onmousedown=function(e){
		document.getElementById("4").style="height:60px;"; 
	}
	cuatro.onmouseup=function(e){
		document.getElementById("4").style="height:62.91px;";
	}
	cinco.onmousedown=function(e){
		document.getElementById("5").style="height:60px;"; 
	}
	cinco.onmouseup=function(e){
		document.getElementById("5").style="height:62.91px;";
	}
	seis.onmousedown=function(e){
		document.getElementById("6").style="height:60px;"; 
	}
	seis.onmouseup=function(e){
		document.getElementById("6").style="height:62.91px;";
	}
	siete.onmousedown=function(e){
		document.getElementById("7").style="height:60px;"; 
	}
	siete.onmouseup=function(e){
		document.getElementById("7").style="height:62.91px;";
	}
	ocho.onmousedown=function(e){
		document.getElementById("8").style="height:60px;"; 
	}
	ocho.onmouseup=function(e){
		document.getElementById("8").style="height:62.91px;";
	}
	nueve.onmousedown=function(e){
		document.getElementById("9").style="height:60px;"; 
	}
	nueve.onmouseup=function(e){
		document.getElementById("9").style="height:62.91px;";
	}
	cero.onmousedown=function(e){
		document.getElementById("0").style="height:60px;"; 
	}
	cero.onmouseup=function(e){
		document.getElementById("0").style="height:62.91px;";
	}
	punto.onmousedown=function(e){
		document.getElementById("punto").style="height:60px;"; 
	}
	punto.onmouseup=function(e){
		document.getElementById("punto").style="height:62.91px;";
	}

	//eventos
	uno.onclick=function(e){

		if (resultado.textContent=="0") {
			resultado.textContent="1";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"1";
		}
	}
	dos.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent="2";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"2";
		}
	}
	tres.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent="3";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"3";
		}
	}
	cuatro.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent="4";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"4";
		}
	}
	cinco.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent="5";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"5";
		}
	}
	seis.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent="6";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"6";
		}
	}
	siete.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent="7";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"7";
		}
	}
	ocho.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent="8";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"8";
		}
	}
	nueve.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent="9";
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"9";
		}
	}
	cero.onclick=function(e){
		if (resultado.textContent=="0") {
			resultado.textContent=resultado.textContent
		}else{
			resultado.textContent=resultado.textContent.substr(0,7)+"0";
		}
		
	}
	punto.onclick=function(e){
		
		resultado.textContent=resultado.textContent+".";
	}
	signo.onclick=function(e){
		if (resultado!="") {
			valor=resultado.textContent;
			resultado.textContent=valor*-1;
		}
		
	}
	punto.onclick=function(e){


		if (resultado.textContent.length=="") {
			resultado.textContent="0.";
		} else {
			if (!hayPunto(resultado.textContent)) {
				resultado.textContent=resultado.textContent+".";
			}
		}
		
	}


	reset.onclick=function(e){
		resetear();
	}
	suma.onclick=function(e){
		opA=resultado.textContent;
		op="+";
		limpiar();
	}
	resta.onclick=function(e){
		opA=resultado.textContent;
		op="-";
		limpiar();
	}
	multiplicacion.onclick=function(e){
		opA=resultado.textContent;
		op="*";
		limpiar();
	}
	division.onclick=function(e){
		opA=resultado.textContent;
		op="/";
		limpiar();
	}
	igual.onclick=function(e){
		
		opB=resultado.textContent;
		resolver();
		
	}

	// metodos
	function hayPunto(resultado){
		punto=false;
		for (i =0; i < resultado.length; i++) {
			if (resultado.substring(i,i+1)==".") {
				punto=true;
			}
		}
		return punto;
	}
	function limpiar(){
		resultado.textContent="";
	}
	function resetear(){
		resultado.textContent="0";
		opA=0;
		opB=0;
		op="";
	}

	function resolver(){
		opB=resultado.textContent;
		var res="0";
		switch(op){
			case "+":
			if (opA>opB) {
				res=parseFloat(opB)+parseFloat(opA);
			} else {
				res=parseFloat(opA)+parseFloat(opB);
			}
			
			break;
			case "-":
			if (opA>opB) {
				res=parseFloat(opB)-parseFloat(opA);
			} else {
				res=parseFloat(opA)-parseFloat(opB);
			}
			break;
			case "*":
			if (opA>opB) {
				res=parseFloat(opB)*parseFloat(opA);
			} else {
				res=parseFloat(opA)*parseFloat(opB);
			}
			break;
			case "/":
			if (opA>opB) {
				res=parseFloat(opB)/parseFloat(opA);
			} else {
				res=parseFloat(opA)/parseFloat(opB);
			}
			break;
		}
		// resetear();
		resultado.textContent=res.toString().substr(0, 7);
	}


}	


}
calculadora.init();