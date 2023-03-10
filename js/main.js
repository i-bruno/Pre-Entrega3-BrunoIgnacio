const body = document.body;
body.id = "cuerpo";
body.innerHTML = '<header id="encabezado"><nav id="navBar"></nav></header> <section id="preSeccion"></section> <div id="divSeccionPrincipal"><section id="seccionPrincipal"></section><aside id="menuLateral"></aside></div> <section id="posSeccion"></section>  <footer id="piePagina"></footer>';

//Encabezado
const encabezado = document.getElementById("encabezado");
encabezado.className = "classEncabezado";
///Menú de navegación
const navegacion = document.getElementById("navBar");
navegacion.className = "classNavegacion";
//Pre sección principal
const preSeccion = document.getElementById("preSeccion");
preSeccion.className = "classPreSeccion";
//Contenedor de sección principal y info secundaria
const divSeccionPrincipal = document.getElementById("divSeccionPrincipal");
divSeccionPrincipal.className = "container";
///Sección principal
const infoPrincipal = document.getElementById("seccionPrincipal");
infoPrincipal.className = "gridListas";
///Información secundaria sobre el estatuto
const infoSecundaria = document.getElementById("menuLateral");
infoSecundaria.className = "gridEstatuto";
//Pos sección principal
const posSeccion = document.getElementById("posSeccion");
posSeccion.className = "classPosSeccion";
//Pie de página con los resultados
const pie = document.getElementById("piePagina"); 
pie.className = "classPie";

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

//Tercer Nodo: ¿Cuántas agrupaciones son?
const etiquetaPreSeccion = document.createElement("label");
etiquetaPreSeccion.innerText="¿Cuántas listas o agrupaciones participan de la elección?";
preSeccion.appendChild(etiquetaPreSeccion);

///Input para que el usuario ingrese la cantidad de listas
const inputPreSeccion = document.createElement("input");
inputPreSeccion.id = "numListas";
inputPreSeccion.setAttribute('type', 'number');
preSeccion.appendChild(inputPreSeccion);

///Botón para que el usuario envíe la información.
const btn = document.createElement("button");
btn.id = "btn";
btn.setAttribute('type', 'submit');
btn.className = "boton";
btn.innerText = "Enviar";
btn.addEventListener("click", funListas);
preSeccion.appendChild(btn);

const btnReset = document.createElement("button");
btnReset.id = "btnReset";
btnReset.setAttribute('type', 'submit');
btnReset.className = "boton";
btnReset.innerText = "Resetear";
btnReset.addEventListener("click", reset);
preSeccion.appendChild(btnReset);

