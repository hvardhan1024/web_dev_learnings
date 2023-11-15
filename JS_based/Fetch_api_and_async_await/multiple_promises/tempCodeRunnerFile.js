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
