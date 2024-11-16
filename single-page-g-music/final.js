/*
 *	Vitali, Juan José
 */
var producto = { 
    producto1: { nombre: "Stratocaster"                    , precio: 52000 , imagen: "galeria/guitarra-electrica-stratocaster.png"  , descripcion: "Guitarra electrica modelo stratocaster en color negro."}, 
    producto2: { nombre: "Telecaster"                      , precio: 23000 , imagen: "galeria/guitarra-electrica-telecaster.png"    , descripcion: "Guitarra electrica modelo telecaster en color madera."},
    producto3: { nombre: "Les Paul"                        , precio: 46000 , imagen: "galeria/guitarra-electrica-lespaul.png"       , descripcion: "Guitarra electrica modelo Les Paul en color rojo y naranja."},
    producto4: { nombre: "Semi Hollow"                     , precio: 35000 , imagen: "galeria/guitarra-electrica-semihollow.png"    , descripcion: "Guitarra electrica modelo semi hollow en color verde."},
    producto5: { nombre: "SG"                              , precio: 45000 , imagen: "galeria/guitarra-electrica-SG.png"            , descripcion: "Guitarra electrica modelo SG en color rojo."},
    producto6: { nombre: "PRS SE Estandar"                 , precio: 60000 , imagen: "galeria/guitarra-electrica-prs.png"           , descripcion: "Guitarra electrica modelo PRS SE Estandar en color azul y turquesa."},
    producto7: { nombre: "Kit de guitarra electrica basico", precio: 20000 , imagen: "galeria/kit-guitarra-electrica.png"           , descripcion: "Kit basico, inclucye guitarra electrica stratocaster, aplificador, funda, correa, afinador, cable, cuerdas, puas."}
}

const catalogo        = document.getElementById("catalogo").children;
const categoria       = document.getElementById("categorias");
const categoriaTodos  = categoria.firstElementChild.firstElementChild;
const categoriaFender = categoriaTodos.nextElementSibling;
const categoriaGibson = categoriaFender.nextElementSibling;
const categoriaPRS    = categoriaGibson.nextElementSibling;
const modalProducto   = document.getElementById("modalProducto")
const inicio          = document.getElementById("barra").firstElementChild;
const tutorial        = inicio.nextElementSibling;
const alumno          = tutorial.nextElementSibling;

var infoProducto, precioProducto, contador = 0, acumulador = 0;










categoriaTodos.onclick = function(){
    do {
        catalogo[0].remove();

    } while (catalogo.length != 0);
   
    crearProductos();
    productosFender();
    productosGibson();
    productosPRS();

    ofertaEspecial();
    setTimeout(cerrarOfertaEspecial, 10000)
}

categoriaFender.onclick = function(){


    do {
        catalogo[0].remove();

    } while (catalogo.length != 0);
   
    crearProductos();
    productosFender();

    for (let i = 0; i < 4; i++){
        catalogo[2].remove();

    }
    ofertaEspecial();
    setTimeout(cerrarOfertaEspecial, 10000)
}


categoriaGibson.onclick = function(){
    do {
        catalogo[0].remove();

    } while (catalogo.length != 0);
   
    crearProductos();
    productosGibson();

    catalogo[5].remove();
    catalogo[1].remove();
    catalogo[0].remove();

    ofertaEspecial();
    setTimeout(cerrarOfertaEspecial, 10000)
    
}

categoriaPRS.onclick = function(){
    do {
        catalogo[0].remove();

    } while (catalogo.length != 0);
   
    crearProductos();
    productosPRS();
    for (let i = 0; i < 5; i++){
        catalogo[0].remove();

    }

    ofertaEspecial();
    setTimeout(cerrarOfertaEspecial, 10000)
}



function crearProductos() {

    for (let i = 0; i < 6; i++) {
        var nuevoDiv = document.createElement("div");
        document.getElementById("catalogo").appendChild(nuevoDiv);
        nuevoDiv.setAttribute("class", "producto")
        
    }


 
}



