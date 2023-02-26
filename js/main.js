const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <section id="preSeccion"></section><section id="seccionPrincipal"></section> <section id="posSeccion"></section><aside id="menuLateral"></aside> <footer id="piePagina"></footer>';

const encabezado = document.getElementById("encabezado");
const navegacion = document.getElementById("navBar");
const preSeccion = document.getElementById("preSeccion");
const infoPrincipal = document.getElementById("seccionPrincipal");
const posSeccion = document.getElementById("posSeccion");
const infoSecundaria = document.getElementById("menuLateral");
const pie = document.getElementById("piePagina"); 

//Primer Nodo: Título
const titulo = document.createElement("h1");
titulo.innerText = "Calculadora de cargos del Club Atlético San Lorenzo de Almagro";
titulo.id = "tituloPrincipal";
encabezado.appendChild(titulo);

//Segundo Nodo: Menú de navegación
const listaOrdenada = document.createElement("ul");
navegacion.appendChild(listaOrdenada);
listaOrdenada.className = "navBar";

const elementoListaOrdenada1 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada1);

const elementoListaOrdenada2 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada2);

const elementoListaOrdenada3 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada3);

const elementoListaOrdenada4 = document.createElement("li");
listaOrdenada.appendChild(elementoListaOrdenada4);

const linkElementoUno = document.createElement("a");
linkElementoUno.innerText="Inicio";
elementoListaOrdenada1.appendChild(linkElementoUno);
linkElementoUno.setAttribute('href', '#');

const linkElementoDos = document.createElement("a");
linkElementoDos.innerText="Quienes somos";
elementoListaOrdenada2.appendChild(linkElementoDos);
linkElementoDos.setAttribute('href', '#');

const linkElementoTres = document.createElement("a");
linkElementoTres.innerText="Otros proyectos";
elementoListaOrdenada3.appendChild(linkElementoTres);
linkElementoTres.setAttribute('href', '#');

const linkElementoCuatro = document.createElement("a");
linkElementoCuatro.innerText="Contacto";
elementoListaOrdenada4.appendChild(linkElementoCuatro);
linkElementoCuatro.setAttribute('href', '#');

//Sexto Nodo: ¿Cuántas agrupaciones son?
const etiquetaPreSeccion = document.createElement("label");
etiquetaPreSeccion.innerText="¿Cuántas listas o agrupaciones participan de la elección?";
preSeccion.appendChild(etiquetaPreSeccion);

const inputPreSeccion = document.createElement("select");
inputPreSeccion.className = "cuadroSeleccion";
preSeccion.appendChild(inputPreSeccion);

const opcionSelect1 = document.createElement("option");
opcionSelect1.innerText = "Seleccione un número";
inputPreSeccion.appendChild(opcionSelect1);

const opcionSelect2 = document.createElement("option");
opcionSelect2.innerText = "1";
opcionSelect2.setAttribute('value', '1');
inputPreSeccion.appendChild(opcionSelect2);

const opcionSelect3 = document.createElement("option");
opcionSelect3.innerText = "2";
opcionSelect3.setAttribute('value', '2');
inputPreSeccion.appendChild(opcionSelect3);

const opcionSelect4 = document.createElement("option");
opcionSelect4.innerText = "3";
opcionSelect1.setAttribute('value', '3');
inputPreSeccion.appendChild(opcionSelect4);

const opcionSelect5 = document.createElement("option");
opcionSelect5.innerText = "4";
opcionSelect1.setAttribute('value', '4');
inputPreSeccion.appendChild(opcionSelect5);

const opcionSelect6 = document.createElement("option");
opcionSelect6.innerText = "5";
opcionSelect1.setAttribute('value', '5');
inputPreSeccion.appendChild(opcionSelect6);

const opcionSelect7 = document.createElement("option");
opcionSelect7.innerText = "6";
opcionSelect1.setAttribute('value', '6');
inputPreSeccion.appendChild(opcionSelect7);

const opcionSelect8 = document.createElement("option");
opcionSelect8.innerText = "7";
opcionSelect1.setAttribute('value', '7');
inputPreSeccion.appendChild(opcionSelect8);

const opcionSelect9 = document.createElement("option");
opcionSelect9.innerText = "8";
opcionSelect1.setAttribute('value', '8');
inputPreSeccion.appendChild(opcionSelect9);

const opcionSelect10 = document.createElement("option");
opcionSelect10.innerText = "9";
opcionSelect1.setAttribute('value', '9');
inputPreSeccion.appendChild(opcionSelect10);

const opcionSelect11 = document.createElement("option");
opcionSelect11.innerText = "10";
opcionSelect11.setAttribute('value', '10');
inputPreSeccion.appendChild(opcionSelect11);



