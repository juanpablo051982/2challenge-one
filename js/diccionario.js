var palabras= ["ALURA","ORACLE","CASCADA","VENTILADOR","COCINA","CELULAR",
"LAPICERA","ESCRITORIO","MESADA","BALCON","CAMARA","TELEFONO","TERMO",
"DICCIONARIO","TELEFONO","ESCUADRA","REGLA","TIJERA","CARTUCHERA","ESTUFA",
"VARIABLE","FUNCION","OBJETO","BOTON","CODIGO","TRELLO","FIGMA","EDITOR",
"DISECAR","WEB","IMPRESORA","TELEVISOR","PORTARETRATO","CORTINA","PELOTA"];

var posicion=Math.floor(Math.random()* palabras.length);
var palabraAleatoria=palabras[posicion];
var palabraConGuiones= palabraAleatoria.replace(/./g ,"_ ");