let notas=[
    {name:'DO', src:'./wav/a1.wav'},
    {name:'RE', src:'./wav/b1.wav'},
    {name:'MI', src:'./wav/c1.wav'},
    {name:'FA', src:'./wav/d1.wav'},
    {name:'SOL', src:'./wav/e1.wav'},
    {name:'LA', src:'./wav/f1.wav'},
    {name:'SI', src:'./wav/g1.wav'}
];

$('#listanotas').html(function () {
    let htmlAmigos='';
    notas.forEach(unAmigo =>{
        htmlAmigos += `<li><div>${unAmigo.name}</div></li>`;
    })

    return htmlAmigos;
})