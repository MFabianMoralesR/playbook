class pullRequest{
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
     this.title = title
     this.branchName = branchName
     this.dateCreated = dateCreated
     this.status = status
     this.repositoryNameAssociated = repositoryNameAssociated
    } 

    getTitleAndRepository(){
        return `This PR, ${this.title} is of ${this.repositoryNameAssociated}`
      }
    getStatus(){
        return `Status(${this.status}).`
      }
  }

  const pullRequestDiana = new pullRequest("Magic Update","Main","11-04-2022", "OK","Playbook") 
  
  console.log("Name of Pull Request: " + pullRequestDiana.title)
  console.log("Information: " + pullRequestDiana.getTitleAndRepository())
  console.log("Status of PR: " +pullRequestDiana.getStatus())