let player = {
    name:"Taylor",
    chips:400,
};

//initializer
let cards = [];
let sum = 0;

//keeps track of the winner 
let hasBlackJack = false;
let isAlive = false;

//display message
let message="";
let messageJas = document.querySelector("cards");

//display player (me)
playerJas = document.querySelector("player-Jas");
playerJas.innerHTML = player.name + ":$" + player.chips;

//gets a random card
function getRandonCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    
    //if card drawn is K11, Q12, J13 then 10 will be the value; 
    //if card is ACE1;
    //then 11 will be value;

    if(randomNumber > 10){
        return 10;
    } else if (randomNumber ===1){
        return 11;
    } else{
        return randomNumber;
    }
}

//starts game
function startGame(){
    isAlive = true;
    let firstCard = getRandonCard();
    let secondCard = getRandonCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

//display game

function renderGame(){
    //renders sum 
    sumJas.innerHTML = "Sum: " + sum;
    //renders cards drawn
    cardsJas.innerHTML = "Cards: ";
    //for loop renders out all cards
    for(i = 0; i < cards.length;i++){
        cardsJas.innerHTML += cards[i] + " ";
    }
    if(sum <= 20){
        message = "Do you want a new card?";
    } else if(sum === 21){
        message = "You got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out!";
        isAlive = false;
    } 
    //renders message 
    messageJas.innerHTML = message;
}

//pulls new card only if conditions are meant
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandonCard();
        sum += card;
        cards.push(card); //pushes cards to card array
        console.log(cards);
        renderGame;
    }
}