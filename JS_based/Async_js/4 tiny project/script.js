const main = document.querySelector('h1.main')

const xhr = new XMLHttpRequest()
xhr.open('GET','https://api.chucknorris.io/jokes/random')

xhr.onreadystatechange = ()=>{

    if(xhr.status === 200 && xhr.readyState===4){
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText)
        

        main.innerHTML = data.value
    }


}

xhr.send()