function productosFender() {

    var nuevoImg        = document.createElement("img");
    var nuevoH3         = document.createElement("h3");
    nuevoH3.innerHTML   = producto.producto1.nombre;
    var nuevoP          = document.createElement("p");
    nuevoP.innerHTML    = "$" + producto.producto1.precio;
    var nuevoP2         = document.createElement("p");
    nuevoP2.innerHTML   = producto.producto1.descripcion;
    var nuevoDiv        = document.createElement("div")
    nuevoDiv.setAttribute("class", "boton");
    nuevoSpan           = document.createElement("span");
    nuevoSpan.innerHTML = "Ver mas";
    catalogo[0].appendChild(nuevoImg);
    catalogo[0].firstElementChild.src = producto.producto1.imagen
    catalogo[0].appendChild(nuevoH3);
    catalogo[0].appendChild(nuevoP);
    catalogo[0].appendChild(nuevoP2);
    catalogo[0].appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoSpan);
    catalogo[0].setAttribute("id", "stratocaster")
    catalogo[0].setAttribute("onclick", "stratocaster();")

    

    var nuevoImg        = document.createElement("img");
    var nuevoH3         = document.createElement("h3");
    nuevoH3.innerHTML   = producto.producto2.nombre;
    var nuevoP          = document.createElement("p");
    nuevoP.innerHTML    = "$" + producto.producto2.precio;
    var nuevoP2         = document.createElement("p");
    nuevoP2.innerHTML   = producto.producto2.descripcion;
    var nuevoDiv        = document.createElement("div")
    nuevoDiv.setAttribute("class", "boton");
    nuevoSpan           = document.createElement("span");
    nuevoSpan.innerHTML = "Ver mas";
    catalogo[1].appendChild(nuevoImg);
    catalogo[1].firstElementChild.src = producto.producto2.imagen
    catalogo[1].appendChild(nuevoH3);
    catalogo[1].appendChild(nuevoP);
    catalogo[1].appendChild(nuevoP2);
    catalogo[1].appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoSpan);
    catalogo[1].setAttribute("id", "telecaster")
    catalogo[1].setAttribute("onclick", "telecaster();")



}

function productosGibson(){

    var nuevoImg        = document.createElement("img");
    var nuevoH3         = document.createElement("h3");
    nuevoH3.innerHTML   = producto.producto3.nombre;
    var nuevoP          = document.createElement("p");
    nuevoP.innerHTML    = "$" + producto.producto3.precio;
    var nuevoP2         = document.createElement("p");
    nuevoP2.innerHTML   = producto.producto3.descripcion;
    var nuevoDiv        = document.createElement("div")
    nuevoDiv.setAttribute("class", "boton");
    nuevoSpan           = document.createElement("span");
    nuevoSpan.innerHTML = "Ver mas";
    catalogo[2].appendChild(nuevoImg);
    catalogo[2].firstElementChild.src = producto.producto3.imagen
    catalogo[2].appendChild(nuevoH3);
    catalogo[2].appendChild(nuevoP);
    catalogo[2].appendChild(nuevoP2);
    catalogo[2].appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoSpan);
    catalogo[2].setAttribute("id", "lesPaul")
    catalogo[2].setAttribute("onclick", "lesPaul();")




    var nuevoImg        = document.createElement("img");
    var nuevoH3         = document.createElement("h3");
    nuevoH3.innerHTML   = producto.producto4.nombre;
    var nuevoP          = document.createElement("p");
    nuevoP.innerHTML    = "$" + producto.producto4.precio;
    var nuevoP2         = document.createElement("p");
    nuevoP2.innerHTML   = producto.producto4.descripcion;
    var nuevoDiv        = document.createElement("div")
    nuevoDiv.setAttribute("class", "boton");
    nuevoSpan           = document.createElement("span");
    nuevoSpan.innerHTML = "Ver mas";
    catalogo[3].appendChild(nuevoImg);
    catalogo[3].firstElementChild.src = producto.producto4.imagen
    catalogo[3].appendChild(nuevoH3);
    catalogo[3].appendChild(nuevoP);
    catalogo[3].appendChild(nuevoP2);
    catalogo[3].appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoSpan);
    catalogo[3].setAttribute("id", "semiHollow")
    catalogo[3].setAttribute("onclick", "semiHollow();")




    var nuevoImg        = document.createElement("img");
    var nuevoH3         = document.createElement("h3");
    nuevoH3.innerHTML   = producto.producto5.nombre;
    var nuevoP          = document.createElement("p");
    nuevoP.innerHTML    = "$" + producto.producto5.precio;
    var nuevoP2         = document.createElement("p");
    nuevoP2.innerHTML   = producto.producto5.descripcion;
    var nuevoDiv        = document.createElement("div")
    nuevoDiv.setAttribute("class", "boton");
    nuevoSpan           = document.createElement("span");
    nuevoSpan.innerHTML = "Ver mas";
    catalogo[4].appendChild(nuevoImg);
    catalogo[4].firstElementChild.src = producto.producto5.imagen
    catalogo[4].appendChild(nuevoH3);
    catalogo[4].appendChild(nuevoP);
    catalogo[4].appendChild(nuevoP2);
    catalogo[4].appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoSpan);
    catalogo[4].setAttribute("id", "SG")
    catalogo[4].setAttribute("onclick", "SG();")




}

