

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
    return user.name
}).then((uname)=>{
    return uname.length
}).then((nlength)=>{
    console.log(nlength);
})
.catch((error)=>{
    console.error(error)
    return 123
}).then((num)=>{
    console.log(num + ' oh something went wrong');
})
.finally(()=>{
    console.log('the promise has been resolved or rejected');
})

console.log('hello from global scope');