var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick",function(event){
    //console.log(event.target)  avisa quem foi o alvo da ação 
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    paiDoAlvo.classList.add("fedeOut"); // realiza a colocação da classe para a transição dos mesmos
    setTimeout(function(){
        paiDoAlvo.remove();
    },2000) // faz que a função espera em milesegundos
    

    //event.target.parentNode.classList.add()
     
});

// pacientes.forEach(function(paciente){// forEach precisa de uma função, podendo ser anômima
//     paciente.addEventListener("dblclick",function(){ // duplo click
//         console.log("Duplo click");
//         this.remove(); // apagar um elemento do htm, this é o dono do evendo
//     })
// })