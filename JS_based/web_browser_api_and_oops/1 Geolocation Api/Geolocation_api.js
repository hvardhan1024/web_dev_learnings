


//Get cur position 
function curSuccess(pos){
    const coords = pos.coords;
    
    console.log(pos);
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Accuracy: ${coords.accuracy} meters`);

}

function curError(err){
    console.log(`Error : ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighAccuracy: true, //use GPS if available
    tiemout:5000, //Time to wait to stop trying for location
    maximumAge:0, // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess,curError,curOptions)



const  target= {
    latitude: 50,
    longitude:50
}
// watch cur position 
function watchSuccess(pos){ // fires when location changes
    const coords = pos.coords;
    
    if(target.latitude === coords.latitude && target.longitude === coords.longitude){
       console.log('you have reached your destination');  
       navigator.geolocation.clearWatch(id);
    }

}

function watchError(err){
    console.log(`Error : ${err.code} - ${err.message}`);
}

const watchOptions = {
    enableHighAccuracy: true, //use GPS if available
    tiemout:5000, //Time to wait to stop trying for location
    maximumAge:0, // Do not use a cached position
};

const id = navigator.geolocation.getCurrentPosition(watchSuccess,watchError,watchOptions)