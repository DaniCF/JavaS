document.getElementById('accederbtn').onclick = (function() {
    let formValid = document.getElementById('loginForm').checkValidity();
    if(formValid){
        //Enviar
        // falso : http://www.mocky.io/v2/5bd977b22f0000590006d156
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd973212f00006d0006d11f",
            data: {username: document.getElementById('username').value, password : document.getElementById('password').value}
        }).done(function(data){
            console.log(data);
            if(data.result){
                window.location.href='dashboard.html';
            }else{
                //error

            }
        })
    }
    else{
        event.preventDefault();
        //mostrar mensaje y no enviar
        document.querySelectorAll('.error').forEach(elem => {elem.innerHTML='';});

        if(!document.getElementById('username').checkValidity()){
            document.getElementById('errorusername').innerHTML="Completa el username con el formato correcto";
        }
        if(!document.getElementById('password').checkValidity()){
            document.getElementById('errorpass').innerHTML="Completa el password con el formato correcto";
        }
    }
})