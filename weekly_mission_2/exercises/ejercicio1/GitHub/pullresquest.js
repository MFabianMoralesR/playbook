const pullRequest = {
    Title: "GitHub",
    branchName: "carlogilmar",
    status: "Abierto",
    repositoryNameAssociated: "LaunchX",
    dateCreated: new Date(),

    getGeneralInfo: function(){
        return `This repository esta  ${this.status}  se creo el dia  ${this.dateCreated}`
      },

      getTittleAndAuthor: function(){
      return `This repository ${this.Title} was created by ${this.branchName}`
    }
   }
   
   
   console.log(pullRequest.getGeneralInfo())
   console.log("Nombre del author y titulo: " + pullRequest.getTittleAndAuthor())
   