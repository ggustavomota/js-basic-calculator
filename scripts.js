let apper = document.querySelector("#upside1")

function Insert(n){
    if(n === '.' && apper.innerHTML.includes('.'))return;
    apper.innerHTML += n
}

function Allclear(){
    apper.innerHTML = ''
}

function Delete(){
    let apper2 = document.querySelector("#upside1").innerHTML;
    document.querySelector("#upside1").innerHTML = apper2.substring(0, apper2.length -1)
}

function Plus(){
    if(apper.innerHTML.includes('+'))return;
    apper.innerHTML += '+'
}

function Sub(){
    if(apper.innerHTML.includes('-'))return;
    apper.innerHTML += '-'
}

function Div(){
    if(apper.innerHTML.includes('/'))return;
    apper.innerHTML += '/'
}

function Multi(){
    if(apper.innerHTML.includes('*'))return;
    apper.innerHTML += '*'
}

function Result(){
    var apper3 = document.querySelector("#upside1").innerHTML
    apper.innerHTML = eval(apper3)
}
