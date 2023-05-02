let autosImportados = require("./autos.js");

const concesionaria = {
   autos: autosImportados,
   
   buscarAuto: function(patente){
       let patenteBuscada = this.autos.find (auto => auto.patente == patente)
       if(patenteBuscada) return patenteBuscada 
       else return null
   },
   
   venderAuto: function(patente){
      let autoVendido = this.buscarAuto (patente)
      if(autoVendido){
          auto => buscarAuto.vendido == false
          return "no vendido"
      } else{
          auto => buscarAuto.vendido == true
        return "vendido"
      }
   }
};
console.log(concesionaria.venderAuto("JJK116"))