//Cuarto Nodo: Información/sección Principal
const primerInput = document.createElement("input");
primerInput.setAttribute('placeholder', 'Agrupación...')
infoPrincipal.appendChild(primerInput);

const segundoInput = document.createElement("input");
segundoInput.setAttribute('placeholder', 'Candidato...')
infoPrincipal.appendChild(segundoInput);

const tercerInput = document.createElement("input");
tercerInput.setAttribute('placeholder', 'Votos')
infoPrincipal.appendChild(tercerInput);

const cuartoInput = document.createElement("input");
cuartoInput.setAttribute('placeholder', 'Ingrese el nombre de la agrupación...')
infoPrincipal.appendChild(cuartoInput);

const quintoInput = document.createElement("input");
quintoInput.setAttribute('placeholder', 'Ingrese el nombre de la agrupación...')
infoPrincipal.appendChild(quintoInput);

//Quinto Nodo: Post sección principal
const etiqVotosBlancos = document.createElement("label");
etiqVotosBlancos.innerText = "Votos blancos"
posSeccion.appendChild(etiqVotosBlancos);

const votosBlancos = document.createElement("input");
posSeccion.appendChild(votosBlancos);

const etiqVotosNulos = document.createElement("label");
etiqVotosNulos.innerText = "Votos nulos"
posSeccion.appendChild(etiqVotosNulos);

const votosNulos = document.createElement("input");
posSeccion.appendChild(votosNulos);

const etiqVotosImpugnados = document.createElement("label");
etiqVotosImpugnados.innerText = "Votos impugnados";
posSeccion.appendChild(etiqVotosImpugnados);

const votosImpugnados = document.createElement("input");
posSeccion.appendChild(votosImpugnados);

//Sexto Nodo: Información secundaria(aside)
const tituloEstatuto = document.createElement("h3");
tituloEstatuto.innerText = "Estatuto del Club Atlético San Lorenzo de Almagro";
infoSecundaria.appendChild(tituloEstatuto);

const subArt46 = document.createElement("h4");
subArt46.innerText = "Artículo 46";
infoSecundaria.appendChild(subArt46);

const parrafoArt46 = document.createElement("p");
parrafoArt46.innerText = "La Asamblea de representantes es la autoridad suprema de la institución. Se integra con noventa asociados y asociadas, con una integración de mujeres que asegure la representatividad de las asociadas, en proporción siempre a la composición por género del total de la masa societaria vigente al 30 de junio del año en que se celebren las elecciones, en concordancia con el objeto de la Institución, distribuidos en grupos de dos tercios para la mayoria y un tercio para la o las minorías. Los miembros correspondientes a la minoría serán elegidos según el sistema de representación proporcional por cociente. Este cociente será el resultado de dividir la suma de los votos obtenidos por las listas minoritarias por el número de miembros que corresponden a la minoría, siempre que dichos votos sean superiores al cincuenta por ciento (50%) de los votos obtenidos por la mayoría. Si las minorías obtuvieran en total menos del cincuenta por ciento (50%) de los votos obtenidos por la mayoría, ésta participará del cociente para distribuir cargos con la minoría. Obtenido el número definitivo de los representantes para la mayoría, el resto de los cargos a ocupar se distribuirá entre la o las minorías según la relación entre votos obtenidos y y el cociente. En ningún caso las minorías, en conjunto, podrán tener menos de quince (15) representantes, cualesquiera fuera el número de votos obtenidos. En este caso, la mayoría cederá las diferencias en representantes a las fracciones según el número de votos de las minorías.";
infoSecundaria.appendChild(parrafoArt46);

const subArt103 = document.createElement("h4");
subArt103.innerText = "Artículo 103";
infoSecundaria.appendChild(subArt103);

const parrafoArt103 = document.createElement("p");
parrafoArt103.innerText = "Realizado el cómputo final en lo que hace a los asambleístas, la Junta Electoral proclamará electos a los que ocupen los primeros puestos de la lista que hubiese obtenido el mayor número de votos hasta completar el total de sesenta (60) cargos del total de los cargos a elegir, salvo que hubiese obtenido un porcentaje mayor al cincuenta por ciento de los votos, en cuyo caso se le adjudicará el número de asambleístas que corresponda porcentualmente a esa demasía. El cupo restante -o el menor que corresponda si la lista que salió primera en los comicios obtuviera más del cincuenta por ciento de los votos escrutados, se adjudicará a las restantes listas en proporción al número de votos obtenidos por cada una, a cuyo efecto se observarán las reglas consignadas en el artículo 46.";
infoSecundaria.appendChild(parrafoArt103);