//Cuarto Nodo: Información/sección Principal
function funListas (){
let cantidadListas = document.getElementById("numListas").value;
let divMensaje

let divListaA
let primerInputA
let segundoInputA
let tercerInputA

let divListaB
let primerInputB
let segundoInputB
let tercerInputB

let divListaC
let primerInputC
let segundoInputC
let tercerInputC

let divListaD
let primerInputD
let segundoInputD
let tercerInputD

let divListaE
let primerInputE
let segundoInputE
let tercerInputE

let divListaF
let primerInputF
let segundoInputF
let tercerInputF

let divListaG
let primerInputG
let segundoInputG
let tercerInputG

let divListaH
let primerInputH
let segundoInputH
let tercerInputH

let divListaI
let primerInputI
let segundoInputI
let tercerInputI

let divListaJ
let primerInputJ
let segundoInputJ
let tercerInputJ

switch(parseInt(cantidadListas)){
    case 1:
        divMensaje = document.createElement("div");
        divMensaje.className = "divMensaje";
        divMensaje.id = "divMensaje";
        divMensaje.innerHTML = "<h3>No se realizan las elecciones</h3>";
        infoPrincipal.appendChild(divMensaje);
    break;

    case 2:
        //Primer lista
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);

            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        //Segunda lista
        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
    
            primerInputB = document.createElement("input");
            primerInputB.id = "inputListaB"
            primerInputB.setAttribute('placeholder', 'Agrupación...')
            divListaB.appendChild(primerInputB);
    
            segundoInputB = document.createElement("input");
            segundoInputB.id = "segundoInputListaB";
            segundoInputB.setAttribute('placeholder', 'Candidato...')
            divListaB.appendChild(segundoInputB);
    
            tercerInputB = document.createElement("input");
            tercerInputB.id = "tercerInputListaB"
            tercerInputB.setAttribute('placeholder', 'Votos')
            divListaB.appendChild(tercerInputB);
    break;

    case 3:
        //Primer lista
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);
        
        //Segunda lista
        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
    
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

        //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
            
            primerInputC = document.createElement("input");
            primerInputC.id = "inputListaC";
            primerInputC.setAttribute('placeholder', 'Agrupación...')
            divListaC.appendChild(primerInputC);
                        
            segundoInputC = document.createElement("input");
            segundoInputC.id = "segundoInputListaC"; 
            segundoInputC.setAttribute('placeholder', 'Candidato...')
            divListaC.appendChild(segundoInputC);
                        
            tercerInputC = document.createElement("input");
            tercerInputC.id = "tercerInputListaC";
            tercerInputC.setAttribute('placeholder', 'Votos')
            divListaC.appendChild(tercerInputC);
    break;

    case 4:
        //Primer lista
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        //Segunda lista
        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
            primerInputB = document.createElement("input");
            primerInputB.id = "inputListaB"
            primerInputB.setAttribute('placeholder', 'Agrupación...')
            divListaB.appendChild(primerInputB);
    
            segundoInputB = document.createElement("input");
            segundoInputB.id = "segundoInputListaB";
            segundoInputB.setAttribute('placeholder', 'Candidato...')
            divListaB.appendChild(segundoInputB);
    
            tercerInputB = document.createElement("input");
            tercerInputB.id = "tercerInputListaB"
            tercerInputB.setAttribute('placeholder', 'Votos')
            divListaB.appendChild(tercerInputB);

        //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                    
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
            primerInputD = document.createElement("input");
            primerInputD.id = "inputListaD"
            primerInputD.setAttribute('placeholder', 'Agrupación...')
            divListaD.appendChild(primerInputD);
            
            segundoInputD = document.createElement("input");
            segundoInputD.id = "segundoInputListaD"
            segundoInputD.setAttribute('placeholder', 'Candidato...')
            divListaD.appendChild(segundoInputD);
            
            tercerInputD = document.createElement("input");
            tercerInputD.id = "tercerInputListaD";
            tercerInputD.setAttribute('placeholder', 'Votos')
            divListaD.appendChild(tercerInputD);
    break;

    case 5:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

        //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
            primerInputE = document.createElement("input");
            primerInputE.id = "inputListaE";
            primerInputE.setAttribute('placeholder', 'Agrupación...')
            divListaE.appendChild(primerInputE);
            
            segundoInputE = document.createElement("input");
            segundoInputE.id = "segundoInputListaE";
            segundoInputE.setAttribute('placeholder', 'Candidato...')
            divListaE.appendChild(segundoInputE);
            
            tercerInputE = document.createElement("input");
            tercerInputE.id = "tercerInputListaE";
            tercerInputE.setAttribute('placeholder', 'Votos')
            divListaE.appendChild(tercerInputE);
    break;

    case 6:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
    
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

                    //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
            primerInputF = document.createElement("input");
            primerInputF.id = "inputListaF";
            primerInputF.setAttribute('placeholder', 'Agrupación...')
            divListaF.appendChild(primerInputF);
            
            segundoInputF = document.createElement("input");
            segundoInputF.id = "segundoInputListaF";
            segundoInputF.setAttribute('placeholder', 'Candidato...')
            divListaF.appendChild(segundoInputF);
            
            tercerInputF = document.createElement("input");
            tercerInputF.id = "tercerInputListaF";
            tercerInputF.setAttribute('placeholder', 'Votos')
            divListaF.appendChild(tercerInputF);
    break;

    case 7:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

                    //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
        primerInputF = document.createElement("input");
        primerInputF.id = "inputListaF";
        primerInputF.setAttribute('placeholder', 'Agrupación...')
        divListaF.appendChild(primerInputF);
        
        segundoInputF = document.createElement("input");
        segundoInputF.id = "segundoInputListaF";
        segundoInputF.setAttribute('placeholder', 'Candidato...')
        divListaF.appendChild(segundoInputF);
        
        tercerInputF = document.createElement("input");
        tercerInputF.id = "tercerInputListaF";
        tercerInputF.setAttribute('placeholder', 'Votos')
        divListaF.appendChild(tercerInputF);

            //Septima lista
        divListaG = document.createElement("div");
        divListaG.className = "agrupacion";
        divListaG.id = "listaG";
        infoPrincipal.appendChild(divListaG);
        
            primerInputG = document.createElement("input");
            primerInputG.id = "inputListaG";
            primerInputG.setAttribute('placeholder', 'Agrupación...')
            divListaG.appendChild(primerInputG);
            
            segundoInputG = document.createElement("input");
            segundoInputG.id = "segundoInputListaG";
            segundoInputG.setAttribute('placeholder', 'Candidato...')
            divListaG.appendChild(segundoInputG);
            
            tercerInputG = document.createElement("input");
            tercerInputG.id = "tercerInputListaG";
            tercerInputG.setAttribute('placeholder', 'Votos')
            divListaG.appendChild(tercerInputG);
    break;

    case 8:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

                    //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
        primerInputF = document.createElement("input");
        primerInputF.id = "inputListaF";
        primerInputF.setAttribute('placeholder', 'Agrupación...')
        divListaF.appendChild(primerInputF);
        
        segundoInputF = document.createElement("input");
        segundoInputF.id = "segundoInputListaF";
        segundoInputF.setAttribute('placeholder', 'Candidato...')
        divListaF.appendChild(segundoInputF);
        
        tercerInputF = document.createElement("input");
        tercerInputF.id = "tercerInputListaF";
        tercerInputF.setAttribute('placeholder', 'Votos')
        divListaF.appendChild(tercerInputF);

            //Septima lista
        divListaG = document.createElement("div");
        divListaG.className = "agrupacion";
        divListaG.id = "listaG";
        infoPrincipal.appendChild(divListaG);
        
        primerInputG = document.createElement("input");
        primerInputG.id = "inputListaG";
        primerInputG.setAttribute('placeholder', 'Agrupación...')
        divListaG.appendChild(primerInputG);
        
        segundoInputG = document.createElement("input");
        segundoInputG.id = "segundoInputListaG";
        segundoInputG.setAttribute('placeholder', 'Candidato...')
        divListaG.appendChild(segundoInputG);
        
        tercerInputG = document.createElement("input");
        tercerInputG.id = "tercerInputListaG";
        tercerInputG.setAttribute('placeholder', 'Votos')
        divListaG.appendChild(tercerInputG);

            //Octava lista
        divListaH = document.createElement("div");
        divListaH.className = "agrupacion";
        divListaH.id = "listaH";
        infoPrincipal.appendChild(divListaH);
        
            primerInputH = document.createElement("input");
            primerInputH.id = "inputListaH";
            primerInputH.setAttribute('placeholder', 'Agrupación...')
            divListaH.appendChild(primerInputH);
            
            segundoInputH = document.createElement("input");
            segundoInputH.id = "segundoInputListaH";
            segundoInputH.setAttribute('placeholder', 'Candidato...')
            divListaH.appendChild(segundoInputH);
            
            tercerInputH = document.createElement("input");
            tercerInputH.id = "tercerInputListaH";
            tercerInputH.setAttribute('placeholder', 'Votos')
            divListaH.appendChild(tercerInputH);
    break;

    case 9:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);

                    //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
        primerInputF = document.createElement("input");
        primerInputF.id = "inputListaF";
        primerInputF.setAttribute('placeholder', 'Agrupación...')
        divListaF.appendChild(primerInputF);
        
        segundoInputF = document.createElement("input");
        segundoInputF.id = "segundoInputListaF";
        segundoInputF.setAttribute('placeholder', 'Candidato...')
        divListaF.appendChild(segundoInputF);
        
        tercerInputF = document.createElement("input");
        tercerInputF.id = "tercerInputListaF";
        tercerInputF.setAttribute('placeholder', 'Votos')
        divListaF.appendChild(tercerInputF);

            //Septima lista
        divListaG = document.createElement("div");
        divListaG.className = "agrupacion";
        divListaG.id = "listaG";
        infoPrincipal.appendChild(divListaG);
        
        primerInputG = document.createElement("input");
        primerInputG.id = "inputListaG";
        primerInputG.setAttribute('placeholder', 'Agrupación...')
        divListaG.appendChild(primerInputG);
        
        segundoInputG = document.createElement("input");
        segundoInputG.id = "segundoInputListaG";
        segundoInputG.setAttribute('placeholder', 'Candidato...')
        divListaG.appendChild(segundoInputG);
        
        tercerInputG = document.createElement("input");
        tercerInputG.id = "tercerInputListaG";
        tercerInputG.setAttribute('placeholder', 'Votos')
        divListaG.appendChild(tercerInputG);

            //Octava lista
        divListaH = document.createElement("div");
        divListaH.className = "agrupacion";
        divListaH.id = "listaH";
        infoPrincipal.appendChild(divListaH);
        
        primerInputH = document.createElement("input");
        primerInputH.id = "inputListaH";
        primerInputH.setAttribute('placeholder', 'Agrupación...')
        divListaH.appendChild(primerInputH);
        
        segundoInputH = document.createElement("input");
        segundoInputH.id = "segundoInputListaH";
        segundoInputH.setAttribute('placeholder', 'Candidato...')
        divListaH.appendChild(segundoInputH);
        
        tercerInputH = document.createElement("input");
        tercerInputH.id = "tercerInputListaH";
        tercerInputH.setAttribute('placeholder', 'Votos')
        divListaH.appendChild(tercerInputH);

            //Novena lista
        divListaI = document.createElement("div");
        divListaI.className = "agrupacion";
        divListaI.id = "listaI";
        infoPrincipal.appendChild(divListaI);
        
            primerInputI = document.createElement("input");
            primerInputI.id = "inputListaI";
            primerInputI.setAttribute('placeholder', 'Agrupación...')
            divListaI.appendChild(primerInputI);
            
            segundoInputI = document.createElement("input");
            segundoInputI.id = "segundoInputListaI";
            segundoInputI.setAttribute('placeholder', 'Candidato...')
            divListaI.appendChild(segundoInputI);
            
            tercerInputI = document.createElement("input");
            tercerInputI.id = "tercerInputListaI";
            tercerInputI.setAttribute('placeholder', 'Votos')
            divListaI.appendChild(tercerInputI);
    break;

    case 10:
        divListaA = document.createElement("div");
        divListaA.className = "agrupacion";
        divListaA.id = "listaA";
        infoPrincipal.appendChild(divListaA);
    
            primerInputA = document.createElement("input");
            primerInputA.id = "inputListaA"
            primerInputA.setAttribute('placeholder', 'Agrupación...')
            divListaA.appendChild(primerInputA);
    
            segundoInputA = document.createElement("input");
            segundoInputA.id = "segudoInputListaA";
            segundoInputA.setAttribute('placeholder', 'Candidato...')
            divListaA.appendChild(segundoInputA);
    
            tercerInputA = document.createElement("input");
            tercerInputA.id = "tercerInputListaA";
            tercerInputA.setAttribute('placeholder', 'Votos')
            divListaA.appendChild(tercerInputA);

        divListaB = document.createElement("div");
        divListaB.className = "agrupacion";
        divListaB.id = "listaB";
        infoPrincipal.appendChild(divListaB);
        
        primerInputB = document.createElement("input");
        primerInputB.id = "inputListaB"
        primerInputB.setAttribute('placeholder', 'Agrupación...')
        divListaB.appendChild(primerInputB);

        segundoInputB = document.createElement("input");
        segundoInputB.id = "segundoInputListaB";
        segundoInputB.setAttribute('placeholder', 'Candidato...')
        divListaB.appendChild(segundoInputB);

        tercerInputB = document.createElement("input");
        tercerInputB.id = "tercerInputListaB"
        tercerInputB.setAttribute('placeholder', 'Votos')
        divListaB.appendChild(tercerInputB);
                    
            //Tercer lista
        divListaC = document.createElement("div");
        divListaC.className = "agrupacion";
        divListaC.id = "listaC";
        infoPrincipal.appendChild(divListaC);
                            
        primerInputC = document.createElement("input");
        primerInputC.id = "inputListaC";
        primerInputC.setAttribute('placeholder', 'Agrupación...')
        divListaC.appendChild(primerInputC);
                    
        segundoInputC = document.createElement("input");
        segundoInputC.id = "segundoInputListaC"; 
        segundoInputC.setAttribute('placeholder', 'Candidato...')
        divListaC.appendChild(segundoInputC);
                    
        tercerInputC = document.createElement("input");
        tercerInputC.id = "tercerInputListaC";
        tercerInputC.setAttribute('placeholder', 'Votos')
        divListaC.appendChild(tercerInputC);

            //Cuarta lista        
        divListaD = document.createElement("div");
        divListaD.className = "agrupacion";
        divListaD.id = "listaD";
        infoPrincipal.appendChild(divListaD);
        
        primerInputD = document.createElement("input");
        primerInputD.id = "inputListaD"
        primerInputD.setAttribute('placeholder', 'Agrupación...')
        divListaD.appendChild(primerInputD);
        
        segundoInputD = document.createElement("input");
        segundoInputD.id = "segundoInputListaD"
        segundoInputD.setAttribute('placeholder', 'Candidato...')
        divListaD.appendChild(segundoInputD);
        
        tercerInputD = document.createElement("input");
        tercerInputD.id = "tercerInputListaD";
        tercerInputD.setAttribute('placeholder', 'Votos')
        divListaD.appendChild(tercerInputD);

            //Quinta lista
        divListaE = document.createElement("div");
        divListaE.className = "agrupacion";
        divListaE.id = "listaE";
        infoPrincipal.appendChild(divListaE);
        
        primerInputE = document.createElement("input");
        primerInputE.id = "inputListaE";
        primerInputE.setAttribute('placeholder', 'Agrupación...')
        divListaE.appendChild(primerInputE);
        
        segundoInputE = document.createElement("input");
        segundoInputE.id = "segundoInputListaE";
        segundoInputE.setAttribute('placeholder', 'Candidato...')
        divListaE.appendChild(segundoInputE);
        
        tercerInputE = document.createElement("input");
        tercerInputE.id = "tercerInputListaE";
        tercerInputE.setAttribute('placeholder', 'Votos')
        divListaE.appendChild(tercerInputE);

            //Sexta lista
        divListaF = document.createElement("div");
        divListaF.className = "agrupacion";
        divListaF.id = "listaF";
        infoPrincipal.appendChild(divListaF);
        
        primerInputF = document.createElement("input");
        primerInputF.id = "inputListaF";
        primerInputF.setAttribute('placeholder', 'Agrupación...')
        divListaF.appendChild(primerInputF);
        
        segundoInputF = document.createElement("input");
        segundoInputF.id = "segundoInputListaF";
        segundoInputF.setAttribute('placeholder', 'Candidato...')
        divListaF.appendChild(segundoInputF);
        
        tercerInputF = document.createElement("input");
        tercerInputF.id = "tercerInputListaF";
        tercerInputF.setAttribute('placeholder', 'Votos')
        divListaF.appendChild(tercerInputF);

            //Septima lista
        divListaG = document.createElement("div");
        divListaG.className = "agrupacion";
        divListaG.id = "listaG";
        infoPrincipal.appendChild(divListaG);
        
        primerInputG = document.createElement("input");
        primerInputG.id = "inputListaG";
        primerInputG.setAttribute('placeholder', 'Agrupación...')
        divListaG.appendChild(primerInputG);
        
        segundoInputG = document.createElement("input");
        segundoInputG.id = "segundoInputListaG";
        segundoInputG.setAttribute('placeholder', 'Candidato...')
        divListaG.appendChild(segundoInputG);
        
        tercerInputG = document.createElement("input");
        tercerInputG.id = "tercerInputListaG";
        tercerInputG.setAttribute('placeholder', 'Votos')
        divListaG.appendChild(tercerInputG);

            //Octava lista
        divListaH = document.createElement("div");
        divListaH.className = "agrupacion";
        divListaH.id = "listaH";
        infoPrincipal.appendChild(divListaH);
        
        primerInputH = document.createElement("input");
        primerInputH.id = "inputListaH";
        primerInputH.setAttribute('placeholder', 'Agrupación...')
        divListaH.appendChild(primerInputH);
        
        segundoInputH = document.createElement("input");
        segundoInputH.id = "segundoInputListaH";
        segundoInputH.setAttribute('placeholder', 'Candidato...')
        divListaH.appendChild(segundoInputH);
        
        tercerInputH = document.createElement("input");
        tercerInputH.id = "tercerInputListaH";
        tercerInputH.setAttribute('placeholder', 'Votos')
        divListaH.appendChild(tercerInputH);

            //Novena lista
        divListaI = document.createElement("div");
        divListaI.className = "agrupacion";
        divListaI.id = "listaI";
        infoPrincipal.appendChild(divListaI);
        
        primerInputI = document.createElement("input");
        primerInputI.id = "inputListaI";
        primerInputI.setAttribute('placeholder', 'Agrupación...')
        divListaI.appendChild(primerInputI);
        
        segundoInputI = document.createElement("input");
        segundoInputI.id = "segundoInputListaI";
        segundoInputI.setAttribute('placeholder', 'Candidato...')
        divListaI.appendChild(segundoInputI);
        
        tercerInputI = document.createElement("input");
        tercerInputI.id = "tercerInputListaI";
        tercerInputI.setAttribute('placeholder', 'Votos')
        divListaI.appendChild(tercerInputI);

            //Decima lista
        divListaJ = document.createElement("div");
        divListaJ.className = "agrupacion";
        divListaJ.id = "listaJ";
        infoPrincipal.appendChild(divListaJ);
        
            primerInputJ = document.createElement("input");
            primerInputJ.id = "inputListaJ";
            primerInputJ.setAttribute('placeholder', 'Agrupación...')
            divListaJ.appendChild(primerInputJ);
            
            segundoInputJ = document.createElement("input");
            segundoInputJ.id = "segundoInputListaJ";
            segundoInputJ.setAttribute('placeholder', 'Candidato...')
            divListaJ.appendChild(segundoInputJ);
            
            tercerInputJ = document.createElement("input");
            tercerInputJ.id = "tercerInputListaJ";
            tercerInputJ.setAttribute('placeholder', 'Votos')
            divListaJ.appendChild(tercerInputJ);
    break;
}       
    }

