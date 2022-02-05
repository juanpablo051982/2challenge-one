
function compararLetra(){
    var arreglo=Array.from(palabraAleatoria);
    var incluye=arreglo.includes(teclaPulsada);
    if (incluye==false){
      
      var estaEscrita=letrasErradas.includes(teclaPulsada);
        if (estaEscrita==true){
         alert("Se repite la letra");
         
  
  } else {letrasErradas.push(teclaPulsada);
          contador++
  }
  canvasLetrasErradas(); 
        
  }
}
  