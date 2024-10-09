/*
    Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors.
    The items are compared, and whichever player chooses the more powerful item wins.

    The possible outcomes are:

    Rock destroys scissors.
    Scissors cut paper.
    Paper covers rock.
    If there’s a tie, then the game ends in a draw.
    Our code will break the game into four parts:

    Get the user’s choice.
    Get the computer’s choice.
    Compare the two choices and determine a winner.
    Start the program and display the results.
*/
const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'bomb') {
        return userInput;
    }else{
        console.log('Error! Invalid Value');
    }
}

const getComputerChoice = () => {

    let computerChoice = Math.floor(Math.random() * 3);
    let returnValue;

    switch (computerChoice) {
        case 0:
            returnValue = 'rock';
            break;
        case 1:
            returnValue = 'paper';
            break;
        case 2:
            returnValue = 'scissors';
            break;
        default:
            break;
    }
    return returnValue;
}

const determineWinner = (userChoice, computerChoice) => {

    let output;
    let isTie = false;


    if(userChoice === computerChoice){
        output = 'TIE!';
        isTie = true;
    }

    if(!isTie){
        switch (userChoice) {
            case 'scissors':
                if (computerChoice === 'paper') {
                    output = 'YOU WIN!'
                }else{
                    output = 'You lose...'
                }
                break;
            case 'paper':
                if (computerChoice === 'rock') {
                    output = 'YOU WIN!'
                }else{
                    output = 'You lose...'
                }
                break;
            case 'rock':
                if (computerChoice === 'scissors') {
                    output = 'YOU WIN!'
                }else{
                    output = 'You lose...'
                }
                break;
            case 'bomb':
                output = 'CHEATER WIN!';
                break;
            default:
                break;
        }
    }
    return output;
}

function playGame() {
    let options = ['rock', 'paper', 'scissors', 'bomb'];

    let userChoice = getUserChoice(options[Math.floor(Math.random() * options.length)]);
    let computerChoice = getComputerChoice();

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();