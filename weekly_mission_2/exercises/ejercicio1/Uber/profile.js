const profile = {

    user: "LaunchX",
    direccion: "Mexico",
    status: "En linea",
    cel: 200,
    
    
    getuserDireccion: function(){
        return `El usuario es  ${this.user} y esta en  ${this.direccion}`
      },
      
     }
    
    console.log("El servicio es para " + profile.user)
    console.log("En la siguiente direccion: " + profile.getuserDireccion())
    