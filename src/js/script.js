
const choices = ["ROCK", "PAPER", "SCISSORS"];

var randomChoice = Math.floor(Math.random() * choices.length)
console.log(randomChoice)
var  computerSelection = choices.splice(randomChoice)
console.log(String(computerSelection));


function computerPlay (){
    var computerSelection = Math.floor(Math.random() * choices.length)
    console.log(computerSelection);
}

function game(){

}