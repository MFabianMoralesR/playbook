const trending_Topic = {

    tendencias: ["Launchx", "Github","Usar commit","Pruebas"],
    tendenciasMexico: ["1.- GitHub Extend", " 2.- Jest"," 3.- Semana 2"," 4.- Hola Mundo"],
    top_Diez: ["GitHub Extend", "Jest","Semana 2","Hola Mundo","Launchx", "Github","Usar commit","Pruebas"],
    
    getTrending: function(){
        
        return `Las tendencias en Mexico ${this.tendenciasMexico} `
      },
     
     }
    
   console.log("Las tendencias en Mexico son: " + trending_Topic.tendenciasMexico)
  
    