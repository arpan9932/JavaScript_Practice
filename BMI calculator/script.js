let height =document.querySelector('#height');
let weight =document.querySelector('#weight');
let show=document.getElementById('result');
let cat=document.getElementById('catagory');
let box=document.getElementById('box');

function calculate(){
    let contheight=height.value*.01;
    let bmi=weight.value/(contheight*contheight);
    let finalbmi=bmi.toFixed(2);
    show.innerHTML=finalbmi;
    if(finalbmi<18.5){
        cat.innerHTML="Under weight";
        box.style.backgroundColor="#ffc107";
    }
    else if(finalbmi>18.5 && finalbmi<24.9){
        cat.innerHTML="Normal weight";
        box.style.backgroundColor="#1ee42b";
    }
    else if(finalbmi>24.9 && finalbmi<29.9){
        cat.innerHTML="Overweight";
        box.style.backgroundColor="rgb(255 98 7)";
    }
    else{
        cat.innerHTML="Obesity";
        box.style.backgroundColor=" #ff0900";
    }
}
function reset(){
    height.value="";
    weight.value="";
    show.innerHTML="";
    cat.innerHTML="";
    box.style.backgroundColor="";
}