function reset(){
    let cantidadListas = document.getElementById("numListas").value;

    let divListaA = document.getElementById("listaA");
    let divListaB = document.getElementById("listaB");
    let divListaC = document.getElementById("listaC");
    let divListaD = document.getElementById("listaD");
    let divListaE = document.getElementById("listaE");
    let divListaF = document.getElementById("listaF");
    let divListaG = document.getElementById("listaG");
    let divListaH = document.getElementById("listaH");
    let divListaI = document.getElementById("listaI");
    let divListaJ = document.getElementById("listaJ");
    let divMensaje = document.getElementById("divMensaje");
    let divEnunciado = document.getElementById("divEnunciado");
    let textoGanador = document.getElementById("textoGanador");
    let mayoria = document.getElementById("mayoria");
    let minoria = document.getElementById("minoria");

    switch(parseInt(cantidadListas)){
        case 1:
            divMensaje.remove();
        break;

        case 2:
            divListaA.remove();
            divListaB.remove();
        break;

        case 3:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
        break;

        case 4:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
        break;

        case 5:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
        break;

        case 6:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
        break;

        case 7:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
            divListaG.remove();
        break;

        case 8:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
            divListaG.remove();
            divListaH.remove();
        break;

        case 9:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
            divListaG.remove();
            divListaH.remove();
            divListaI.remove();
        break;

        case 10:
            divListaA.remove();
            divListaB.remove();
            divListaC.remove();
            divListaD.remove();
            divListaE.remove();
            divListaF.remove();
            divListaG.remove();
            divListaH.remove();
            divListaI.remove();
            divListaJ.remove();
        break;
    }

divEnunciado.remove();
textoGanador.remove();
mayoria.remove();
minoria.remove();
}