function productosPRS(){
    
    var nuevoImg        = document.createElement("img");
    var nuevoH3         = document.createElement("h3");
    nuevoH3.innerHTML   = producto.producto6.nombre;
    var nuevoP          = document.createElement("p");
    nuevoP.innerHTML    = "$" + producto.producto6.precio;
    var nuevoP2         = document.createElement("p");
    nuevoP2.innerHTML   = producto.producto6.descripcion;
    var nuevoDiv        = document.createElement("div")
    nuevoDiv.setAttribute("class", "boton");
    nuevoSpan           = document.createElement("span");
    nuevoSpan.innerHTML = "Ver mas";
    catalogo[5].appendChild(nuevoImg);
    catalogo[5].firstElementChild.src = producto.producto6.imagen
    catalogo[5].appendChild(nuevoH3);
    catalogo[5].appendChild(nuevoP);
    catalogo[5].appendChild(nuevoP2);
    catalogo[5].appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoSpan);
    catalogo[5].setAttribute("id", "PRS")
    catalogo[5].setAttribute("onclick", "PRS();")




}



    



crearProductos();
productosFender();
productosGibson();
productosPRS();







 function stratocaster(){
    modalProducto.style.visibility = "visible";
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.src = producto.producto1.imagen
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = producto.producto1.nombre;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = producto.producto1.precio;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = producto.producto1.descripcion;

    

        document.getElementById("modalProducto").firstElementChild.lastElementChild.firstElementChild.onclick = function(){

        infoProducto    = producto.producto1.nombre;
        precioProducto  = producto.producto1.precio; 

        var nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = infoProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.appendChild(nuevoLi);

        var nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " $";
        nuevoLi.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = precioProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);


        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " [X]"
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan.setAttribute("href", "#");
        nuevoSpan.setAttribute("onclick", "removerLi(this)");
           
        contadorSuma();
        acumuladorSuma();



    }
        
}


function telecaster(){
    modalProducto.style.visibility = "visible";
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.src = producto.producto2.imagen
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = producto.producto2.nombre;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = producto.producto2.precio;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = producto.producto2.descripcion;

        document.getElementById("modalProducto").firstElementChild.lastElementChild.firstElementChild.onclick = function(){

        infoProducto    = producto.producto2.nombre;
        precioProducto  = producto.producto2.precio;    

        var nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = infoProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.appendChild(nuevoLi);

        var nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " $";
        nuevoLi.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = precioProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " [X]"
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan.setAttribute("href", "#");
        nuevoSpan.setAttribute("onclick", "removerLi(this)");

        contadorSuma();
        acumuladorSuma();

    }
}


function lesPaul(){
    modalProducto.style.visibility = "visible";
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.src = producto.producto3.imagen
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = producto.producto3.nombre;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = producto.producto3.precio;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = producto.producto3.descripcion;

        document.getElementById("modalProducto").firstElementChild.lastElementChild.firstElementChild.onclick = function(){

        infoProducto    = producto.producto3.nombre;
        precioProducto  = producto.producto3.precio;  

        var nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = infoProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.appendChild(nuevoLi);

        var nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " $";
        nuevoLi.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = precioProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " [X]"
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan.setAttribute("href", "#");
        nuevoSpan.setAttribute("onclick", "removerLi(this)");

        contadorSuma();
        acumuladorSuma();

    }
}


function semiHollow(){
    modalProducto.style.visibility = "visible";
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.src = producto.producto4.imagen
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = producto.producto4.nombre;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = producto.producto4.precio;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = producto.producto4.descripcion;

        document.getElementById("modalProducto").firstElementChild.lastElementChild.firstElementChild.onclick = function(){

        infoProducto    = producto.producto4.nombre;
        precioProducto  = producto.producto4.precio;    

        var nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = infoProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.appendChild(nuevoLi);

        var nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " $";
        nuevoLi.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = precioProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " [X]"
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan.setAttribute("href", "#");
        nuevoSpan.setAttribute("onclick", "removerLi(this)");

        contadorSuma();
        acumuladorSuma();

    }
}


function SG(){
    modalProducto.style.visibility = "visible";
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.src = producto.producto5.imagen
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = producto.producto5.nombre;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = producto.producto5.precio;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = producto.producto5.descripcion;

        document.getElementById("modalProducto").firstElementChild.lastElementChild.firstElementChild.onclick = function(){

        infoProducto    = producto.producto5.nombre;
        precioProducto  = producto.producto5.precio;    

        var nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = infoProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.appendChild(nuevoLi);

        var nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " $";
        nuevoLi.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = precioProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " [X]"
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan.setAttribute("href", "#");
        nuevoSpan.setAttribute("onclick", "removerLi(this)");

        contadorSuma();
        acumuladorSuma();

    }
}


