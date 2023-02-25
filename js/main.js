const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <section id="seccionPrincipal"></section> <aside id="menuLateral"></aside> <footer id="piePagina"></footer>';

const encabezado = document.getElementById("encabezado");
const navegacion = document.getElementById("navBar");
nevegacion.className = "navBar";
const infoPrincipal = document.getElementById("seccionPrincipal");
const infoSecundaria = document.getElementById("menuLateral");
const pie = document.getElementById("piePagina"); 

//Primer Nodo: Título
const titulo = document.createElement("h1");
titulo.innerText = "Calculadora de cargos del Club Atlético San Lorenzo de Almagro";
titulo.id = "tituloPrincipal";
encabezado.appendChild(titulo);

//Segundo Nodo: Menú de navegación
const listaOrdenada = document.createElement("ol");
const elementoListaOrdenada1 = document.createElement("li");
const elementoListaOrdenada2 = document.createElement("li");
const elementoListaOrdenada3 = document.createElement("li");
const elementoListaOrdenada4 = document.createElement("li");

elementoListaOrdenada1.innerText = "Inicio";
elementoListaOrdenada1.id = "inicio";

elementoListaOrdenada2.innerText = "Quienes somos";
elementoListaOrdenada2.id = "quienes";

elementoListaOrdenada3.innerText = "Otros proyectos";
elementoListaOrdenada3.id = "proyectos";

elementoListaOrdenada4.innerText = "Contacto";
elementoListaOrdenada4.id = "contacto";

listaOrdenada.appendChild(elementoListaOrdenada1);
navegacion.appendChild(listaOrdenada);

listaOrdenada.appendChild(elementoListaOrdenada2);
navegacion.appendChild(listaOrdenada);

listaOrdenada.appendChild(elementoListaOrdenada3);
navegacion.appendChild(listaOrdenada);

listaOrdenada.appendChild(elementoListaOrdenada4);
navegacion.appendChild(listaOrdenada);

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