//Quinto Nodo: Post sección principal
const etiqVotosBlancos = document.createElement("label");
etiqVotosBlancos.innerText = "Votos blancos"
posSeccion.appendChild(etiqVotosBlancos);

let votosBlancos = document.createElement("input");
votosBlancos.setAttribute ('type', 'number');
votosBlancos.setAttribute ('value', 0);
votosBlancos.id = "votosBlancos";
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

const boton = document.createElement("input");
boton.setAttribute('type', 'submit');
boton.className = "boton";
boton.addEventListener("click", calculo);
posSeccion.appendChild(boton);

//Sexto Nodo: Información secundaria(aside)
menuLateral.className = "aside";

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
function resultado(){
    //Crea un pequeño enunciado
    let tituloResultado = document.createElement("h2");
    tituloResultado.innerText = "El resultado de las elecciones es el siguiente:"
    pie.appendChild(tituloResultado);

    const seccionResultado = document.createElement("section");
    seccionResultado.innerHTML = '<div></div>';
    pie.appendChild(seccionResultado);
}


class Agrupaciones {
    constructor (nombre, candidato, votos, porcentaje){
        this.nombre = nombre;
        this.candidato = candidato;
        this.votos = votos;
        this.porcentaje = porcentaje;
    }
}

const lista1 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista2 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista3 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista4 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista5 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista6 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista7 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista8 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista9 = new Agrupaciones ("sin definir", "sin definir", 0, 0);
const lista10 = new Agrupaciones ("sin definir", "sin definir", 0, 0);