function PRS(){
    modalProducto.style.visibility = "visible";
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.src = producto.producto6.imagen
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = producto.producto6.nombre;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = producto.producto6.precio;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = producto.producto6.descripcion;

        document.getElementById("modalProducto").firstElementChild.lastElementChild.firstElementChild.onclick = function(){

        infoProducto    = producto.producto6.nombre;
        precioProducto  = producto.producto6.precio;    

        var nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = infoProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.appendChild(nuevoLi);

        var nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " $";
        nuevoLi.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = precioProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " [X]"
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan.setAttribute("href", "#");
        nuevoSpan.setAttribute("onclick", "removerLi(this)");

        contadorSuma();
        acumuladorSuma();

    }
}


function ofertaEspecialModal(){
    modalProducto.style.visibility = "visible";
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.src = producto.producto7.imagen
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = producto.producto7.nombre;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = producto.producto7.precio;
    modalProducto.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = producto.producto7.descripcion;

        document.getElementById("modalProducto").firstElementChild.lastElementChild.firstElementChild.onclick = function(){

        infoProducto    = producto.producto7.nombre;
        precioProducto  = producto.producto7.precio;    

        var nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = infoProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.appendChild(nuevoLi);

        var nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " $";
        nuevoLi.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = precioProducto;
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan = document.createElement("span");
        nuevoSpan.innerHTML = " [X]"
        document.getElementById("modalCarrito").firstElementChild.lastElementChild.lastElementChild.lastElementChild.appendChild(nuevoSpan);

        nuevoSpan.setAttribute("href", "#");
        nuevoSpan.setAttribute("onclick", "removerLi(this)");

        contadorSuma();
        acumuladorSuma();

        cerrarOfertaEspecial();


    }
}




modalProducto.firstElementChild.firstElementChild.onclick = function(){
    modalProducto.style.visibility = "hidden";
}

document.getElementById("carrito").firstElementChild.onclick = function(){
    document.getElementById("modalCarrito").style.visibility = "visible";
    document.getElementById("modalCarrito").lastElementChild.previousElementSibling.setAttribute("onclick", "vaciarCarrito();")

}

document.getElementById("modalCarrito").firstElementChild.firstElementChild.onclick = function(){
    document.getElementById("modalCarrito").style.visibility = "hidden";
    
}

function removerLi(nodo) {
    var element = nodo;
    element.parentNode.parentNode.remove();
    contador--;
    document.getElementById("miniCarrito").firstElementChild.firstElementChild.innerHTML = contador;
    document.getElementById("modalCarrito").firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML = contador;
    var restarPrecio = parseInt(nodo.parentNode.innerHTML);

    acumulador = acumulador - restarPrecio;
    document.getElementById("miniCarrito").lastElementChild.firstElementChild.innerHTML = acumulador;
    document.getElementById("modalCarrito").firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = acumulador;

   

}

function contadorSuma(){
    contador++;
    document.getElementById("miniCarrito").firstElementChild.firstElementChild.innerHTML = contador;
    document.getElementById("modalCarrito").firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML = contador;
}

function acumuladorSuma(){
    acumulador = acumulador + precioProducto;
    document.getElementById("miniCarrito").lastElementChild.firstElementChild.innerHTML = acumulador;
    document.getElementById("modalCarrito").firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = acumulador;


}

function vaciarCarrito(){
    document.getElementById("modalCarrito").firstElementChild.lastElementChild.remove();
    contador = 0;
    document.getElementById("miniCarrito").firstElementChild.firstElementChild.innerHTML = contador;
    document.getElementById("modalCarrito").firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML = contador;
    acumulador = 0;
    document.getElementById("miniCarrito").lastElementChild.firstElementChild.innerHTML = acumulador;
    document.getElementById("modalCarrito").firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = acumulador;


}


document.getElementById("modalCarrito").lastElementChild.onclick = function(){

    document.getElementById("formulario").style.visibility = "visible";
    document.getElementById("modalCarrito").style.visibility = "hidden";
}

document.getElementById("formulario").firstElementChild.onclick = function(){
    document.getElementById("formulario").style.visibility = "hidden";

}

