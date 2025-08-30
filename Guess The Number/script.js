const display=document.querySelector('#display');
const remainingGuesses=document.querySelector('#count');

let count=0;

const number=Math.floor(Math.random()*100)+1;
// const number = 10;


document.querySelector('#submit-btn').addEventListener('click',function(event){
    if(count<10){
        const value=Number(display.value);
        if(value < 1 || value>100)
             alert("INVALID INPUT");
        else{
            if(number===value){
                document.querySelector('#text').textContent='HURRAH, YOU WIN';
                document.querySelector('#play-again-btn').style.visibility= 'visible';
            }
            document.querySelector('#guesses').textContent+=value+" ";
            count++;
            display.value='';
            remainingGuesses.textContent = Number(remainingGuesses.textContent)-1;
            if(Number(remainingGuesses.textContent)===0){
                alert("GAME OVER");
                document.querySelector('#text').textContent="YOU LOOSE";
                document.querySelector('#play-again-btn').style.visibility='visible';
            }
        }
    }
})

document.querySelector('#play-again-btn').addEventListener('click',function(event){
    location.reload();
})
        
    