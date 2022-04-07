// let nombres = ["rosita","anival", "pedro","pamela","jenny","elba"];
// console.log(nombres[2]);
// console.log(nombres[1]);
// console.log(`Los estudiantes son: ${nombres[0]} ${nombres[1]}`);

// //length = longitud, la cantidad de items que tiene mi arreglo
// console.log(nombres.length);

// nombres.push("Felipe");//push mete el nombre al arreglo
// console.table(nombres);

// for (let i = 0; i<= nombres.length; i++){
//     console.log(nombres[i]);
// }

let alumnos = ["rosita","anival", "pedro","pamela","jenny","elba"];
//algoritmo para que el usuario busque un nombre y si existe el nombre dentro de alumnos, 
//muestre su posicion o indice
let nombre = prompt("Cual es el nombre a buscar?");

for (let i = 0; i < alumnos.length; i++){
   console.log(alumnos[i]);
    if (nombre === alumnos[i]){
        console.log(`${nombre} se encuentra en la posición : ${i}`);
    break; //corta la iteración
    }
    
       
 }

 