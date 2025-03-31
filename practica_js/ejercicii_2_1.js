let frase=["Sigue","tu ","propio", "camino", "incluso", "si", "vives", "un", "dia"];

let cantidad2=cantidad(frase);
let cantidad=frase[0];



function larga(frase){

for (const i=1; i<frase.length; i++){
     if(frase[i].length > cantidad.length){
          cantidad=frase[i]
      }
   }
   return cantidad;
 }

 console.log(cantidad2);