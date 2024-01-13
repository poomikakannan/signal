let div1=document.createElement('div')
div1.id="container"
let div2=document.createElement('div')
div2.id="box"
let btn1=document.createElement('div')
btn1.className="btn1"
let btn2=document.createElement('div')
btn2.className="btn2"
let btn3=document.createElement('div')
btn3.className="btn3"
let btn4=document.createElement('div')
btn4.id="btn4"
let h2 = document.createElement('h2')
h2.id = "btn5"
btn4.append(h2)
div2.append(btn1,btn2,btn3,btn4)
div1.append(div2)
document.body.append(div1)


let a = 0;
let red = 10;
let yellow = 5;
let green = 10;

function signal(){




    if(a<11){
        btn1.classList.add("a1")
        // btn2.classList.remove("a2")
        btn3.classList.remove("a3")
        h2.innerText=red
        red--;
        
    }
    else if(a>=11 && a<=16)
    {
        btn2.classList.add("a2")
        btn1.classList.remove("a1")
        // btn3.classList.remove("a3")
        h2.innerText=yellow
        yellow--;
    }

    else if(a>=17 && a<=27)
    {
        // btn1.classList.remove("a1")
        btn2.classList.remove("a2")
        btn3.classList.add("a3")
        h2.innerText=green
        green--;
    }

a++

if(a==28){
     a = 0
     red = 10;
     yellow = 5;
     green = 10;
}
}
setInterval(signal,1000)





// function signal(){ 
// let red1 = document.getElementById("red")
// let yellow1 = document.getElementById("yellow")
// let green1 = document.getElementById("green")

// setTimeout(function(){
//     red1.style.backgroundColor="red"
//     yellow1.style.backgroundColor=""
//     green1.style.backgroundColor=""
// },1000)

// setTimeout(function(){
//     red1.style.backgroundColor=""
//     yellow1.style.backgroundColor="yellow"
//     green1.style.backgroundColor=""
// },7000)

// setTimeout(function(){
//     red1.style.backgroundColor=""
//     yellow1.style.backgroundColor=""
//     green1.style.backgroundColor="green"
// },10000)
// }

// setInterval(function(){
//     signal();
// },10000)
// signal()

// function rd(){
//     div3.style.backgroundColor='red'
//     div4.style.backgroundColor='black'
//     div5.style.backgroundColor='black'
// }
// function ye(){
//     div4.style.backgroundColor='yellow'
//     div3.style.backgroundColor='black'
//     div5.style.backgroundColor='black'
   
// }
// function gr(){
//     div4.style.backgroundColor='black'
//     div3.style.backgroundColor='black'
//     div5.style.backgroundColor='green'
// }

// function blank(){
//     div3.style.backgroundColor=''
//     div4.style.backgroundColor=''
//     div5.style.backgroundColor=''
// }

// div3.addEventListener('mouseover',rd)
// div4.addEventListener('mouseover',ye)
// div5.addEventListener('mouseover',gr)




// div3.addEventListener('mouseout',blank)
// div4.addEventListener('mouseout',blank)
// div5.addEventListener('mouseout',blank)
