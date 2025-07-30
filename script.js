let choices = document.querySelectorAll(".choice");
let result=document.querySelector("#result");
let you=document.querySelector("#you");
let computer=document.querySelector("#computer");

let userScore=0;
let computerScore=0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    let choose = ['stone', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    let computerChoice = choose[index];
    if(userChoice===computerChoice){
        userScore++;
        computerScore++;
        you.innerText=" You : "+userScore;
        computer.innerText=" Computer : "+computerScore;
        result.innerText="Its a tie .. Your choice is "+userChoice+" and computer choice is "+computerChoice;
    }
    else{

        if(userChoice==='stone'){
            if(computerChoice==='paper'){
                computerScore++;
                computer.innerText=" Computer : "+computerScore;
                result.innerText="The winner is computer .. Your choice is "+userChoice+" and computer choice is "+computerChoice;
            }
            else{
                userScore++;
                you.innerText=" You : "+userScore;      
                result.innerText="You are the winner .. Your choice is "+userChoice+" and computer choice is "+computerChoice;
            }
        }
        else if(userChoice==='paper'){
            if(computerChoice==='rock'){
                userScore++;
                you.innerText=" You : "+userScore;
                result.innerText="You are the winner  .. Your choice is "+userChoice+" and computer choice is "+computerChoice;
            }
            else{
                computerScore++;
                computer.innerText=" Computer : "+computerScore;
                result.innerText="The winner is computer  .. Your choice is "+userChoice+" and computer choice is "+computerChoice;

            }
        }
        else{
            if(computerChoice==='paper'){
                userScore++;
                you.innerText=" You : "+userScore;
                result.innerText="You are the winner  .. Your choice is "+userChoice+" and computer choice is "+computerChoice;

            }
            else{
                computerScore++;
                computer.innerText=" Computer : "+computerScore;
                result.innerText="The winner is computer  .. Your choice is "+userChoice+" and computer choice is "+computerChoice;
            }
        }
        
    }
};
