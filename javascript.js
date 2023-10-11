function getComputerChoice()
{let randomNum=math.floor(math.random()*3);
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
{if(human.toLowerCase()==computer)
    {return "draw you both pick :"+computer;
    }
    if(human.toLowerCase()=="rock"&&computer=="paper")
{ return "you lose rock loses to paper";
}
if(human.toLowerCase()=="rock"&&computer=="scissors")
{ return "you win rock beats scissors";
}
if(human.toLowerCase()=="paper"&&computer=="scissors")
{ return "you lose paper loses tp scissors";
}
if(human.toLowerCase()=="paper"&&computer=="rock")
{ return "you win paper beats rock";
}
if(human.toLowerCase()=="scissors"&&computer=="paper")
{ return "you win rock beats paper";
}
if(human.toLowerCase()=="scissors"&&computer=="rock")
{ return "you lose scissors beats rock";
}
}