

const lugar=require('./lugar/lugar');
const clima=require('./clima/clima');
const argv= require('./config/yargs').argv;



const getInfo=async(dir)=>{
    try {
        const coodernadas= await lugar.getLugar(dir);
        const  temp= await clima.getClima(coodernadas.latitud,coodernadas.longitud);
        return `La temperatura de la ciudad ${coodernadas.direccion} es de: ${temp}`;
    } catch (error) {
        return`No se pudo determinar el clima de la ciudad: ${direccion}`;
    }
}

 getInfo(argv.direccion)
 .then(resp=>console.log(resp))
.catch(err=>console.log(err));





