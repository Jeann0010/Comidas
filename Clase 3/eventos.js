const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Mis comidas";
    setTimeout(function(){
        subtitle2.textContent = "Y sus calificaciones";
    }, 1000);
}, 1000);

//arrays de presidentes del peru desde FUJIMORI

const comidas = [
    {
        "nombre": "arros con pollo",
        "ingredientes": "arros,pollo",
        "tiempo": 2,
        "preparacion": true
    },
    {
        "nombre": "carapulcra con sopa seca",
        "ingredientes": "papa seca, chancho,fideos,yuca,pollo",
        "tiempo": 4,
        "preparacion": false
    },
    {
        "nombre": "tallarines rojos",
        "ingredientes": "tallarines , tomate, carne",
        "tiempo": 1,
        "preparacion": true
    },
    {
        "nombre": "estofado de pollo",
        "ingredientes": "arros,pollo,papa",
        "tiempo": 2,
        "preparacion": true
    },
    {
        "nombre": "aeropuerto",
        "ingredientes": "arros,pollo,carne,chancho,cebolla",
        "tiempo": 2,
        "preparacion": false
    }
  
];


const comidaElement = document.getElementById("comidas"); // Asegúrate de que este es el ID correcto en tu HTML
let contenido = "";
comidas.forEach(function(comida) {
    let claseicon = comida.preparacion ? "facil" : "no-facil";
    let cantidadanios = comida.tiempo + " horas";
    if (comida.tiempo == 1) {
        cantidadanios = "Es super facil la preparacion";
    }
    const template = `
        <div class="comida">
            <div class="icon icon-${claseicon}"></div>
            <div class="data">
                <h4>${comida.nombre}</h4>
                <p>Ingredientes a usar: ${comida.ingredientes}</p>
            </div>
            <div class="Horas de preparacion">
            <p>Tiempo de preparacion: ${cantidadanios}</p>  
            </div>
        </div>
    `;
    contenido += template;
});

comidaElement.innerHTML = contenido; 
