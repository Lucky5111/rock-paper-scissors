//Needed things

    //array choices

    const choices = ["ROCK", "PAPER", "SCISSORS"];
    



//PROMPT

/*let playerSelection_unsanitized = prompt("Choice")

let playerSelection = playerSelection_unsanitized.toUpperCase();

console.log(playerSelection);*/

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

function game(round){
    console.log("a2");
    function playRound(round) {

        //NEW SELECTION
        let computerSelection = computerPlay();
        //NEW SELECTION
        let playerSelection_unsanitized = prompt("Choice");
        
        let playerSelection = playerSelection_unsanitized.toUpperCase();

        //TIE
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
    } 
    for(;round < 6;){
    console.log(playRound);
    

    }
}



console.log(game(round));