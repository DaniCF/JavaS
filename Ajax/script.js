$('#cargarbtn').click(function(){

    $.ajax({
        url: "http://www.mocky.io/v2/5bd887d0310000593a474f03",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);

        $('notas').html(function (){
            let htmlAmigos = '';
            amigosFromServer.forEach(unAmigo => {
                htmlAmigos += `<li>
                <div>${unAmigo.name}</div>
                <div><button class="saludaBtn" data-value="${unAmigo.name}"</button></div>
                </li>>`;
            })

            return htmlAmigos;
        })
    })
})