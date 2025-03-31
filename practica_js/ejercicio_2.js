let frase = "Sigue tu propio camino incluso si vives un dia";
 let resultado = larga(frase);
 console.log("La palabra más larga es:", resultado);
 function larga(frase) {
   
   let palabras = frase.split(' ');
   
   let palabraMasLarga = '';
   
   for (let palabra of palabras) {
     
     if (palabra.length > larga.length) {
       larga = palabra;
     }
   }
   return larga;
 }
