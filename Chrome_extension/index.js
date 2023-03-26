const inputBtn = document.getElementById("input-btn")
let myLeads =[]
const inputEl=document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
let tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
//the local storage is used for keeping values saved


if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)//so when we render it out now leads are empty so this becomes empty again
})

function render(leads){
let listItems=""//it contains empty list
for(let i=0;i<leads.length;i++){
    listItems+=`
    <li>
    <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
    </li>`//here we fill the variable
}

ulEl.innerHTML=listItems//now we will show in once
}