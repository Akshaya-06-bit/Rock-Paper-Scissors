let user = document.querySelector("#you");
let comp = document.querySelector("#comp");
let userscore = 0;
let compscore = 0;
let result = document.querySelector(".result");
let message = document.querySelector("#message");
const userchoices = document.querySelectorAll(".choice");
const hide = document.querySelector(".hide");
const generate = ()=>{
    let options = ["rock","paper","scissors"];
    let compchoice = Math.floor(Math.random()*3);
    return options[compchoice];
}
let msg = document.querySelector("#msg");
const playGame = (user)=>{
    //for comparing who won
    let compchoice = generate();
    if(user===compchoice)
    {
        draw();
    }
    else
    {
    if(user==="rock")
    {
        if(compchoice==="scissors")
        {
            win();
        }
        else
            lose();
    }
    if(user==="paper")
    {
        if(compchoice==="rock")
        {
            win();
        }
        else
            lose();
    }
    if(user==="scissors")
    {
        if(compchoice==="paper")
        {
            win();
        }
        else
            lose();
    }
    }
}
const msgre = ()=>{
    msg.innerText = "PLAY YOUR MOVE";
}
const win = ()=>{
    userscore++;
    user.innerText = userscore;
    msg.innerText = "YOU WON COMPUTER LOST..";
    setTimeout(msgre,1000);
    

}
const lose = ()=>{
    compscore++;
    comp.innerText = compscore;
    msg.innerText = "YOU LOST COMPUTER WON..";
    setTimeout(msgre,1000);
}
userchoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
        finalwin();
    })
})
const draw = ()=>{
    msg.innerText = "IT IS A DRAW..";
    setTimeout(msgre,1000);

}
const finalwin = ()=>{
    if(userscore===10 || compscore===10)
    {
    if(userscore===10)
    {
        result.innerText = "YOU WINNN";
        message.classList.remove("hide");
        
    }
    if(compscore===10)
    {
         result.innerText = "COMP WINNN";
         message.classList.remove("hide");
    }
    userscore=0;
    compscore=0;
    comp.innerText = compscore;
    user.innerText = userscore;
    }
}
const newgame = ()=>{
userscore=0;
    compscore=0;
    comp.innerText = compscore;
    user.innerText = userscore;
    message.classList.add("hide");
}
let newga = document.querySelector("#btn");
newga.addEventListener("click",newgame);