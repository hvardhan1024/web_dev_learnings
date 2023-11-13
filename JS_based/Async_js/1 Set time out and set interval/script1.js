// setTimeout(() => {
//     console.log('hello from callback');
// }, 2000);

// console.log('hello from global scope');



function printTxt(){
    console.log('ohh print txt function is here');
}

const timerId =setTimeout(printTxt,3000)

console.log(timerId);

(()=>{
    setTimeout(()=>{
        console.log('in clear to');
        clearTimeout(timerId)
    },2000)
})()