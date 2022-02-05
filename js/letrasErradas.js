function canvasLetrasErradas(){    
    var pantalla = document.getElementById("canvas");
    var pincel = pantalla.getContext("2d");
          pincel.font=" bold 50px verdana";
          pincel.fillStyle="blue";
          pincel.textAling="start";
          pincel.fillText(letrasErradas,600,400);
          
        switch (contador){
        case 1:
          dibujarPiernaIzquierda();
        break;
        case 2:
          dibujarPiernaDerecha();
          break;
        case 3:
          dibujarCuerpo();
          break;
        case 4:
          dibujarBrazoIzquierdo();
          break;
        case 5:
          dibujarBrazoDerecho();
          break;
        case 6:
          dibujarCabeza();
          pincel.font=" bold 30px verdana";
          pincel.fillStyle="red";
          pincel.textAling="start";
          pincel.fillText("PERDISTE EL JUEGO",600,300);
          setTimeout(function(){
            alert("LA PALABRA ERA "+ palabraAleatoria);
          },10);
          setTimeout(function(){
            location.reload();
          },100);
          break;
        }
    }