

const axios =require('axios');

const apikey='f08e0309e47ef3377246568493f892e1';

const getClima= async (lat,lng)=>{
    const resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`);

    return resp.data.main.temp;
}


module.exports={
    getClima
}
