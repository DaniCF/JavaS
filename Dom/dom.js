let elTitulo=document.getElementById('titulo');
let general=document.getElementById('rednobi');
let boldOne=document.getElementById('blue');
let cambiarBoton = document.getElementById('boton')
let cambiarBoton2 = document.getElementById('boton2')
let cambiarBoton3 = document.getElementById('boton3')



cambiarBoton.onclick = function(){
    general.innerHTML = general.innerHTML.toUpperCase();
}
cambiarBoton2.onclick = function(){
    general.innerHTML = general.innerHTML.toLowerCase();
}
cambiarBoton3.onclick = function(){

    general.innerHTML = general.innerHTML.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    

}