const subArt104 = document.createElement("h4");
subArt104.innerText = "Artículo 104";
infoSecundaria.appendChild(subArt104);

const parrafoArt104 = document.createElement("p");
parrafoArt104.innerText = "Igual procedimiento se seguirá para designar a los que habrán de integrar la Comisión Directiva, adjudicandose los quince primeros lugares del total de sus componentes a la lista que obtenga el mayor número de votos, salvo que hubiese que hubiese obtenido un porcentaje al cincuenta por ciento de los votos, en cuyo caso se adjudicará el número de miembras que corresponda a esa demasía, observándose para este caso la regla consignada en el artículo 46. Los otros cinco (5) cargos -o los que resten en su caso- se adjudicarán a las demás listas, siempre que hubieran obtenido un número superior al cuatro (4) porciento de los votos emitidos, que es el piso mínimo establecido para obtener al menos un cargo en Comisión Directiva.";
infoSecundaria.appendChild(parrafoArt104);

const subArt105 = document.createElement("h4");
subArt105.innerText = "Artículo 105";
infoSecundaria.appendChild(subArt105);

const parrafoArt105 = document.createElement("p");
parrafoArt105.innerText = "Si dos o mas listas empataran en la mayor cantidad de votos obtenidos para cada una, se aplicará el siguiente procedimiento:";
infoSecundaria.appendChild(parrafoArt105);

const listaArt105 = document.createElement("ol");
infoSecundaria.appendChild(listaArt105);

const primerElementoArt105 = document.createElement("li");
primerElementoArt105.innerText = "Los dos tercios o el setenta y cinco porciento de los cargos se distribuirá entre las empatadas en partes iguales.";
listaArt105.appendChild(primerElementoArt105);

const segundoElementoArt105 = document.createElement("li");
segundoElementoArt105.innerText = "El cincuenta por ciento de los votos obtenidos por cada una de las listas que hubieran empatado y el total de los obtenidos por las demás listas, será sumado.";
listaArt105.appendChild(segundoElementoArt105);

const tercerElementoArt105 = document.createElement("li");
tercerElementoArt105.innerText = "El resultado de la suma anterior se dividirá por el remanente de puestos a adjudicar.";
listaArt105.appendChild(tercerElementoArt105);

const cuartoElementoArt105 = document.createElement("li");
cuartoElementoArt105.innerText = "El cincuenta por ciento de los votos obtenidos por cada una de las listas que hubieran empatado y el total de los obtenidos por cada una de las demás listas, se dividirá individualmente por el cociente obtenido con anterioridad. El nuevo cociente que se obtenga dará el número de miembros con que se incrementará el obtenido por las listas mayoritarias y el que corresponda a cada una de las demás.";
listaArt105.appendChild(cuartoElementoArt105);

const quintoElementoArt105 = document.createElement("li");
quintoElementoArt105.innerText = "Si se tratar de elección de miembros de Comisión Directiva, los cargos de presidente, vicepresidente 1º, vicepresidente 2º, secretario general, tesorero, intendente, secretario de actas, prosecretario general, protesorero y subintendente, y de los diez miembros que se desempeñarán como vocales, en ese orden y en forma alternada, serán adjudicados a las distintas listas empatadas, comenzándose por adjudicar la presidencia al socio con mayor antigüedad que encabece una de ellas.";
listaArt105.appendChild(quintoElementoArt105);

const subArt106 = document.createElement("h4");
subArt106.innerText = "Artículo 106";
infoSecundaria.appendChild(subArt106);

const parrafoArt106 = document.createElement("p");
parrafoArt106.innerText = "Los cargos de la Comisión Fiscalizadora se adjudicarán dividiendo el total de los votos emitidos por siete. El número de votos obtenidos por cada lista se dividirá luego por este cociente y el nuevo que resulte dará el número que corresponda a cada una, adjudicándose a los mayores residuos los que falten. la Junta Electoral procederá de inmediato a proclamar electos y hasta completar el número asignado, a los candidatos que ocupan los puestos en cada lista. Acto continuo, extenderá sus nombramientos y los convocará para que celebren sesión constitutiva dentro de los plazos establecidos. Los restantes integrantes de las listas quedarán como miembros reemplazantes de los electos por cada una, para el caso de vacancia.";
infoSecundaria.appendChild(parrafoArt106);




//Séptimo Nodo: Pie de página


// body.innerHTML = '<h1>Calculadora de Cargos del Club Atlético San Lorenzo de Almagro</h1>';
// body.innerHTML = '<footer></footer>';

// const parrafo = document.createElement('p');
// parrafo.innerText = 'Este es un párrafo';
// parrafo.className = 'titulo';
// body.appendChild(parrafo); 