//Needed things

    //array choices

    const choices = ["ROCK", "PAPER", "SCISSORS"];
    



//PROMPT

/*let playerSelection_unsanitized = prompt("Choice")

let playerSelection = playerSelection_unsanitized.toUpperCase();

console.log(playerSelection);*/

//Computer Choice

/*function computerPlay (){


    //Random array pos

    var randomChoice = Math.floor(Math.random() * choices.length)
    console.log(randomChoice)

    //Computer selection

    var tempChoice = choices.slice(randomChoice, randomChoice + 1);

    console.log(String(tempChoice));

    //
    return String(tempChoice);
}
*/


// HARD CODED
let playerSelection = "ROCK";
let computerSelection = "ROCK";

//var computerSelection = computerPlay();

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection) {
        console.log("TIE");
    }
    else if (playerSelection == ) {
        console.log("false");
    }
    else if () {

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

console.log(playRound(playerSelection, computerSelection));