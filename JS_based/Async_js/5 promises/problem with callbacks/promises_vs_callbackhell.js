function getData(endpoint) {
  return new Promise((resolve, reject) => {
    let error = false;

    if (!error) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', endpoint);
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject('Something went wrong');
          }
        }
      };

      setTimeout(() => {
        xhr.send();
      }, Math.floor(Math.random() * 3000) + 1000);
    }
  });
}

getData('./movies.json').then((movies) => {
  console.log(movies);
  return getData('./actors.json')
}).then((actors)=>{
    console.log(actors);
    return getData('./directors1.json')
}).then((directors)=>{
    console.log(directors);
    console.log('yeah eof ');
}).catch((error)=>{
    console.log(error);
})
