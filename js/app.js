var opA
var opB
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
		reducirTamaño();
	}
	reset.onmouseup=function(e){
		originalTamaño();
	}
	suma.onmousedown=function(e){
		reducirTamaño();
	}
	suma.onmouseup=function(e){
		originalTamaño();
	}
	resta.onmousedown=function(e){
		reducirTamaño();
	}
	resta.onmouseup=function(e){
		originalTamaño();
	}
	multiplicacion.onmousedown=function(e){
		reducirTamaño();
	}
	multiplicacion.onmouseup=function(e){
		originalTamaño();
	}
	division.onmousedown=function(e){
		reducirTamaño();
	}
	division.onmouseup=function(e){
		originalTamaño();
	}
	igual.onmousedown=function(e){
		reducirTamaño();
	}
	igual.onmouseup=function(e){
		originalTamaño();
	}
	signo.onmousedown=function(e){
		reducirTamaño();
	}
	signo.onmouseup=function(e){
		originalTamaño();
	}
	uno.onmousedown=function(e){
		reducirTamaño();
	}
	uno.onmouseup=function(e){
		originalTamaño();
	}
	dos.onmousedown=function(e){
		reducirTamaño();
	}
	dos.onmouseup=function(e){
		originalTamaño();
	}
	tres.onmousedown=function(e){
		reducirTamaño();
	}
	tres.onmouseup=function(e){
		originalTamaño();
	}

	//eventos
	uno.onclick=function(e){
		resultado.textContent=resultado.textContent+"1";
	}
	dos.onclick=function(e){
		resultado.textContent=resultado.textContent+"2";
	}
	tres.onclick=function(e){
		resultado.textContent=resultado.textContent+"3";
	}
	cuatro.onclick=function(e){
		resultado.textContent=resultado.textContent+"4";
	}
	cinco.onclick=function(e){
		resultado.textContent=resultado.textContent+"5";
	}
	seis.onclick=function(e){
		resultado.textContent=resultado.textContent+"6";
	}
	siete.onclick=function(e){
		resultado.textContent=resultado.textContent+"7";
	}
	ocho.onclick=function(e){
		resultado.textContent=resultado.textContent+"8";
	}
	nueve.onclick=function(e){
		resultado.textContent=resultado.textContent+"9";
	}
	cero.onclick=function(e){
		resultado.textContent=resultado.textContent+"0";
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
		var res=0;
		switch(op){
			case "+":
			res=parseFloat(opA)+parseFloat(opB);
			break;
			case "-":
			res=parseFloat(opA)-parseFloat(opB);
			break;
			case "*":
			res=parseFloat(opA)*parseFloat(opB);
			break;
			case "/":
			res=parseFloat(opA)/parseFloat(opB);
			break;
		}
		resetear();
		resultado.textContent=res;
	}
function reducirTamaño(){
	document.getElementById("3").style="height:60px;";
}
function originalTamaño(){
	document.getElementById("3").style="height:62.91px";
}




}	


}
calculadora.init();