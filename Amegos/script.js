let saludaBtn = document.getElementsByClassName('saluda');
let saludaNames = document.getElementsByClassName('amigoboton');
let borrarLista = document.getElementsByClassName('borrar');
let listas = document.getElementById('lista');

for (let index = 0; index < saludaBtn.length; index++) {
    saludaBtn[index].onclick=function(){
        let name = this.getAttribute('data-name');
        let idp = this.getAttribute('data-idp');
        let infop=document.getElementById(idp).innerHTML;
        alert('Hello there, General ' + infop);
    }
    
}

for (let index = 0; index < borrarLista.length; index++) {
    borrarLista[index].onclick=function(){
        let elidLI = this.getAttribute('data-li');
        removeElement(elidLI);
    }
    
}

function removeElement(id){
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}