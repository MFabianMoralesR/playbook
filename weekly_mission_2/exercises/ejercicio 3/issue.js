class issue{
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author,dateCreated,lastUpdated){
     this.title = title
     this.repositoryNameAssociated = repositoryNameAssociated
     this.status = status
     this.numberOfComments = numberOfComments
     this.labels = labels
     this.author = author
     this.dateCreated = dateCreated
     this.lastUpdated = lastUpdated
    } 

    getTitleAndAuthor(){
        return `This issue ${this.title} was created by ${this.author}`
      }
    getGeneralInfo(){
        return `\n Date of Creation: ${this.dateCreated} \n Status(${this.status}). \n The number of comments are: ${this.numberOfComments}`
      }
  }

  const issueDiana = new issue("Bug exotico","Playbook","Working",10, "JS, NodeJS","Diana Magallanes","11-04-2022","14-04-2022") 
  
  console.log("Name of issue: " + issueDiana.title)
  console.log("Information: " + issueDiana.getTitleAndAuthor())
  console.log("Data: " +issueDiana.getGeneralInfo())
