function canvasLetrasAcertadas(){
  var indices = [];
  
  var idx = palabraAleatoria.indexOf(teclaPulsada);
    while (idx != -1) {
      indices.push(idx);
      idx = palabraAleatoria.indexOf(teclaPulsada, idx + 1);
    }
    con=indices.length;
  
    for(var i=0;i<indices.length;i++){
      contadorA++
      var array=Array.from (palabraConGuiones);
      array.splice( indices[i]*2,1,teclaPulsada) 
      array=array.join("");
      var pantalla = document.getElementById("canvas");
      var pincel = pantalla.getContext("2d");
        pincel.font="50px verdana";
        pincel.fillStyle="black";
        pincel.textAling="start";
        pincel.fillText(array,400,570);
        console.log(contadorA);
    }if (contadorA==palabraAleatoria.length){
      pincel.font=" bold 50px verdana";
      pincel.fillStyle="green";
      pincel.textAling="start";
      pincel.fillText("GANASTE EL JUEGO",400,300);
      setTimeout(function(){
        alert("¡¡¡¡FELICITACIONES HAS GANADO EL JUEGO!!!!");
      },10); 
      setTimeout(function(){
        location.reload();
      },100);
    }
}