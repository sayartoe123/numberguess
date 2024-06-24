//UI

const minnum = document.querySelector(".minnumber"),
      maxnum = document.querySelector(".maxnumber"),
      getinput = document.getElementById("guessnumber"),
      getbtn = document.querySelector("#btn"),
      message1 = document.querySelector(".message1");
      message2 = document.querySelector(".message2");
      getgameform = document.getElementById("gameform");

const min = 1,
      max = 10,
      winningnum = randomnum(min,max);

let gameleft = 3;

minnum.textContent = min;
maxnum.innerText  = max;

getbtn.addEventListener("click",function(e){

    // let guess = Number(getinput.value);
    // let guess = +getinput.value;
    let guess = parseInt(getinput.value);
    // console.log(guess);
    // console.log(typeof guess);

    if(guess < min || guess > max || isNaN(guess)){
        // message2.textContent="Please Enter a Number between " +min + " to" +max;

        setmessage2("Please Enter a Number between " +min + " to" +max,"steelblue");
    }

    if(guess === winningnum){
        //Gameover WON
        

        //disabled getinput
        // getinput.disabled = true;
        
        // //getinput border color to green
        // getinput.style.borderColor = "green";

        // //mssage1
        // // message1.innerHTML = "You won Congrats!!!";
        // // message1.style.color = "green";

        // setmessage1("You won Congrats!!!" , "green");

        // //playagain ?
        // getbtn.value = "Play Again";

        gameover(true,"You won Congrats!!!")
    }
    else{
        //GameOver LOST

         gameleft -= 1;
        // console.log(gameleft);

        if(gameleft === 0){
        //disabled getinput
        // getinput.disabled = true;
        
        // //getinput border color to green
        // getinput.style.borderColor = "red";

        // //mssage1
        // // message1.innerHTML = "Game Over Idiot!!! correct number is "+winningnum ;
        // // message1.style.color = "red";

        // setmessage1("Game Over Idiot!!! correct number is "+winningnum , "red");

        // //playagain ?
        // getbtn.value = "Play Again";

        gameover(false,"Game Over Idiot!!! correct number is "+winningnum);

        }
        else{
            //Contniue

            getinput.style.borderColor = "red";

            //message1

            // message1.innerText = guess + " is not correct! "+ gameleft+ " chance left";
            // message1.style.color = "blue";

            setmessage1(guess + " is not correct! "+ gameleft+ " chance left","blue")

            //clear getinput old value

            getinput.value = "";

            //autofocus in getinput

            getinput.focus();


        }

    }
    e.preventDefault();
})

// gameover(true,"your message");

function gameover(won,msg){
            let color;

            won === true ? color = "green" : color = "red";

          //GameOverLose
             //disabled getinput
             getinput.disabled = true;
        
             //getinput border color to green
             getinput.style.borderColor = color;
     
             //mssage1
             setmessage1(msg,color);
           
     
             //playagain ?
             getbtn.value = "Play Again";

             //Add Class

             getbtn.classList.add("playagain");
}

function setmessage1(msg,color){

    message1.innerText = msg;
    message1.style.color = color;


}

function setmessage2(msg,color){
    message2.innerText = msg;
    message2.style.color = color;

    setTimeout(function(){
        message2.textContent = "";
    },2000);
}

getgameform.addEventListener("mousedown",function(e){
    // console.log(e.target);

   if (e.target.classList.contains("playagain")){
    // console.log("i am working");

    window.location.reload();
   }
});
      
function randomnum(min,max){
    let getrdm = Math.floor(Math.random()*(max-min)+min);
    return getrdm;
}

// console.log(randomnum(1,10));