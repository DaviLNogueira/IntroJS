var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacientedoFormulario(form);

    error = validaPaciente(paciente)
    if(error.length > 0){
        alert(error);
    }
    else{
        var pacienteTr = montartr(paciente);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        form.reset();
    } 
})
function obtemPacientedoFormulario(form){
    var paciente = { // criando objetos com Js
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
};

function montartr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"peso-nome")); 
    pacienteTr.appendChild(montaTd(paciente.altura,"altura-nome")); 
    pacienteTr.appendChild(montaTd(paciente.gordura,"gordura-nome"));
    pacienteTr.appendChild(montaTd(paciente.imc,"imc-nome"));

    return pacienteTr;
};


function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    if (paciente.nome.length == 0){
        return "Campo nome está vazio"
    }

    if (paciente.nome.length == 0 ){
        return "Campo gordura está vazio"
    }
   if (!validaPeso(paciente.peso)){
        return "Peso é inválido"; // colocar elementos no array
   }
   if(!validaAltura(paciente.altura)){
        return "Altura é inválida";
   }     
}