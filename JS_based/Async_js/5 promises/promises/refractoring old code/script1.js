
const posts = [
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'},
]

function createPost(post,cb){
    return new Promise((resolve,reject)=>{

        let error = false;
        error = true;

        if (!error){
            setTimeout(()=>{
                posts.push(post)
                resolve()
            },2000)
        }else{
            reject('Something went wrong')
        }
        })
}

function getPosts(){
    setTimeout(()=>{
        posts.forEach((post)=>{
            const div = document.createElement('div')
            div.innerHTML = `<strong> ${post.title} </strong> ${post.body}`
            document.querySelector('#posts').appendChild(div)
        })
    },1000)
}

function showError(error){
    const h3 = document.createElement('h3')
    h3.innerHTML = `<strong> ${error} </strong> `
    document.getElementById('posts').appendChild(h3)
}

createPost({title:'post three',body:'thsi is post 3'})
.then(getPosts)
.catch(showError)