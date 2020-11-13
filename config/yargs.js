
 const argv = require('yargs')
 .options({
     direccion:{
         demand:true,
         alias:'d',
         desc:'Ciudad a buscar'

     }
 }).argv;


 module.exports={
     argv
 }