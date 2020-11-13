const axios =require('axios');

const getLugar=async(dir)=>{
    const encodeUrl=encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json`,
        params:{'access_token':'pk.eyJ1IjoiZGFya3NoaW5vYmkxNyIsImEiOiJja2hmMzhiOHkwMDNzMnFvYnY3dGJ2d3U1In0.IPR6CKDAAlnsyw0qaCGr2Q'}
        
      });

      let resp= await instance.get();
      if(resp.data.features.length===0)
      {
          throw new Error('No hay resultados disponibles');
      }

      const data=resp.data.features[0];
      const direccion=data.place_name;
      const latitud=data.center[1];
      const longitud=data.center[0];

      return{
          direccion,
          latitud,
          longitud
      }

}


module.exports={
    getLugar
}