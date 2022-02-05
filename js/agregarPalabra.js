var agregar= document.querySelector("#agregar_palabra");
  agregar.addEventListener("click",function(){
var input = document.getElementById("agregarPalabra").value;
var regu= /[A-Z]/g;
var validacion=input.search(regu);
  if (validacion==-1){
    alert("solo se puede ingresar mayusculas");
  }else{
    var validarPalabra=palabras.includes(input);
    if (validarPalabra==false){
    palabras.push(input);
    alert ("La palabra a sido ingresada")
    }else {
     alert("La palabra ya se encontraba en la base de datos,ingrese otra palabra si lo desea. ")
    }
  }
  console.log(palabras);
  document.getElementById("agregarPalabra").value= "";
});
