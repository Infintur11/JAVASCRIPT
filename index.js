let player={
    name:"Gaurav",
    chips:145
}
let cards=[]
let sum=0;
let hasJack = false
let isAlive = false
let message =""

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name+" :$"+player.chips
function startGame(){
    //we initialised here because we want to start game after
    //this function is triggered else game will start beforehand only
    //and due to this we can start anytime
    let firstCard = getRandom()
    let secondCard = getRandom()
    isAlive=true
    hasJack=false
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards: "//this line helps us to not repeat same thing again instead add new card
    for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=" "+cards[i]+" "
    }
    sumEl.textContent="Sum:"+sum+" ";
    if(sum<=20){
        message="Do you want to draw one more card ";
    }
    else if(sum === 21){
        message="You won";
        hasJack=true;
    }
    else{
        message="You lost";
        isAlive=false
    }
    messageEl.textContent=message;
}

function newCard(){
    if(!hasJack&&isAlive){//it runs when not having jack and isAlive
    let card= getRandom()
    cards.push(card)
    sum+=card
    renderGame();
    }
}

function getRandom(){
    let random = Math.floor(Math.random()*13 +1);
    if(random===1){//for ace we used 1 so we assumed ace value to be 11
        return 11;
    }
    else if(random>10){
        return 10;//for king queen and jack we have values only 10 
    }
    else{
        return random;
    }
}