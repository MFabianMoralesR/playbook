const user = {

    user: "LaunchX",
    username: "FabianMorales",
    bio: "Soy de Mexico y curos LaunchX",
    age: 30,
    
    getPerfilFacebook: function(){
        return `Este twitter es de  ${this.username}  con la siguiente biografia    ${this.bio}`
      },
     
     }
    
    console.log("Este perfil es de: " + user.username +" con la siguiente biografia " +user.bio)
  
    