function calculo(){
    let cantidadListas = document.getElementById("numListas").value;

    switch(parseInt(cantidadListas)){
    case 2:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);

        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);
    break;
    
    case 3:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    break;

    case 4:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    break;

    case 5:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    break;

    case 6:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    break;

    case 7:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    
        lista7.nombre = document.getElementById("inputListaG").value;
        lista7.candidato = document.getElementById("segundoInputListaG").value;
        lista7.votos = document.getElementById("tercerInputListaG").value;
        lista7.votos = parseInt(lista7.votos);
    break;

    case 8:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    
        lista7.nombre = document.getElementById("inputListaG").value;
        lista7.candidato = document.getElementById("segundoInputListaG").value;
        lista7.votos = document.getElementById("tercerInputListaG").value;
        lista7.votos = parseInt(lista7.votos);
    
        lista8.nombre = document.getElementById("inputListaH").value;
        lista8.candidato = document.getElementById("segundoInputListaH").value;
        lista8.votos = document.getElementById("tercerInputListaH").value;
        lista8.votos = parseInt(lista8.votos);
    break;

    case 9:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    
        lista7.nombre = document.getElementById("inputListaG").value;
        lista7.candidato = document.getElementById("segundoInputListaG").value;
        lista7.votos = document.getElementById("tercerInputListaG").value;
        lista7.votos = parseInt(lista7.votos);
    
        lista8.nombre = document.getElementById("inputListaH").value;
        lista8.candidato = document.getElementById("segundoInputListaH").value;
        lista8.votos = document.getElementById("tercerInputListaH").value;
        lista8.votos = parseInt(lista8.votos);
    
        lista9.nombre = document.getElementById("inputListaI").value;
        lista9.candidato = document.getElementById("segundoInputListaI").value;
        lista9.votos = document.getElementById("tercerInputListaI").value;
        lista9.votos = parseInt(lista9.votos);
    break;

    case 10:
        lista1.nombre = document.getElementById("inputListaA").value;
        lista1.candidato = document.getElementById("segudoInputListaA").value;
        lista1.votos = document.getElementById("tercerInputListaA").value;
        lista1.votos = parseInt(lista1.votos);
    
        lista2.nombre = document.getElementById("inputListaB").value;
        lista2.candidato = document.getElementById("segundoInputListaB").value;
        lista2.votos = document.getElementById("tercerInputListaB").value;
        lista2.votos = parseInt(lista2.votos);

        lista3.nombre = document.getElementById("inputListaC").value;
        lista3.candidato = document.getElementById("segundoInputListaC").value;
        lista3.votos = document.getElementById("tercerInputListaC").value;
        lista3.votos = parseInt(lista3.votos);
    
        lista4.nombre = document.getElementById("inputListaD").value;
        lista4.candidato = document.getElementById("segundoInputListaD").value;
        lista4.votos = document.getElementById("tercerInputListaD").value;
        lista4.votos = parseInt(lista4.votos);
    
        lista5.nombre = document.getElementById("inputListaE").value;
        lista5.candidato = document.getElementById("segundoInputListaE").value;
        lista5.votos = document.getElementById("tercerInputListaE").value;
        lista5.votos = parseInt(lista5.votos);
    
        lista6.nombre = document.getElementById("inputListaF").value;
        lista6.candidato = document.getElementById("segundoInputListaF").value;
        lista6.votos = document.getElementById("tercerInputListaF").value;
        lista6.votos = parseInt(lista6.votos);
    
        lista7.nombre = document.getElementById("inputListaG").value;
        lista7.candidato = document.getElementById("segundoInputListaG").value;
        lista7.votos = document.getElementById("tercerInputListaG").value;
        lista7.votos = parseInt(lista7.votos);
    
        lista8.nombre = document.getElementById("inputListaH").value;
        lista8.candidato = document.getElementById("segundoInputListaH").value;
        lista8.votos = document.getElementById("tercerInputListaH").value;
        lista8.votos = parseInt(lista8.votos);
    
        lista9.nombre = document.getElementById("inputListaI").value;
        lista9.candidato = document.getElementById("segundoInputListaI").value;
        lista9.votos = document.getElementById("tercerInputListaI").value;
        lista9.votos = parseInt(lista9.votos);
    
        lista10.nombre = document.getElementById("inputListaJ").value;
        lista10.candidato = document.getElementById("segundoInputListaJ").value;
        lista10.votos = document.getElementById("tercerInputListaJ").value;
        lista10.votos = parseInt(lista10.votos);
    break;
    }
    
    let totBlancos = document.getElementById("votosBlancos").value;
    totBlancos = parseInt(totBlancos);
    
    let votosTotales = lista1.votos + lista2.votos + lista3.votos + lista4.votos + lista5.votos + lista5.votos + lista6.votos + lista7.votos + lista8.votos + lista9.votos + lista10.votos + totBlancos;
    votosTotales = parseInt(votosTotales);

    //Calcular porcentajes de listas
