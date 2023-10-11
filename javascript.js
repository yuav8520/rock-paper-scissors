function getComputerChoice()
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
function singleGame(computer,human)
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
function whoWon(human,computer)
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

function game(gameScoreHuman,gameScoreComputer)//you made it werid so ill make it a first to 3
{let human,computer;
while(gameScoreHuman<3&&gameScoreComputer<3)
{human=prompt("rock paper or scissors");
computer=getComputerChoice();
    console.log(singleGame(computer,human));
if(whoWon(human,computer)=="human")
{gameScoreHuman++;}
if(whoWon(human,computer)=="computer")
{gameScoreComputer++;}
    console.log("the score is :"+gameScoreHuman+" to :"+gameScoreComputer);

}
if(gameScoreHuman==3)
console.log("you win");
else(console.log("you lose"));
}

//console.log(singleGame(getComputerChoice(),prompt("rock paper or scissors")))
game(0,0);

