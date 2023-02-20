let apper = document.querySelector("#upside1")

function Insert(n){
    console.log(apper.textContent) //Valor de texto que está dentro do elemento, pode converter para String ou Number e pedir para fazer algo caso esteja de tal maneira
    if(n === '.' && apper.innerHTML.includes('.') || String(apper.textContent).length > 27)return;
    if(apper.textContent == '...'){
        apper.innerHTML = ''
    }
    apper.innerHTML += n

    if(apper.innerHTML.includes('++') || apper.innerHTML.includes('**') || apper.innerHTML.includes('--')
    || apper.innerHTML.includes('//')){
        Delete()
    }
    }

function Allclear(){
    apper.innerHTML = ''
}

function Delete(){
    let apper2 = document.querySelector("#upside1").innerHTML;
    document.querySelector("#upside1").innerHTML = apper2.substring(0, apper2.length -1)
}

function Plus(){
    if(apper.innerHTML.includes('++'))return;
    apper.innerHTML += '+'
}

function Sub(){
    if(apper.innerHTML.includes('--'))return;
    apper.innerHTML += '-'
}

function Div(){
    if(apper.innerHTML.includes('//'))return;
    apper.innerHTML += '/'
}

function Multi(){
    if(apper.innerHTML.includes('**'))return;
    apper.innerHTML += '*'
}

function Result(){
    var apper3 = document.querySelector("#upside1").innerHTML
    apper.innerHTML = eval(apper3)
}

function Color(){
    var randomnumber = Math.floor(Math.random() * 10)
    var backgrounds = document.getElementsByTagName('body')[0]

    console.log(Number(randomnumber))

    switch(randomnumber){
        case 0:
            backgrounds.style.background = 'red'
            break;
        case 1:
            backgrounds.style.background = 'blue'
            break;
        case 2:
            backgrounds.style.background = 'yellow'
            break;
        case 3:
            backgrounds.style.background = 'purple'
            break;
        case 4:
            backgrounds.style.background = 'orange'
            break;
        case 5:
            backgrounds.style.background = 'white'
            break;
        case 6:
            backgrounds.style.background = 'gray'
            break;
        case 7:
            backgrounds.style.background = 'black'
            break;
        case 8:
            backgrounds.style.background = 'brown'
            break;
        case 9:
            backgrounds.style.background = 'pink'
            break;
        case 10:
            backgrounds.style.background = 'greenyellow'
            break;
    }
}