lista1.porcentaje = ((lista1.votos/votosTotales)*100).toFixed(3);
lista2.porcentaje = ((lista2.votos/votosTotales)*100).toFixed(3);
lista3.porcentaje = ((lista3.votos/votosTotales)*100).toFixed(3);
lista4.porcentaje = ((lista4.votos/votosTotales)*100).toFixed(3);
lista5.porcentaje = ((lista5.votos/votosTotales)*100).toFixed(3);
lista6.porcentaje = ((lista6.votos/votosTotales)*100).toFixed(3);
lista7.porcentaje = ((lista7.votos/votosTotales)*100).toFixed(3);
lista8.porcentaje = ((lista8.votos/votosTotales)*100).toFixed(3);
lista9.porcentaje = ((lista9.votos/votosTotales)*100).toFixed(3);
lista10.porcentaje = ((lista10.votos/votosTotales)*100).toFixed(3);

    let divEnunciado

    switch(parseInt(cantidadListas)){
        case 2:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos + ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
        case 3:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos+ ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p> '+ lista3.candidato + ' de la agrupación ' + lista3.nombre + ' obtuvo '+ lista3.votos+ ' votos.</p> <p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
        case 4:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos+ ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p> '+ lista3.candidato + ' de la agrupación ' + lista3.nombre + ' obtuvo '+ lista3.votos+ ' votos.</p> <p> '+ lista4.candidato + ' de la agrupación ' + lista4.nombre + ' obtuvo '+ lista4.votos+ ' votos.</p> <p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
        case 5:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos+ ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p> '+ lista3.candidato + ' de la agrupación ' + lista3.nombre + ' obtuvo '+ lista3.votos+ ' votos.</p> <p> '+ lista4.candidato + ' de la agrupación ' + lista4.nombre + ' obtuvo '+ lista4.votos+ ' votos.</p> <p> '+ lista5.candidato + ' de la agrupación ' + lista5.nombre + ' obtuvo '+ lista5.votos+ ' votos.</p> <p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
        case 6:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos+ ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p> '+ lista3.candidato + ' de la agrupación ' + lista3.nombre + ' obtuvo '+ lista3.votos+ ' votos.</p> <p> '+ lista4.candidato + ' de la agrupación ' + lista4.nombre + ' obtuvo '+ lista4.votos+ ' votos.</p> <p> '+ lista5.candidato + ' de la agrupación ' + lista5.nombre + ' obtuvo '+ lista5.votos+ ' votos.</p>  <p> '+ lista6.candidato + ' de la agrupación ' + lista6.nombre + ' obtuvo '+ lista6.votos+ ' votos.</p> <p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
        case 7:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos+ ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p> '+ lista3.candidato + ' de la agrupación ' + lista3.nombre + ' obtuvo '+ lista3.votos+ ' votos.</p> <p> '+ lista4.candidato + ' de la agrupación ' + lista4.nombre + ' obtuvo '+ lista4.votos+ ' votos.</p> <p> '+ lista5.candidato + ' de la agrupación ' + lista5.nombre + ' obtuvo '+ lista5.votos+ ' votos.</p>  <p> '+ lista6.candidato + ' de la agrupación ' + lista6.nombre + ' obtuvo '+ lista6.votos+ ' votos.</p> <p> '+ lista7.candidato + ' de la agrupación ' + lista7.nombre + ' obtuvo '+ lista7.votos+ ' votos.</p> <p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
        case 8:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos+ ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p> '+ lista3.candidato + ' de la agrupación ' + lista3.nombre + ' obtuvo '+ lista3.votos+ ' votos.</p> <p> '+ lista4.candidato + ' de la agrupación ' + lista4.nombre + ' obtuvo '+ lista4.votos+ ' votos.</p> <p> '+ lista5.candidato + ' de la agrupación ' + lista5.nombre + ' obtuvo '+ lista5.votos+ ' votos.</p>  <p> '+ lista6.candidato + ' de la agrupación ' + lista6.nombre + ' obtuvo '+ lista6.votos+ ' votos.</p> <p> '+ lista7.candidato + ' de la agrupación ' + lista7.nombre + ' obtuvo '+ lista7.votos+ ' votos.</p> <p> '+ lista8.candidato + ' de la agrupación ' + lista8.nombre + ' obtuvo '+ lista8.votos+ ' votos.</p> <p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
        case 9:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos+ ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p> '+ lista3.candidato + ' de la agrupación ' + lista3.nombre + ' obtuvo '+ lista3.votos+ ' votos.</p> <p> '+ lista4.candidato + ' de la agrupación ' + lista4.nombre + ' obtuvo '+ lista4.votos+ ' votos.</p> <p> '+ lista5.candidato + ' de la agrupación ' + lista5.nombre + ' obtuvo '+ lista5.votos+ ' votos.</p>  <p> '+ lista6.candidato + ' de la agrupación ' + lista6.nombre + ' obtuvo '+ lista6.votos+ ' votos.</p> <p> '+ lista7.candidato + ' de la agrupación ' + lista7.nombre + ' obtuvo '+ lista7.votos+ ' votos.</p> <p> '+ lista8.candidato + ' de la agrupación ' + lista8.nombre + ' obtuvo '+ lista8.votos+ ' votos.</p> <p> '+ lista9.candidato + ' de la agrupación ' + lista9.nombre + ' obtuvo '+ lista9.votos+ ' votos.</p><p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
        case 10:
            divEnunciado = document.createElement("div");
            divEnunciado.id = "divEnunciado";
            divEnunciado.innerHTML = '<h2>Resultado de las elecciones:</h2><p> '+ lista1.candidato + ' de la agrupación ' + lista1.nombre + ' obtuvo '+ lista1.votos+ ' votos.</p> <p> '+ lista2.candidato + ' de la agrupación ' + lista2.nombre + ' obtuvo '+ lista2.votos+ ' votos.</p> <p> '+ lista3.candidato + ' de la agrupación ' + lista3.nombre + ' obtuvo '+ lista3.votos+ ' votos.</p> <p> '+ lista4.candidato + ' de la agrupación ' + lista4.nombre + ' obtuvo '+ lista4.votos+ ' votos.</p> <p> '+ lista5.candidato + ' de la agrupación ' + lista5.nombre + ' obtuvo '+ lista5.votos+ ' votos.</p>  <p> '+ lista6.candidato + ' de la agrupación ' + lista6.nombre + ' obtuvo '+ lista6.votos+ ' votos.</p> <p> '+ lista7.candidato + ' de la agrupación ' + lista7.nombre + ' obtuvo '+ lista7.votos+ ' votos.</p> <p> '+ lista8.candidato + ' de la agrupación ' + lista8.nombre + ' obtuvo '+ lista8.votos+ ' votos.</p> <p> '+ lista9.candidato + ' de la agrupación ' + lista9.nombre + ' obtuvo '+ lista9.votos+ ' votos.</p> <p> '+ lista10.candidato + ' de la agrupación ' + lista10.nombre + ' obtuvo '+ lista10.votos+ ' votos.</p><p>Hubo un total de ' + totBlancos + ' votos en blanco</p> <p>Se registró un total de '+ votosTotales + ' votos.</p>'; 
            pie.appendChild(divEnunciado);
        break;
    }

    const arrayListas = [lista1, lista2, lista3, lista4, lista5, lista6, lista7, lista8, lista9, lista10]

