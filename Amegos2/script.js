let notas=[
    {name:'DO', src:'wav/a1.wav'},
    {name:'RE', src:'wav/b1.wav'},
    {name:'MI', src:'wav/c1.wav'},
    {name:'FA', src:'wav/d1.wav'},
    {name:'SOL', src:'wav/e1.wav'},
    {name:'LA', src:'wav/f1.wav'},
    {name:'SI', src:'wav/g1.wav'}
];

function parseaAmijos(listanotas) {
    let listaUl=document.getElementById('listanotas');

    for (let i = 0; i < notas.length; i++) {

        listaUl.innerHTML += `<li>
        <div>${notas[i].name}</div>
        </li>`;

        listaUl.onclick = function(){
            let pianoNota = new Audio(notas.src[i]);
            pianoNota.play();
        }
    }
}

parseaAmijos(notas);