//Se desarrolla la instrucción para crear objeto de Agrupaciones, las cuales contiene nombre de la agrupación, nombre del candidato a elecciones y los votos obtenidos.
class Agrupaciones {
    constructor (nombre, candidato, votos){
        this.nombre = nombre;
        this.candidato = candidato;
        this.votos = votos;
    }
}

//Se crean las variables que va a contener cada uno de los objetos con valores de propiedades definidas con un valor estandar.
const lista1 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista2 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista3 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista4 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista5 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista6 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista7 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista8 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista9 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista10 = new Agrupaciones ("sin definir", "sin definir", 0);

//Se toma los datos de los inputs creados.

lista1.nombre = document.getElementById("inputListaA").value;
lista1.candidato = document.getElementById("segudoInputListaA").value;
lista1.votos = document.getElementById("tercerInputListaA").value;

lista2.nombre = document.getElementById("inputListaB");
lista2.candidato = document.getElementById("segudoInputListaB");
lista2.votos = document.getElementById("tercerInputListaB").value;

lista3.nombre = document.getElementById("inputListaC");
lista3.candidato = document.getElementById("segudoInputListaC");
lista3.votos = document.getElementById("tercerInputListaC").value;

lista4.nombre = document.getElementById("inputListaD");
lista4.candidato = document.getElementById("segudoInputListaD");
lista4.votos = document.getElementById("tercerInputListaD").value;

lista5.nombre = document.getElementById("inputListaE");
lista5.candidato = document.getElementById("segudoInputListaE");
lista5.votos = document.getElementById("tercerInputListaE").value;

lista6.nombre = document.getElementById("inputListaF");
lista6.candidato = document.getElementById("segudoInputListaF");
lista6.votos = document.getElementById("tercerInputListaF").value;

lista7.nombre = document.getElementById("inputListaG");
lista7.candidato = document.getElementById("segudoInputListaG");
lista7.votos = document.getElementById("tercerInputListaG").value;

lista8.nombre = document.getElementById("inputListaH");
lista8.candidato = document.getElementById("segudoInputListaH");
lista8.votos = document.getElementById("tercerInputListaH").value;

lista9.nombre = document.getElementById("inputListaI");
lista9.candidato = document.getElementById("segudoInputListaI");
lista9.votos = document.getElementById("tercerInputListaI").value;

lista10.nombre = document.getElementById("inputListaJ");
lista10.candidato = document.getElementById("segudoInputListaJ");
lista10.votos = document.getElementById("tercerInputListaJ").value;

//Se crea un Array con los objetos creados anteriormente.
const arrayListas = [lista1, lista2, lista3, lista4, lista5, lista6, lista7, lista8, lista9, lista10];

//A través del método splice, se quitan del array los objetos que no fueron creados.
arrayListas.splice(listas);

//Console log para chequear que el array sea correcto.
console.log(arrayListas);


//Se le pregunta al usuario cuantos votos fueron en blanco
let votosBlancos = document.getElementById("votosBlancos").value;

//Se calcula la suma total de votos emitidos.
let votosTotales = lista1.votos + lista2.votos + lista3.votos + lista4.votos + lista5.votos + votosBlancos;

//A través de console.log se emite mensajes que anunca la cantidad de votos para cada lista, los votos blancos y el total de votos.
console.log("Se contabilizaron un total de " + lista1.votos + " votos para " + lista1.candidato + " (" + lista1.nombre + ").");
console.log("Se contabilizaron un total de " + lista2.votos + " votos para " + lista2.candidato + " (" + lista2.nombre + ").");
console.log("Se contabilizaron un total de " + lista3.votos + " votos para " + lista3.candidato + " (" + lista3.nombre + ").");
console.log("Se contabilizaron un total de " + lista4.votos + " votos para " + lista4.candidato + " (" + lista4.nombre + ").");
console.log("Se contabilizaron un total de " + lista5.votos + " votos para " + lista5.candidato + " (" + lista5.nombre + ").");
console.log("Se contabilizaron un total de " + votosBlancos + " votos en blanco.");
console.log("Se contabilizaron un total de " + votosTotales + " votos totales.");

