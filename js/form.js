var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacientedoFormulario(form);
        adicionaPacienteNaTabela(paciente)
        form.reset();
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montartr(paciente);
    
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensErros(erros)
        return;

    }
    var mensagensErro = document.querySelector("#mesagens-erros");
    mensagensErro.innerHTML = "";
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}
function exibeMensagensErros(erros){
    
    var ul = document.querySelector("#mesagens-erros")
    ul.innerHTML = ""
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        console.log(ul.value);
        ul.appendChild(li);
    })
}

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
    erros = []

    if(paciente.nome.length == 0){
        erros.push("Campo nome está vazio")
    }

    if(paciente.gordura.length == 0){
        erros.push("Campo gordura está vazio");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso está inválido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("A altura está inválido")
    }
    return erros
}