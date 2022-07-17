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
var playerScore = 0;
var computerScore = 0;
var round = 1;
//var computerSelection = computerPlay();


//




function game(round, playerScore, computerScore, computerPlay, playerPrompt, choices){


    function playRound(round, playerScore, computerScore, computerPlay, playerPrompt, choices) {
        for (; round < 11; round++){
        //if (round <<) repeating if meta
        let playerSelection = playerPrompt(choices);
        let computerSelection = computerPlay(choices);
        //TIE
        if(playerSelection == computerSelection) {
            console.log("TIE");
            computerScore++
            playerScore++
    
        }

        //WIN
        else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            console.log("WIN Rock beats SCISSORS");
            playerScore++
        }

        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            console.log("WIN Scissors beats paper");
            playerScore++
        }

        else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            console.log("WIN PAPER beats ROCK");
            playerScore++;
        }

        

        //LOSS
        else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            console.log("LOSS Paper beats Rock");
            computerScore++;
        }

        else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            console.log("LOSS Scissors beats paper");
            computerScore++;
        }

        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            console.log("LOSS Rock beats scissors");
            computerScore++;
        }

        console.log("PlayerScore: " + playerScore)
        console.log("ComputerScore: " + computerScore)
                
        console.log("round: " + round);
        console.log(computerScore)
        if (playerScore == 5) {
            return "game complete you win!";
        }
        if (computerScore == 5) {
            return "game complete computer wins";
        }
        

    }
    } 

    //for(;round < 6;)
    return playRound(round, playerScore, computerScore, computerPlay, playerPrompt, choices);  
    
}

console.log(game(round, playerScore, computerScore, computerPlay, playerPrompt, choices));