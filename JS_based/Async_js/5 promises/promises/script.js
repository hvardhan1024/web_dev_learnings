const promise = new Promise((resolve,reject)=>{
    // Do some async task 
    setTimeout(()=>{
        console.log('async task complete');
        resolve()
    },1000)
})


promise.then(()=>{
    console.log('Promise consumed....');
})


// ///////////////////////////////////////////////////////
const getUser = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let error = false;
        error = true;

        if(!error){
            resolve({name:'John',age:30})
        }else{
            reject('Error something went wrong ====')
        }
    },1000)
})


getUser.then((user)=>{
    console.log(user);
})
.catch((error)=>console.error(error))
.finally(()=>{
    console.log('the promise has been resolved or rejected');
})

console.log('hello from global scope');