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

// getData('./movies.json').then((movies) => {
//   console.log(movies);
//   return getData('./actors.json')
// }).then((actors)=>{
//     console.log(actors);
//     return getData('./directors.json')
// }).then((directors)=>{
//     console.log(directors);
//     console.log('yeah eof ');
// }).catch((error)=>{
//     console.log(error);
// })


async function getAllData(){
    const movies = await getData('./movies.json')
    const actors = await getData('./actors.json')
    const directors = await getData('./directors.json')
    console.log(123);
    console.log(movies,actors,directors);
}
// getAllData()

// console.log(456);




async function getAllDataWithFetch(){
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies,actors,directors);
}
// getAllDataWithFetch()




async function getAllDataPromiseAll(){
 const [moviesRes,actorsRes,directorsRes] = await Promise.all([
  fetch('./movies.json'),
  fetch('./actors.json'),
  fetch('./directors.json'),

])

const movies = await moviesRes.json()
const actors = await actorsRes.json()
const directors = await directorsRes.json()

  // const [movies,actors,directors] = [await moviesRes.json(), await actorsRes.json(),await directorsRes.json()]

  console.log(movies,actors,directors);
}
// getAllDataPromiseAll()






async function getAllDataPromiseAll2(){
  const [movies,actors,directors] = await Promise.all([
   fetch('./movies.json').then(res=>res.json()),
   fetch('./actors.json').then(res=>res.json()),
   fetch('./directors.json').then(res=>res.json()),
 
 ])
 
 
   console.log(movies,actors,directors);
 }
 getAllDataPromiseAll2()