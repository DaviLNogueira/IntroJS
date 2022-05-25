

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){//"escuta alguns tipo de evento,sempre colocar uma ação
    event.preventDefault(); //previne o comportamento padrão,e event dele ser passado ma função
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value; //seleciona os valores do formulario com os IDs
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr"); //criar um elemento para o css

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome // faz com que os elementos sejam atribuitos ao html
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);// coloca as filhas ou seja as subdivisões dentro da da tag
    pacienteTr.appendChild(pesoTd); 
    pacienteTr.appendChild(alturaTd); 
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
     
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)



})