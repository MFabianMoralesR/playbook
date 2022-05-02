const issue = {

title: "LaunchX",
repositoryNameAssociated: "FabianMorales",
status: "En linea",
numberOfComments: 200,
labels: "Azul",
author: "Mc Carlogilmar",
dateCreated: new Date(),
lastUpdated: new Date(),

getTittleAndAuthor: function(){
    return `This repository  ${this.title} was created by  ${this.author}`
  },
  getGeneralInfo: function(){
    return `This repository esta  ${this.status}  se creo el dia  ${this.dateCreated}  y tiene un numero de comentarios de ${this.numberOfComments}`
  }
 }

console.log("Nombre del author y titulo: " + issue.title + issue.author)
console.log("Nombre del author y titulo: " + issue.getTittleAndAuthor())
console.log(issue.getGeneralInfo())
