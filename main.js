let cardOne = document.querySelector('.cardOne')
let cardTwo = document.querySelector('.cardTwo')

let randomMessage

randomMessage = Math.round(Math.random() * 7);

switch (randomMessage) {
    case 1:
    document.querySelector(".quote-box p").innerText =
    "Amizade e Amor são coisas que se unem num piscar de olhos.";
    break;
    
    case 2:
    document.querySelector(".quote-box p").innerText =
    "Todas as coisas são difíceis antes de se tornarem fáceis.";
    break;
    
    case 3:
    document.querySelector(".quote-box p").innerText =
    "O amor está sempre mais próximo do que você imagina.";
    break;
    
    case 4:
    document.querySelector(".quote-box p").innerText =
    "Você sempre será a sua melhor companhia!";
    break;
    
    case 5:
    document.querySelector(".quote-box p").innerText =
    "A inspiração vem dos outros. A motivação vem de dentro de nós.";
    break;
    
    case 6:
    document.querySelector(".quote-box p").innerText =
    "O riso é a menor distância entre duas pessoas.";
    break;
}

function newMessage(event){
    event.preventDefault()

    cardOne.classList.add('hide')
    cardTwo.classList.remove('hide')

    console.log(randomMessage)
}

const reset = () => {
    cardOne.classList.add("hide");
    cardTwo.classList.remove("hide");

    window.location.reload(true)

    randomMessage = Math.round(Math.random() * 6);
};
