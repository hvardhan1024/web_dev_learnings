
// try{
//     console.log(x); // note that x is not defined
// }catch(error){
//     console.log('Error : '+error);
// }


function double(number){

    if(isNaN(number)){
        throw new Error(number + ' is not a number ===')
    }

    return number*2;
}
console.log(double(3));
try{
    const y = double('hello')
    console.log(y);
}catch(err){
    console.log(err);
}