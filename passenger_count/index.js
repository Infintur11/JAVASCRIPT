let count=0
let Count = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

function increment(){
    count+=1
    Count.innerText = count;
}
function decrement(){
    let a = count;
    if(a>0){
    count-=1;}
    Count.innerText=count;
}
function save(){
    let countStr = count+" - "
    saveEl.textContent+=countStr
    Count.innerText=0
    count=0
}
function reset(){
    Count.textContent=0;
    saveEl.textContent="Previous Entries:";
}