//Busca cual es la lista que sacó mayores votos.
let votosMayor = Math.max(lista1.votos, lista2.votos, lista3.votos, lista4.votos, lista5.votos);

//Localiza la lista ganadora dentro del arrayListas, y la almacena en la variable listaGanadora.
let listaGanadora = arrayListas.find (function (arrayListas){
    return arrayListas.votos == votosMayor;
});

console.log(listaGanadora.candidato + " de la agrupación " + listaGanadora.nombre + " ganó las elecciones con " + listaGanadora.votos + " votos.");

//Se calcula el porcentaje que obtiene la mayoría.

let porcentajeMayoria = parseFloat((votosMayor*100)/votosTotales).toFixed(3);

//Se calcula el porcentaje que obtiene la minoría.

let votosMinoria = (votosTotales-votosMayor)-votosBlancos;
console.log("Los votos totales de la minoría son: " + votosMinoria);

let porcentajeMinoria = parseFloat((votosMinoria*100)/votosTotales).toFixed(3);

console.log("La mayoría obtuvo un " + porcentajeMayoria + " porciento.");
console.log("La minoría obtuvo un " + porcentajeMinoria + " porciento.");

//Se calculan los porcentajes para cada una de las listas.
let porcentajeLista1 = parseFloat((lista1.votos*100)/votosTotales).toFixed(3);
let porcentajeLista2 = parseFloat((lista2.votos*100)/votosTotales).toFixed(3);
let porcentajeLista3 = parseFloat((lista3.votos*100)/votosTotales).toFixed(3);
let porcentajeLista4 = parseFloat((lista4.votos*100)/votosTotales).toFixed(3);
let porcentajeLista5 = parseFloat((lista5.votos*100)/votosTotales).toFixed(3);

console.log(lista1.candidato + " (" + lista1.nombre + ") obtuvo el " + porcentajeLista1 + "% de los votos.");
console.log(lista2.candidato + " (" + lista2.nombre + ") obtuvo el " + porcentajeLista2 + "% de los votos.");
console.log(lista3.candidato + " (" + lista3.nombre + ") obtuvo el " + porcentajeLista3 + "% de los votos.");
console.log(lista4.candidato + " (" + lista4.nombre + ") obtuvo el " + porcentajeLista4 + "% de los votos.");
console.log(lista5.candidato + " (" + lista5.nombre + ") obtuvo el " + porcentajeLista5 + "% de los votos.");

//Se calculan los cargos en Asamblea de Representantes y Comisión Directiva que ocupa la mayoría.

let miembrosMayoriaAR = 0;
let miembrosMayoriaCD = 0; 

if (porcentajeMayoria < 50) {
    miembrosMayoriaAR = 60;
    miembrosMayoriaCD = 15;
} else {
    miembrosMayoriaAR = parseFloat((((porcentajeMayoria-50)/100)*60)+60).toFixed(3);
    miembrosMayoriaCD = parseFloat((((porcentajeMayoria-50)/100)*15)+15).toFixed(3);
}

//La mayoría nunca puede tener mas de 75 asambleístas, cualquiera sea el caso.
if (miembrosMayoriaAR > 75){
    miembrosMayoriaAR = 90-15
}



console.log("La mayoría obtuvo " + miembrosMayoriaAR + " asambleístas.");
console.log("La mayoría obtuvo " + miembrosMayoriaCD + " cargos en Comisión Directiva.");

// //Definición de los miembros por la minoría.

// //Primero se definen cuantos miembros tiene la minoría.

let miembrosMinoriaAR = parseFloat(90 - miembrosMayoriaAR).toFixed(3);
let miembrosMinoriaCD = parseFloat(20 - miembrosMayoriaCD).toFixed(3);

console.log("La minoría obtiene " + miembrosMinoriaAR + " asambleístas.");
console.log("La minoría obtiene " + miembrosMinoriaCD + " cargos en Comisión Directiva");

// //Segundo: se define el cociente para la distribución de los cargos entre la minoría.
let cocienteMinoriaAR
let cocienteMinoriaCD

