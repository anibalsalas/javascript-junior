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
// let n1= 23;
// let n2 = 13;
// let t1 = "23"
// let t2 = "t2"
//let resultado = n1> n3;
//document.write(n1 == n2)
//document.write(n1 != n2)
//document.write(n1 === t1) //se compara si son estrictamente iguales en este caso omite si es tipo numero o texto
//document.write(resultado)

// a1= n1 > n2;
// a2= n1 == n2;
// document.write(a1 && a2)
// //muestra True
// document.write(a1 || a2)
// //muestra false

//solo se ejecutarà el bloque si el if es verdadero
// if(10>15){
//     alert("hola");
//     document.write("pedro")
// }
//////////////////////
// nombre = "Salas"
// if (nombre == "Anival"){
//     alert("tu nombre es " + nombre)
// }
//     else if  (nombre == "Salas"){
//         alert("tu nombre es " + nombre)
//     } 
///////////////////////
// nombre = "Salas"
// if (nombre == "Anival"){
//     alert("tu nombre es Correcto")
// }
//     else if  (nombre == "Perez"){
//         alert("tu apellido es Perez")
//     }
//     else{
//         alert("tu Primer Apellido es Salas")
//     }

// nombre = "Anival"
// apellido = "Salas"
// if (nombre == "Anival" && apellido == "Salas"){
//     alert("tu nombre es Correcto")
//  }
dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");

if (dineroCofla > 0.6 && dineroCofla <1){
    alert("Cofla comprate el helado de agua")
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla comprate el helado de crema")
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla comprate el helado de heladix")
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla comprate el helado de heladovich")
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla comprate el helado de helardo")
}
else if (dineroCofla >= 2.9){
    alert("Cofla helado con confites o el pote de 1/4kg");
} else {
    alert(" Coflalo siento, no te alcanza para ningun helado")
}
///////////////
if (dineroRoberto > 0.6 && dineroRoberto <1){
    alert("Roberto comprate el helado de agua")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto comprate el helado de crema")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto comprate el helado de heladix")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto comprate el helado de heladovich")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto comprate el helado de helardo")
}
else if (dineroRoberto >= 2.9){
    alert("Roberto helado con confites o el pote de 1/4kg");
} else {
    alert(" Roberto lo siento, no te alcanza para ningun helado")
}
//////////////////
if (dineroPedro > 0.6 && dineroPedro <1){
    alert("Pedro cómprate el helado de agua")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro cómprate el helado de crema")
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro cómprate el helado de heladix")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro cómprate el helado de heladovich")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro cómprate el helado de helardo")
}
else if (dineroPedro >= 2.9){
    alert("Pedro helado con confites o el pote de 1/4kg");
} else {
    alert(" Pedro lo siento, no te alcanza para ningún helado")
}
