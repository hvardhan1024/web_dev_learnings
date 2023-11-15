const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:'John',age:20})
    },1000)
})



async function getPromise(){
    const response = await promise;
    console.log(response);
}
// getPromise()



async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()

    console.log(data);
}
// getUsers()


function getUsersUsingThen(){
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res=>res.json())
 .then(data=>console.log(data))
}
// getUsersUsingThen()



// w ARROW function
const getPosts = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()

    console.log(data);
}
getPosts()