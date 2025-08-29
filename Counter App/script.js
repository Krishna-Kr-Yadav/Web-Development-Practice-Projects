document.querySelector("#result").textContent = 0;
const result=document.querySelector("#result");

const add=document.querySelector("#add");
add.addEventListener('click',function(event){
    result.textContent = Number(result.textContent)+1;
})

document.querySelector("#subtract").addEventListener('click',function(event){
    if(result.textContent > 0){
        result.textContent = Number(result.textContent)-1;
    }
    else{
        alert("Invalid");
    }
})

document.querySelector("#reset").addEventListener("click",function(event){
    document.querySelector("#result").textContent = 0;
})