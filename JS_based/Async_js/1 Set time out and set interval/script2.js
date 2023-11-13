// set interval - repeat some process for some time

// const intervalID = setInterval(myCallback,1000,'HOLa')

// function myCallback(a){
//     console.log(a,Date.now())
// }

let intervalID;
function startChange(){
    if(!intervalID){
        intervalID = setInterval(changeColor,1000)
    }
}

function changeColor(){
    // let colors = ['red','blue','green','yello','orange','indigo','violet']
    // let index = Math.floor(Math.random() * colors.length) ;
    // console.log(colors[index],index);
    // document.body.style.background = colors[index]


    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.background = '#'+randomColor
}

function stopChange(){
    clearInterval(intervalID)
}

document.getElementById('start').addEventListener('click',startChange)


document.getElementById('stop').addEventListener('click',stopChange)