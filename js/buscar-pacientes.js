var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click",function(){
    console.log("Buscar paciente")

    var xhr = new XMLHttpRequest() // realizar a requisição http
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load",function(){
        //console.log(xhr.responseText) //carregar a resposta e imprimir no console
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){// mostrar o status da requisição http
            var resposta = xhr.responseText; // retorna  a resposta
            erroAjax.classList.add("invisivel");

            var pacientes = JSON.parse(resposta); // irá devolver um objeto em javascript
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            })
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel")
        }

    });

    xhr.send() //enviar a requisição

});