/* #################################### 
Início verificação de preenchimento de campos do formulário  
*/

function verificar(){
var nome = document.getElementById('nome').value;
var sobrenome = document.getElementById('sobrenome').value;
var email = document.getElementById('email').value;
var fone = document.getElementById('fone').value;
var cpf = document.getElementById('cpf').value;


if (!nome || !sobrenome|| !email || !fone || !cpf){
    alert("Campos não preenchidos, favor preenchê-los");
} else{
    alert("Campos preenchidos com sucesso");
}

}
/* 
Fim verificação de preenchimento de campos do formulário  
*/

/*Inicio da função de validação de campo de telefone
*/

function maskFone(){
    const numeroAtual = document.getElementById('fone').value;
    const isCelular = numeroAtual.length === 11;
    const isFone = numeroAtual.length === 10;
    let = numeroAjustado;
    if(isCelular){
        const part1 = numeroAtual.slice(0,2);
        const part2 = numeroAtual.slice(2,7);
        const part3 = numeroAtual.slice(7,11);
        numeroAjustado = `(${part1}) ${part2}-${part3}`
    } else if(isfone){
        const part1 = numeroAtual.slice(0,2);
        const part2 = numeroAtual.slice(2,6);
        const part3 = numeroAtual.slice(6,10);
        numeroAjustado = `(${part1}) ${part2}-${part3}`
    }
    fone.value = numeroAjustado;
}

/*
Máscara de Celular
*/
function maskCelular(){
    if(fone.value.length == 0){
        fone.value += '(';
    } else if(fone.value.length == 3){
        fone.value += ') 9';
    } else if(fone.value.length == 10){
        fone.value += '-';
    }
}

/*
Máscara para CPF
*/
function maskCPF(){
if(cpf.value.length == 3 || cpf.value.length == 7){
cpf.value += '.';
} else if(cpf.value.length == 11){
cpf.value += '-';
}



}