//Busca cual es la lista que sacó mayores votos.
let votosMayor = Math.max(lista1.votos, lista2.votos, lista3.votos, lista4.votos, lista5.votos, lista5.votos, lista6.votos, lista7.votos, lista8.votos, lista9.votos, lista10.votos);

let listaGanadora = arrayListas.find (function (arrayListas){
    return arrayListas.votos == votosMayor;
});

const textoGanador = document.createElement("div");
textoGanador.id = "textoGanador";
textoGanador.innerHTML = '<p> El candidato <strong>' + listaGanadora.candidato + '</strong> de la agrupación <strong>'+ listaGanadora.nombre + '</strong> gano las elecciones con '+ listaGanadora.votos + ' votos.</p>'
pie.appendChild(textoGanador);

//Porcentaje de la mayoría
let porcentajeMayoria = parseFloat((votosMayor*100)/votosTotales).toFixed(3);

const mayoria = document.createElement("div");
mayoria.id = "mayoria";
mayoria.innerHTML = '<p>La mayoría obtuvo un ' + porcentajeMayoria + ' porciento</p>';
pie.appendChild(mayoria);

//Porcentaje de la minoría
let votosMinoria = (votosTotales-votosMayor)-totBlancos;

let porcentajeMinoria = parseFloat((votosMinoria*100)/votosTotales).toFixed(3);

