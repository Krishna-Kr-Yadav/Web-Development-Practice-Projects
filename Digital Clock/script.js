const display = document.querySelector('#display');

setInterval(function(){
    const date = new Date();
    display.textContent=date.toLocaleTimeString();
},1000)