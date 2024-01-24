alert('Boas vindas ao jogo do mundo secreto!');
let numeroSecreto = 6;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//enquanto o chute não for igual ao numero secreto, exibir "chute inválido"

while(chute != numeroSecreto){
    chute =prompt('escolha um número entre 1 e 10');
    if(chute == numeroSecreto){
        alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if(chute >numeroSecreto){
            alert(`O número secreto é menor  que ${chute}`);
        }else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}







