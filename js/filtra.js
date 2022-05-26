var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){ // selecionar o campo de input escutar o input
    console.log(this.value); // está referênciando ao campofiltro;
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for(var i = 0 ; i < pacientes.length ; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i")//1° parametro é o que deve ser buscado , 2° parametro são umas ou mais flags(como queremos que a expressão busque)
            if(!expressao.test(nome)){/*buscar um pedaço da expressão*/

                paciente.classList.add("invisivel");
            }
            else{
                paciente.classList.remove("invisivel")
            }
        }
    }
    else{
        for(var i  = 0 ; i < pacientes.length;i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }
})