function getComputerChoice()//randomly chose r p or s
{let randomNum=Math.floor(Math.random()*3);
    if(randomNum==0)
    {return "rock";   }
    else {if(randomNum==1)
    {return "paper";
    }
    else{return "scissors";
    }
    }
}
function playRound(computer,human) //msg of who  won
{
    if(human.toLowerCase()==computer)
    {return "draw you both pick :"+computer;
    }
    if(human.toLowerCase()=="rock"&&computer=="paper")
{ 
    return "you lose rock loses to paper";
}
if(human.toLowerCase()=="rock"&&computer=="scissors")
{  
    return "you win rock beats scissors";
}
if(human.toLowerCase()=="paper"&&computer=="scissors")
{ 
    return "you lose paper loses to scissors";
}
if(human.toLowerCase()=="paper"&&computer=="rock")
{ 
    return "you win paper beats rock";
}
if(human.toLowerCase()=="scissors"&&computer=="paper")
{
     return "you win rock beats paper";
}
if(human.toLowerCase()=="scissors"&&computer=="rock")
{ 
    return "you lose scissors loses to rock";}
}
function whoWon(human,computer)// says who won in string
{    if(human.toLowerCase()=="rock"&&computer=="paper")
return"computer";
 
if(human.toLowerCase()=="rock"&&computer=="scissors")
{ return "human"}
if(human.toLowerCase()=="paper"&&computer=="scissors")
{     return "computer";}
if(human.toLowerCase()=="paper"&&computer=="rock")
{   return "human";}
if(human.toLowerCase()=="scissors"&&computer=="paper")
{     return "human";}
if(human.toLowerCase()=="scissors"&&computer=="rock")
{   return "computer";}

}

// function game(gameScoreHuman,gameScoreComputer)//plays ft 5 in console
// {let human,computer;
// while(gameScoreHuman<5&&gameScoreComputer<5)//plays
//     {human=prompt("rock paper or scissors");
//     computer=getComputerChoice();
//     console.log(playRound(computer,human));
//     if(whoWon(human,computer)=="human")
//         {gameScoreHuman++;}
//     if(whoWon(human,computer)=="computer")  
//         {gameScoreComputer++;}
//     console.log("the score is :"+gameScoreHuman+" to :"+gameScoreComputer);

// }
// if(gameScoreHuman==5) //who won
//     console.log("you win");
//     else    (console.log("you lose"));
// }


const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
const score=document.querySelector('#score');
const results=document.querySelector('#results');
const again=document.querySelector('#again')
let gameScoreHuman=0,gameScoreComputer=0;
score.textContent=gameScoreHuman + " "+gameScoreComputer;
function scoreUpdate(human,computer)//adds a point to winner
{    if(whoWon(human,computer)=="human")
    {gameScoreHuman++;}
    if(whoWon(human,computer)=="computer")  
       {gameScoreComputer++;}
       score.textContent=gameScoreHuman + " "+gameScoreComputer;
       winner(gameScoreHuman,gameScoreComputer)
}
function winner(gameScoreHuman,gameScoreComputer)
{if (gameScoreHuman==5)
    {results.textContent="you win good job";
again.textContent="want to show how good you are again"
}
    else {if(gameScoreComputer==5){
    results.textContent="you lose";
again.textContent="want a revange"}}

}
rock.addEventListener('click', () => {
    computer=getComputerChoice();
    results.textContent=playRound(computer,'rock');
   scoreUpdate('rock',computer);
});
paper.addEventListener('click', () => {
    computer=getComputerChoice();
    results.textContent=playRound(computer,'paper');
    scoreUpdate('paper',computer);
});
scissors.addEventListener('click', () => {
    computer=getComputerChoice();
    results.textContent=playRound(computer,'scissors');
    scoreUpdate('scissors',computer);
});



