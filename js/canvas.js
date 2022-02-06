
function dibujarHorca(){
  var pantalla = document.getElementById("canvas");
  var pincel = pantalla.getContext("2d");
      pincel.fillStyle= "#f7dc6f";
      pincel.fillRect(0,0,1010,600);
    
    
      pincel.fillStyle= "black";
      pincel.beginPath();
      pincel.moveTo(250,600);
      pincel.lineTo(50,600);
      pincel.lineTo(150,450);
      pincel.fill();
      pincel.fillStyle= "black";
      pincel.beginPath();
      pincel.lineWidth=20;
      pincel.moveTo(150,470);
      pincel.lineTo(150,100);
      pincel.moveTo(140,110);
      pincel.lineTo(450,110);
      pincel.moveTo(440,110);
      pincel.lineTo(440,150);
      pincel.stroke();
}
function dibujarPiernaIzquierda(){
  var pantalla = document.getElementById("canvas");
  var pincel = pantalla.getContext("2d");
    pincel.fillStyle= "black";
    pincel.beginPath();
    pincel.moveTo(330,500);
    pincel.lineTo(440,400);
    pincel.stroke();
} 
function dibujarPiernaDerecha(){
  var pantalla = document.getElementById("canvas");
  var pincel = pantalla.getContext("2d");
    pincel.fillStyle= "black";
    pincel.beginPath();
    pincel.moveTo(440,400);
    pincel.lineTo(530,500);
    pincel.stroke();
}           
function dibujarCuerpo(){
  var pantalla = document.getElementById("canvas");
  var pincel = pantalla.getContext("2d");
    pincel.fillStyle= "black";
    pincel.beginPath();
    pincel.moveTo(440,400);
    pincel.lineTo(440,250);
    pincel.stroke();
}           
function dibujarBrazoIzquierdo(){
  var pantalla = document.getElementById("canvas");
  var pincel = pantalla.getContext("2d");
    pincel.fillStyle= "black";
    pincel.beginPath();
    pincel.moveTo(440,300);
    pincel.lineTo(340,350);
    pincel.stroke();
}           
function dibujarBrazoDerecho(){
  var pantalla = document.getElementById("canvas");
  var pincel = pantalla.getContext("2d");
    pincel.fillStyle= "black";
    pincel.beginPath();
    pincel.moveTo(440,300);
    pincel.lineTo(540,350);
    pincel.stroke();
}           
function dibujarCabeza(){
  var pantalla = document.getElementById("canvas");
  var pincel = pantalla.getContext("2d");
    pincel.fillStyle= "black";
    pincel.beginPath();
    pincel.arc(440,200,50,0,2*3.14);
    pincel.stroke();
    
}           