function ofertaEspecial(){

    document.getElementById("modalOferta").style.visibility = "visible";

    nuevoDiv = document.createElement("div")
    document.getElementById("modalOferta").appendChild(nuevoDiv);
    nuevoDiv.setAttribute("id", "ofertaEspecial");

    var nuevoH3         = document.createElement("h3");
    nuevoH3.innerHTML   = "Oferta Especial";
    document.getElementById("ofertaEspecial").appendChild(nuevoH3);

    nuevoImg = document.createElement("img");
    nuevoImg.src = producto.producto7.imagen;
    document.getElementById("ofertaEspecial").appendChild(nuevoImg);

    var nuevoH3         = document.createElement("h3");
    nuevoH3.innerHTML   = producto.producto7.nombre;
    document.getElementById("ofertaEspecial").appendChild(nuevoH3);

    nuevoDiv            = document.createElement("div")
    nuevoDiv.setAttribute("class", "boton");
    document.getElementById("ofertaEspecial").appendChild(nuevoDiv);

    nuevoSpan           = document.createElement("span");
    nuevoSpan.innerHTML = "Ver mas";
    nuevoDiv.appendChild(nuevoSpan);

    nuevoSpan.setAttribute("onclick", "ofertaEspecialModal();");




       
}

document.getElementById("modalOferta").firstElementChild.onclick = function(){

    cerrarOfertaEspecial();

}

function cerrarOfertaEspecial(){
    document.getElementById("modalOferta").style.visibility = "hidden";
    document.getElementById("modalOferta").lastElementChild.remove();
}











inicio.onclick = function(){
    


    
    document.getElementsByClassName("titulosInicio")[0].style.visibility = "visible";
    document.getElementsByClassName("titulosInicio")[1].style.visibility = "visible";
    categoria.style.display = "block";

    document.getElementById("alumno").style.visibility = "hidden";
    
    if (catalogo[0]) {
    
        do {
            catalogo[0].remove();

        } while (catalogo.length != 0);
    }
    

    crearProductos();
    productosFender();
    productosGibson();
    productosPRS();
    

    
    if (document.getElementById("alumno").firstElementChild.firstElementChild) {
        do {
            document.getElementById("alumno").firstElementChild.children[0].remove();
        } while (document.getElementById("alumno").firstElementChild.children.length != 0);    
    }

    document.getElementById("tutorial").firstElementChild.remove();


}






tutorial.onclick = function(){
    


    document.getElementById("tutorial").innerHTML = '<iframe src="https://www.youtube.com/embed/S_QIaGgLJ-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
   
    document.getElementById("alumno").style.visibility = "hidden";
    document.getElementsByClassName("titulosInicio")[0].style.visibility = "hidden";
    document.getElementsByClassName("titulosInicio")[1].style.visibility = "hidden";
    categoria.style.display = "none";
    
    
    if (catalogo[0]) {
        
        do {
            catalogo[0].remove();

        } while (catalogo.length != 0);
    }

    if (document.getElementById("alumno").firstElementChild.firstElementChild) {
        do {
            document.getElementById("alumno").firstElementChild.children[0].remove();
        } while (document.getElementById("alumno").firstElementChild.children.length != 0);    
    }
    


    
}






alumno.onclick = function(){
    


    document.getElementById("tutorial").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/S_QIaGgLJ-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    document.getElementsByClassName("titulosInicio")[0].style.visibility = "hidden";
    document.getElementsByClassName("titulosInicio")[1].style.visibility = "hidden";
    document.getElementById("alumno").style.visibility = "visible";
    categoria.style.display = "none";
    
    
    if (catalogo[0]) {
        
        do {
            catalogo[0].remove();

        } while (catalogo.length != 0);
    }

    document.getElementById("tutorial").firstElementChild.remove();

    if (document.getElementById("alumno").firstElementChild.firstElementChild) {
        do {
            document.getElementById("alumno").firstElementChild.children[0].remove();
        } while (document.getElementById("alumno").firstElementChild.children.length != 0);    
    }

    nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Alumno: Juan José Vitali";
    document.getElementById("alumno").firstElementChild.appendChild(nuevoLi);

    nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Cuatrimestre: 2do";
    document.getElementById("alumno").firstElementChild.appendChild(nuevoLi);

    nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Comisión: 2a";
    document.getElementById("alumno").firstElementChild.appendChild(nuevoLi);

    nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Turno: tarde";
    document.getElementById("alumno").firstElementChild.appendChild(nuevoLi);

    nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Materia: Programación I";
    document.getElementById("alumno").firstElementChild.appendChild(nuevoLi);

    nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Profesor: Potente Alejandro";
    document.getElementById("alumno").firstElementChild.appendChild(nuevoLi);
   
    

}

document.getElementById("alumno").style.visibility = "hidden";







