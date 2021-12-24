//Needed things

    //array choices

    const choices = ["ROCK", "PAPER", "SCISSORS"];




//PROMPT

let playerSelection_unsanitized = prompt("Choice")

let playerSelection = playerSelection_unsanitized.toUpperCase();

console.log(playerSelection);

//Computer Choice

function computerPlay (){


    //Random array pos

    var randomChoice = Math.floor(Math.random() * choices.length)
    console.log(randomChoice)

    //Computer selection

    var tempChoice = choices.slice(randomChoice, randomChoice + 1);

    console.log(String(tempChoice));

    //
    return String(tempChoice);
}

var computerSelection = computerPlay();

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection) {
        return "TIE";
    }

    if(playerSelection == "ROCK", computerSelection == "PAPER"){
        return "I win!";
    }
}



//Later use
function game(playerSelection, computerSelection){

    function playRound(playerSelection, computerSelection) {

        if(playerSelection == computerSelection) {
            return "TIE";
        }

        if(playerSelection == "ROCK", computerSelection == "PAPER"){
            return "I win!";
        }


    }

}