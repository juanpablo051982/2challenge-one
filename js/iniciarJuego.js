var letrasErradas=[];
var contador=0;
var teclaPulsada=0;
function iniciarJuego (){
  dibujarHorca();
    letrasErradas=[];
    contador=0;
    teclaPulsada=0;
    document.querySelector("#instrucciones").style.display = "none";
    document.querySelector("#lista").style.display = "none"; 
    document.querySelector("#iniciarJuego").style.display = "none";
    document.querySelector("#agregarPalabra").style.display = "none"; 
    document.querySelector("#agregar_palabra").style.display = "none";
    document.querySelector("#reiniciar").style.display = "block"; 
    var pantalla = document.getElementById("canvas");
    var pincel = pantalla.getContext("2d");
      pincel.font="50px verdana";
      pincel.textAling="start";
      pincel.fillText(palabraConGuiones,400,570);
      capturarLetra();  
}
function capturarLetra(){
  
  document.addEventListener("keydown",(event)=>{
    teclaPulsada=event.key;
    console.log(teclaPulsada);
    var regular= /[A-Z]/g;
    var validacion=teclaPulsada.search(regular);
      if (teclaPulsada =="Enter"||teclaPulsada=="Shift"||teclaPulsada=="Control"||teclaPulsada=="CapsLock"||teclaPulsada=="Alt"){
      validacion=-1;}
        if (validacion==-1){
          alert("solo se puede ingresar mayusculas");
        }else{
          compararLetra();
        }
        
  });

}

   
    

  



