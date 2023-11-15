// fetch('http://httpstat.us/200')
// .then(res=>res)
// .then(()=>{
//     console.log('success');
// })



//Test with response.ok 
// fetch('http://httpstat.us/404')
// .then(res=>{
//     console.log(res.status,'response status');
//     if(!res.ok){
//         throw new Error('Request Failed')
//     }
// })
// .then(()=>{
//     console.log('success');
// }).catch(error=>{
//     console.log(error); //does not work for stauts like 404 and 500
//     // this only works when there is a network error
// })



fetch('http://httpstat.us/404')
.then(res=>{
    console.log(res.status,'response status');
    if(res.status === 404){
        throw new Error('NOT FOUND')
    }else if(res.status === 500){
        throw new Error('Server ERROR')
    }else if(res.status !== 200){
        throw new Error('Request Failed')
    }
})
.then(()=>{
    console.log('success');
}).catch(error=>{
    console.log(error);
})