const minoria = document.createElement("div");
minoria.id = "minoria";
minoria.innerHTML = '<p>La minoría obtuvo un total de '+ votosMinoria + ' votos que equivalen al ' + porcentajeMinoria +' porciento.</p>';
pie.appendChild(minoria);

const tituloAsambleista = document.createElement("h1");
tituloAsambleista.innerText = "Asambleístas";
pie.appendChild(tituloAsambleista);

const divGrafica = document.createElement("div");
divGrafica.className = "containerGrafica";
divGrafica.innerHTML = "<div class='as1'><h2>1</h2></div><div class='as2'><h2>2</h2></div><div class='as3'><h2>3</h2></div><div class='as4'><h2>4</h2></div><div class='as5'><h2>5</h2></div><div class='as6'><h2>6</h2></div><div class='as7'><h2>7</h2></div><div class='as8'><h2>8</h2></div><div class='as9'><h2>9</h2></div><div class='as10'><h2>10</h2></div><div class='as11'><h2>11</h2></div><div class='as12'><h2>12</h2></div><div class='as13'><h2>13</h2></div><div class='as14'><h2>14</h2></div><div class='as15'><h2>15</h2></div><div class='as16'><h2>16</h2></div><div class='as17'><h2>17</h2></div><div class='as18'><h2>18</h2></div><div class='as19'><h2>19</h2></div><div class='as20'><h2>20</h2></div><div class='as21'><h2>21</h2></div><div class='as22'><h2>22</h2></div><div class='as23'><h2>23</h2></div><div class='as24'><h2>24</h2></div><div class='as25'><h2>25</h2></div><div class='as26'><h2>26</h2></div><div class='as27'><h2>27</h2></div><div class='as28'><h2>28</h2></div><div class='as29'><h2>29</h2></div><div class='as30'><h2>30</h2></div><div class='as31'><h2>31</h2></div><div class='as32'><h2>32</h2></div><div class='as33'><h2>33</h2></div><div class='as34'><h2>34</h2></div><div class='as35'><h2>35</h2></div><div class='as36'><h2>36</h2></div><div class='as37'><h2>37</h2></div><div class='as38'><h2>38</h2></div><div class='as39'><h2>39</h2></div><div class='as40'><h2>40</h2></div><div class='as41'><h2>41</h2></div><div class='as42'><h2>42</h2></div><div class='as43'><h2>43</h2></div><div class='as44'><h2>44</h2></div><div class='as45'><h2>45</h2></div><div class='as46'><h2>46</h2></div><div class='as47'><h2>47</h2></div><div class='as48'><h2>48</h2></div><div class='as49'><h2>49</h2></div><div class='as50'><h2>50</h2></div><div class='as51'><h2>51</h2></div><div class='as52'><h2>52</h2></div><div class='as53'><h2>53</h2></div><div class='as54'><h2>54</h2></div><div class='as55'><h2>55</h2></div><div class='as56'><h2>56</h2></div><div class='as57'><h2>57</h2></div><div class='as58'><h2>58</h2></div><div class='as59'><h2>59</h2></div><div class='as60'><h2>60</h2></div><div class='as61'><h2>61</h2></div><div class='as62'><h2>62</h2></div><div class='as63'><h2>63</h2></div><div class='as64'><h2>64</h2></div><div class='as65'><h2>65</h2></div><div class='as66'><h2>66</h2></div><div class='as67'><h2>67</h2></div><div class='as68'><h2>68</h2></div><div class='as69'><h2>69</h2></div><div class='as70'><h2>70</h2></div><div class='as71'><h2>71</h2></div><div class='as72'><h2>72</h2></div><div class='as73'><h2>73</h2></div><div class='as74'><h2>74</h2></div><div class='as75'><h2>75</h2></div><div class='as76'><h2>76</h2></div><div class='as77'><h2>77</h2></div><div class='as78'><h2>78</h2></div><div class='as79'><h2>79</h2></div><div class='as80'><h2>80</h2></div><div class='as81'><h2>81</h2></div><div class='as82'><h2>82</h2></div><div class='as83'><h2>83</h2></div><div class='as84'><h2>84</h2></div><div class='as85'><h2>85</h2></div><div class='as86'><h2>86</h2></div><div class='as87'><h2>87</h2></div><div class='as88'><h2>88</h2></div><div class='as89'><h2>89</h2></div><div class='as90'><h2>90</h2></div>"
pie.appendChild(divGrafica);

}