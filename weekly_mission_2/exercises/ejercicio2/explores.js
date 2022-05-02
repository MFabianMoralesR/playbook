const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


console.log("Nombre explorers")
explorers.forEach(explorer => console.log(explorer.name))

console.log("Stack explorers")
explorers.forEach(explorer => console.log(`Explorer name: ${explorer.name} - Stack ${explorer.stack}`))

console.log("Lista Stack")
const stackList = explorers.map((explorer) => explorer.stack)
console.log(stackList)

console.log("Explorers with js stack")
const explorersJS = explorers.filter((explorer) => explorer.stack.includes("js"))
console.log(explorersJS)

console.log("Explorers from CDMX")
const explorersFromCDMX = explorers.filter((explorer) => explorer.city=="CDMX")
console.log(explorersFromCDMX)