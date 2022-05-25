/*console.log("Olá Mundo") Exibe no console do navegador */
/*var titulo = document.querySelector("h1") /*armazenar a variavel*/
//console.log(titulo)
//console.log(titulo.textContent) /*mostra o conteúdo*/

var titulo = document.querySelector(".titulo");//uma boa prática é colocar por classes ou ids pq pode mudar o html			
titulo.textContent = "Aparecida Nutricionista"/*altera a exibição do título*/

var pacientes = document.querySelectorAll(".paciente"); // seleciona toda a classe e ide e retorna uma lista(.classList) 

for (var i = 0; i < pacientes.length /*tamanho da lista*/  ; i++){

    var paciente = pacientes[i]
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaehValido = true; 

    if (peso < 0 || peso >= 1000){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido"
        
    }


    if(altura < 0 || altura >= 3) {
        alturaehValido = false;
        tdImc.textContent = "Altura inválida"
    }


    var imc ;
    alturaehValido && pesoEhValido ?( // método ternário de if e else
        imc = calculaImc(peso,altura),
        tdImc.textContent = imc 
    ):
    (paciente.classList.add("paciente-invalido") // adiciona uma classe no html, recomenda não mudar o visual pelo js, e sim pelo css 
    
    ); 

    
}


function calculaImc(peso,altura){
    var imc = 0 ;
    imc = peso / altura**2;
    return imc.toFixed(2);
};