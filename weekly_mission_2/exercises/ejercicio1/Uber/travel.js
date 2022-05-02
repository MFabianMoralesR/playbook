const travel= {

    destino: "Toluca",
    ruta: "Ruta 33 ",
    costo: 500,
    
    
    getRutaCosto: function(){
        return `La ruta es ${this.ruta} y el costo  ${this.costo}`
      },
      
     }
    
    console.log("La ruta  y el costo es: " + travel.ruta + travel.costo)
    
    