if (porcentajeMinoria > 50) {
    cocienteMinoriaAR = votosMinoria/miembrosMinoriaAR;
    cocienteMinoriaCD = votosMinoria/miembrosMinoriaCD;
} else {
    cocienteMinoriaAR = (votosMayor+votosMinoria)/miembrosMinoriaAR;
    cocienteMinoriaCD = (votosMayor+votosMinoria)/miembrosMinoriaCD;
}

console.log("El cociente para calcular la distribución de cargos de la minoria para la Asamblea es: " + cocienteMinoriaAR);

console.log("El cociente para calcular la distribución de cargos de la minoría para la Comisión Directiva es: " + cocienteMinoriaCD);

// //Tercero: Se calculan los cargos para cada agrupación minoritaria a partir de la relación entre votos obtenidos y el cociente.

// //ASAMBLEA DE REPRESENTANTES

//Se ordena el array en base a la cantidad de votos obtenidos por las listas.
arrayListas.sort((x, y) => y.votos - x.votos);
console.log(arrayListas);

//Se hace un switch para seleccionar cuantas listas se le calcula los asambleístas

let miembrosLista2AR
let miembrosLista3AR
let miembrosLista4AR
let miembrosLista5AR

switch(listas){
    case 2:
        miembrosLista2AR = parseFloat(arrayListas[1].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[1].nombre + " obtiene " + miembrosLista2AR + " asambleístas.");
    break;

    case 3:
        miembrosLista2AR = parseFloat(arrayListas[1].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[1].nombre + " obtiene " + miembrosLista2AR + " asambleístas.");

        miembrosLista3AR = parseFloat(arrayListas[2].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[2].nombre + " obtiene " + miembrosLista3AR + " asambleístas.");
    break;

    case 4:
        miembrosLista2AR = parseFloat(arrayListas[1].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[1].nombre + " obtiene " + miembrosLista2AR + " asambleístas.");

        miembrosLista3AR = parseFloat(arrayListas[2].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[2].nombre + " obtiene " + miembrosLista3AR + " asambleístas.");

        miembrosLista4AR = parseFloat(arrayListas[3].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[3].nombre + " obtiene " + miembrosLista4AR + " asambleístas.");
    break;

    case 5:
        miembrosLista2AR = parseFloat(arrayListas[1].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[1].nombre + " obtiene " + miembrosLista2AR + " asambleístas.");

        miembrosLista3AR = parseFloat(arrayListas[2].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[2].nombre + " obtiene " + miembrosLista3AR + " asambleístas.");

        miembrosLista4AR = parseFloat(arrayListas[3].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[3].nombre + " obtiene " + miembrosLista4AR + " asambleístas.");

        miembrosLista5AR = parseFloat(arrayListas[4].votos/cocienteMinoriaAR).toFixed(3);
        console.log(arrayListas[4].nombre + " obtiene " + miembrosLista5AR + " asambleístas.");
    break;
}

// //COMISIÓN DIRECTIVA
let miembrosLista2CD
let miembrosLista3CD
let miembrosLista4CD
let miembrosLista5CD

switch(listas){
    case 2:
        miembrosLista2CD = parseFloat(arrayListas[1].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[1].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");
    break;

    case 3:
        miembrosLista2CD = parseFloat(arrayListas[1].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[1].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");

        miembrosLista3CD = parseFloat(arrayListas[2].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[2].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");
    break;

    case 4:
        miembrosLista2CD = parseFloat(arrayListas[1].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[1].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");

        miembrosLista3CD = parseFloat(arrayListas[2].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[2].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");

        miembrosLista4CD = parseFloat(arrayListas[3].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[3].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");
    break;

    case 5:
        miembrosLista2CD = parseFloat(arrayListas[1].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[1].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");

        miembrosLista3CD = parseFloat(arrayListas[2].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[2].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");

        miembrosLista4CD = parseFloat(arrayListas[3].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[3].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");

        miembrosLista5CD = parseFloat(arrayListas[4].votos/cocienteMinoriaCD).toFixed(3);
        console.log(arrayListas[4].nombre + " obtiene " + miembrosLista2CD + " miembros en Comisión Directiva.");
    break;
}

