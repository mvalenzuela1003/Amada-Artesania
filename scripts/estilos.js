var menuBtn = document.getElementById('menu-boton');
var menu = document.getElementById('menu');

//origenes
var secinic = document.getElementById('secinic');
var secbien = document.getElementById('secbien');
var secprod = document.getElementById('secprod');
var seccont = document.getElementById('seccont');
var volversec01 = document.getElementById('volversec01');
var volversec02 = document.getElementById('volversec02');
//destinos
var inicio = document.getElementById('inicio');
var bienvenido = document.getElementById('bienvenido');
var sec1 = document.getElementById('productos');
var sec2 = document.getElementById('contacto');

function headerScroll() {
    var cuerpo = document.querySelector('.cuerpo')
    var header = document.getElementById('header');
    var logo = document.getElementById('logo');
    var menuBtn = document.getElementById('menu-boton')
    var menu = document.getElementById('menu');
    var menuLi = document.querySelectorAll('.menu-li');
    var posCuerpo = cuerpo.getBoundingClientRect().bottom;
    var posPantalla = window.innerHeight;



    if (posCuerpo + 5 < posPantalla) {
        header.classList.add('scroll-header');
        logo.classList.add('scroll-logo');
        logo.classList.remove('no-scroll');
        menuBtn.classList.add('scroll-menu-boton');
        menu.classList.add('scroll-menu');
        menuLi.forEach(function(elem) {
            elem.classList.add('scroll-li');
        });
    }
    if (posCuerpo + 5 > posPantalla) {
        header.classList.remove('scroll-header');
        logo.classList.remove('scroll-logo');
        logo.classList.add('no-scroll');
        menuBtn.classList.remove('scroll-menu-boton');
        menu.classList.remove('scroll-menu');
        menuLi.forEach(function(elem) {
            elem.classList.remove('scroll-li');
        });
    }

}

function smoothScroll(destino, duracion) {
    //Posicion del de la parte superior del destino  respecto a la parte superior de la pantalla
    var posInicio = window.pageYOffset;
    var posDestino = destino.getBoundingClientRect().top + posInicio;
    var distancia = posDestino - posInicio;
    var momInicio = null;

    function animacionScroll(momActual) {
        if (momInicio === null) {
            momInicio = momActual;
        }
        var tiempoPasado = momActual - momInicio;
        var run = suavizado(tiempoPasado, posInicio, distancia, duracion);
        if (destino === bienvenido || destino === sec1) {
            run -= 85;
        }
        window.scrollTo(0, run);
        console.log("posicion inicial: " + posInicio);
        console.log("posicion destino: " + posDestino);
        console.log("distancia: " + distancia);

        if (tiempoPasado < duracion) {
            requestAnimationFrame(animacionScroll);
        }
    }


    function suavizado(t, b, c, d) {
        t /= d;
        return c * t * t + b;
    }

    requestAnimationFrame(animacionScroll);

}

function mostrarMenu() {
    var menu = document.getElementById('menu');
    this.classList.toggle('menu-click');
    menu.classList.toggle('mostrar-menu');
    window.addEventListener('scroll', cerrarMenu);
}

function cerrarMenu() {
    var menu = document.getElementById('menu');
    menuBtn.classList.remove('menu-click');
    menu.classList.remove('mostrar-menu');
}


menuBtn.addEventListener('click', mostrarMenu);
window.addEventListener('scroll', headerScroll);



secinic.addEventListener('click', function() {
    smoothScroll(inicio, 500)
});
secbien.addEventListener('click', function() {
    smoothScroll(bienvenido, 1000)
});
secprod.addEventListener('click', function() {
    smoothScroll(sec1, 1000)
});
seccont.addEventListener('click', function() {
    smoothScroll(sec2, 1000)
});
volversec01.addEventListener('click', function() {
    smoothScroll(inicio, 500)
});
volversec02.addEventListener('click', function() {
    smoothScroll(inicio, 500)
});