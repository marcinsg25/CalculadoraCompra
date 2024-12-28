function calcular(a,b){
	let valor1 = parseFloat(document.getElementById(a).value )
	let valor2 = parseFloat(document.getElementById(b).value)
	
		let resultado = valor1*valor2
		document.getElementById('valor_1').value=''
		document.getElementById('valor_2').value=''
		document.getElementById('id-resultado').value=resultado.toFixed(2)
		


}


arrayValores=[]
let printMainTexto=''

function addsOne() { 
    
    
	let valor= document.getElementById('id-resultado').value;
	if (valor != ''){

	

		arrayValores.push(valor);
		console.log(arrayValores)

		let i = 0
		let j=0
		let printTexto ="";
		let soma =0
		
		do {
		
		j=i+1

		printTexto += "iten"+j+"  <input id="+"\""+"minCap"+i+"\""+
			" value="+"\"" +arrayValores[i]+"\""+
			" type="+"\""+"text"+"\""
			+" onfocus="+"\""+"inputColor('minCap"+i+"');"+"\""+
			" onfocusout="+"\""+"inputColorOut('minCap"+i+"');"+"\""+" size="+"\""+"6"+"\""+">"+

			"<button id="+"\""+"idCap"+i+"\""+ "class="+"\""+"bntX"+"\""+
			"style="+"\""+"margin-left: 5px"+"\""+
			"onclick="+"\""+"deleteID('idCap"+i+"');"+"\""+">"+"  "+'🚫'+"</button><br>"
	
			soma+=parseFloat(arrayValores[i])


		i++;
	

		}

		while (i < arrayValores.length)
		printMainTexto= printTexto;
		document.getElementById('id-resultado').value='';
		document.getElementById("id-lista").innerHTML = printMainTexto;
		document.getElementById("id-total").innerHTML = "Total:R$"+soma.toFixed(2);
		
		}




  }


  function deleteID(delx) { 

				
	let delIndex =  parseInt(document.getElementById(delx).value);//INDICE DO ARRAY A SER DELETADO
	arrayValores.splice(delIndex, 1);// DELETA O ELEMENTO
	console.log(arrayValores)
		
	let i = 0
	let j=0
    let printTexto ="";
	let soma =0
		  
	do { 
						
		j=i+1

		printTexto += "iten"+j+"  <input id="+"\""+"minCap"+i+"\""+
			"onchange="+"\""+"updateDrtManual('minCap"+i+"','idCap"+i+"');"+"\""+
			" value="+"\"" +arrayValores[i]+"\""+
			" type="+"\""+"text"+"\""
			+" onfocus="+"\""+"inputColor('minCap"+i+"');"+"\""+
			" onfocusout="+"\""+"inputColorOut('minCap"+i+"');"+"\""+" size="+"\""+"6"+"\""+">"+
	
			"<button id="+"\""+"idCap"+i+"\""+ "class="+"\""+"bntX"+"\""+
			"style="+"\""+"margin-left: 5px"+"\""+
			"onclick="+"\""+"deleteID('idCap"+i+"');"+"\""+">"+"  "+'🚫'+"</button><br>"
	
			soma+=parseFloat(arrayValores[i])
	
	
		i++;

	}
				  
	while (i < arrayValores.length)
  
	printMainTexto= printTexto;
	document.getElementById("id-lista").innerHTML = printMainTexto;
	document.getElementById("id-total").innerHTML = "Total:R$"+soma.toFixed(2);
	


}









//# UPDATE DURAÇÃO SEGUNDOS MANUAL
function updateDrtManual(a, b) { 

	let  captDrt = parseFloat(document.getElementById(a).value); //MINUTO CAPTURADO TAG ESLMINUTO
	let indiceDrtUp =  parseInt(document.getElementById(b).innerHTML);//INDICE DO ARRAY A SER ATUALIZADo
	arrayValores.splice(indiceDrtUp, 1, captDrt);// TROCA DE TEXTO
	console.log(arrayValores)
	
}	

function inputColor(a) {
	
	let inputMin = document.getElementById(a);
	inputMin.style.backgroundColor =  'rgb(240, 234, 135)'
	
	
}

function inputColorOut(a) {
	
	let inputMin = document.getElementById(a);
	inputMin.style.backgroundColor = 'white'
	
}