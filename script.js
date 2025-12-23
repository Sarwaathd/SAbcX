let userScore=0;
let compScore=0;
const s1=document.querySelector("#s1");
const s2=document.querySelector("#s2");
const msg=document.querySelector("#msg");
const drawGame=()=>{
    console.log("Game is Draw");
    msg.innerText="Game is Draw .Plz try again";
 msg.style.backgroundColor="blue";}
    let finam=(userWin)=>{
        if(userWin===true){
            userScore++
            s1.innerText=userScore;
            console.log("you won");
            msg.innerText="You won";
            msg.style.backgroundColor="green";
        }else{
            compScore++;
            s2.innerText=compScore;
            console.log("you lose");
            msg.innerText="you Lose";
              msg.style.backgroundColor="red";
        }

    }

const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const computerChoice=genComputerChoice();
    console.log("computerChoice=",computerChoice);
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin=true;
        if( userChoice==="rock")//computer rock chose korte parbe na baki ache paper ar scissors tahole}
        {
           userWin = computerChoice ==="paper"?false:true;
        }else if( userChoice==="paper")//computer paper chose korte parbe na baki ache rock ar scissors tahole}
            {
           userWin = computerChoice==="scissors"?false:true;
        }else//computer scissors chose korte parbe na baki ache paper ar rock tahole}
        {
            userWin =computerChoice==="rock"?false:true;
        }
        finam(userWin);
    }
    
}
const genComputerChoice=()=>{
    const option=["rock","paper","scissors"];
    const randmIdc= Math.floor(Math.random()*3);
    return option[randmIdc];
} 
const choice=document.querySelectorAll(".choice");
choice.forEach((choice)=>{
    choice.addEventListener("click",() => {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})
