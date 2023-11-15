const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // const response = await fetch('https://jsonplaceholder.typicode.com/usersd');
    const response = await fetch('https://httpstat.us/404');

    if(!response.ok){
        throw new Error('Request Failed')
    }

    // const data = await response.json();
    const data = await response.text();
    
    console.log(data, ' in response');
  } catch (error) {
    console.log(error);
  }

}
// getUsers();



const getPosts = async () => {
      const response = await fetch('https://httpstat.us/404');
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      if(!response.ok){
          throw new Error('Request Failed ======')
      }
  
      const data = await response.text();
      
      console.log(data, ' in response');
    
  }
  getPosts().catch(error=>{
    console.log('Error caught here 0000000',error);
  })
  