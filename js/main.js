const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <section id="seccionPrincipal"></section> <aside id="menuLateral"></aside> <footer id="piePagina"></footer>';

const encabezado = document.getElementById("encabezado");
const navegacion = document.getElementById("navBar");
const infoPrincipal = document.getElementById("seccionPrincipal");
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

//Tercer Nodo: Información/sección Principal
const primerInput = document.createElement("input");
infoPrincipal.appendChild(primerInput);

const segundoInput = document.createElement("input");
infoPrincipal.appendChild(segundoInput);

const tercerInput = document.createElement("input");
infoPrincipal.appendChild(tercerInput);

const cuartoInput = document.createElement("input");
infoPrincipal.appendChild(cuartoInput);

const quintoInput = document.createElement("input");
infoPrincipal.appendChild(quintoInput);

//Tercer Nodo: Información secundaria(aside)

//Cuarto Nodo: Pie de página


// body.innerHTML = '<h1>Calculadora de Cargos del Club Atlético San Lorenzo de Almagro</h1>';
// body.innerHTML = '<footer></footer>';

// const parrafo = document.createElement('p');
// parrafo.innerText = 'Este es un párrafo';
// parrafo.className = 'titulo';
// body.appendChild(parrafo); 