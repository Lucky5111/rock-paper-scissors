//Needed things

    //array choices
console.log("starting...");
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    



function playerPrompt (choices){

let playerSelection_unsanitized = prompt("Choice")

let playerSelection = playerSelection_unsanitized.toUpperCase();

return playerSelection;
}
//Computer Choice



function computerPlay (choices){


    //Random array pos

    var randomChoice = Math.floor(Math.random() * choices.length)
    console.log(randomChoice)

    //Computer selection

    var tempChoice = choices.slice(randomChoice, randomChoice + 1);

    let result = String(tempChoice);

    return result;

    }



// HARD CODED
    //Debug
    //let playerSelection = "ROCK";
    //let computerSelection = "SCISSORS";
let playerScore = 0;
let computerScore = 0;
let round = 0;
//var computerSelection = computerPlay();


//



console.log("a");

function game(round, playerScore, computerScore, computerPlay, playerPrompt, choices){
console.log("a2");
    
    function playRound(round, playerScore, computerScore, computerPlay, playerPrompt, choices) {

        let playerSelection = playerPrompt(choices);
        let computerSelection = computerPlay(choices);
        /*//TIE
        if(playerSelection == computerSelection) {
            console.log("TIE");
    
        }

        //WIN
        else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            console.log("WIN Rock beats SCISSORS");
        }

        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            console.log("WIN Scissors beats paper");
        }

        else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            console.log("WIN PAPER beats ROCK");
        }

        

        //LOSS
        else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            console.log("LOSS Paper beats Rock");
        }

        else if (playerSelection == "Paper" && computerSelection == "SCISSORS") {
            console.log("LOSS Scissors beats paper");
        }

        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            console.log("LOSS Rock beats scissors");
        }
        
        round ++;
        
        console.log("round: " + round);

        */
        return computerSelection;
    } 
    //for(;round < 6;)
    return playRound(round, playerScore, computerScore, computerPlay, playerPrompt, choices);    
}

console.log(game(round, playerScore, computerScore, computerPlay, playerPrompt, choices));
