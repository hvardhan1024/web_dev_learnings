// fetching a json file
fetch('./movies.json')
.then(res=>{
   return res.json()
})
.then(data=>{
    console.log(data);
})


//fetching a text file
fetch('./test.txt')
.then(res=>{
    return res.text()
})
.then(data=>{
    console.log(data);
})


// fetching from api 
fetch('https://api.github.com/users/hvardhan1024')
.then(res=>{
   return res.json()
})
.then(data=>{
    console.log(data);
})

