const results=document.querySelector('#results');

document.querySelector('#button').addEventListener('click',function(event){
    let height=document.querySelector('#height-value').value;
    let weight=document.querySelector('#weight-value').value;

    if(height === ''||height<0||isNaN(height)){
        results.textContent=`${height} is not a valid height`;
    }
    else if(weight===''||weight<0||isNaN(weight)){
        results.textContent=`${weight} is not a valid weight`;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`
    }
    
})