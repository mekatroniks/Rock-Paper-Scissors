const rock = document.getElementById("rock");
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const body = document.querySelector("body");
let p = document.createElement("p");


const score = JSON.parse(localStorage.getItem("score"));

rock.addEventListener('click',function(){
    let value = Math.random();
    let computer = "";
    if( 1/3 > value & value >= 0 ){
        computer = "Rock";

    }else if( 2/3 > value  & value >= 1/3 ){
        computer = "Paper";
        
    }else if( 1 > value & value >= 2/3){
        computer = "Scissors";

    }
    

    let result = "";
    if(computer == "Rock"){
        result = "Draw"
    } else if( computer == "Paper"){
        result = "Computer Win You Lose";
    } else if ( computer == "Scissors"){
        result = "Computer Lose You Win";
    }
    
    
    p.innerHTML = result;
    body.appendChild(p);

});

paper.addEventListener('click',function(){
    let value = Math.random();
    let computer = "";
    if( 1/3 > value & value >= 0 ){
        computer = "Rock";

    }else if( 2/3 > value  & value >= 1/3 ){
        computer = "Paper";
        
    }else if( 1 > value & value >= 2/3){
        computer = "Scissors";

    }
    

    let result = "";
    if(computer == "Rock"){
        result = "Computer Lose You Win"
    } else if( computer == "Paper"){
        result = "Draw";
    } else if ( computer == "Scissors"){
        result = "Computer Win You Lose";
    }
   
    
    p.innerHTML = result;
    body.appendChild(p);

});

scissors.addEventListener("click",function(){
    let value = Math.random();
    let computer = "";
    if( 1/3 > value & value >= 0 ){
        computer = "Rock";

    }else if( 2/3 > value  & value >= 1/3 ){
        computer = "Paper";
        
    }else if( 1 > value & value >= 2/3){
        computer = "Scissors";

    }
    

    let result = "";
    if(computer == "Rock"){
        result = "Computer Win You Lose"
    } else if( computer == "Paper"){
        result = "Computer Lose You Win";
    } else if ( computer == "Scissors"){
        result = "Draw";
    }
   
    
    p.innerHTML = result;
    body.appendChild(p);

});

function clicked(){
    if( p.innerHTML == "Draw"){
            score.Draws += 1;
    }else if (p.innerHTML == "Computer Win You Lose"){
           score.Loses += 1;
   }else if(p.innerHTML == "Computer Lose You Win"){
       score.Wins +=1;
       }

       localStorage.setItem("score",JSON.stringify(score));

   alert(`Wins : ${score.Wins} Loses : ${score.Loses} Draws : ${score.Draws}`);

}

function reset(){
       score.Wins = 0
       score.Loses = 0
       score.Draws = 0
       p.innerHTML = " ";
}