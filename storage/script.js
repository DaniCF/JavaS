window.localStorage.setItem('palabra_almacenada','Valor de la palabra');

let amigosRetStr = window.localStorage.getItem('lista_amigos');
let amigosRet = JSON.parse(amigosRetStr);

document.getElementById('amigos').innerHTML=function(){
    let html='';

    amigosRet.forEach(element => {
        html += `<li>${param} - ${element.name} | ${element.email}</li>`;
    });

    return html;
}();