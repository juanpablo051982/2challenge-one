function compararLetra(){
    var arreglo=Array.from(palabraAleatoria);
    var incluye=arreglo.includes(teclaPulsada);
    if (incluye==false){
      var estaEscrita=letrasErradas.includes(teclaPulsada);
        if (estaEscrita==true){
         alert("Se repite la letra.");
        } else {
          letrasErradas.push(teclaPulsada);
          contador++
        }
        canvasLetrasErradas(); 
        }else{
          var yaEstaEscrita=letrasAcertadas.includes(teclaPulsada);
            if(yaEstaEscrita==true){
              alert("Se repite la letra.");
              
            }else{
              letrasAcertadas.push(teclaPulsada);
              canvasLetrasAcertadas();
            }
            
        }
}
  