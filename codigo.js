// JAVASCRIPT
// tipos de variables:
// var, cons, let

// Var; variable que pude cambiar
// const; variable que se asigna y ya no cambia
// const se inicializa y se declara en una linea
// ejemplo: const numero = 2;

// SCOPE:
// let numero, numero2, numero3
// numero=2;
// numero=9;
// numero=4

// alert(numero);
// alert(numero2);
// alert(numero3);

// otra forma CREAR MULTIPLES VARIABLES SIPARANDOLAS CON COMA:
// let numero1 =23; 
// numero2=29;

// ---------
// let numero = null; // variable vacia
// ---------

// PROMPT:
// let nombre = prompt("Escribe tu nombre");
// alert("Hola tu nombres es " + nombre)
// ----------------

// OPERADORES EN JAVASCRIPT
// //OPERADORES DE ASIGNACION
// let numero= 10;
// numero += 5
// document.write(numero)

// let numerox= 10;
// numerox -= 5
// document.write(numerox)

// let numeroz= 10;
// numeroz *= 5
// document.write(numeroz)

// //OPERADORES ARITMETICOS
// numero1 = 10;
// numero2 = 5;
// numero1--;
// resultado = numero1;
// alert(resultado)

//OPERADORES ARITMETICOS
// numero1 = 10;
// numero2 = 5;
// numero1++;
// resultado = numero1;
// alert(resultado)

//CONCATENACION
// saludo = "hola Anival";
// pregunta = "¿Como estas";
// resultado = saludo + pregunta
// document.write(resultado)
// n1=5;
// n2= 8;
// resultado = ""+n1 + n2
// document.write(resultado)

//CONCANT:
// n1="5";
// n2= "8";
// resultado = n1.concat(n2)
// document.write(resultado)

// //BACKTIKCS Y LA VARIABLE ENTRE ${}
// let f1
// f1= "Anival Salas"
// //frase = "soy " + f1 + "y estoy programando";
// frase = `soy ${f1} y estoy programando`
// frase = "Mi nombre es 'Anival' y soy crack";
// document.write(frase)

//OPERADORES LOGICOS
let n1= 23;
let n2 = 13;
let t1 = "23"
let t2 = "t2"
//let resultado = n1> n3;
//document.write(n1 == n2)
//document.write(n1 != n2)
//document.write(n1 === t1) //se compara si son estrictamente iguales en este caso omite si es tipo numero o texto
//document.write(resultado)

a1= n1 > n2;
a2= n1 == n2;
document.write(a1 && a2)
//muestra True
document.write(a1 || a2)
