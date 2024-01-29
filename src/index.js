import './style.css';
import { navBar, sideBar, projectShowcase } from './interface';


class toDo {
    constructor(title, dueDate, priority, description = " ", complete = "incomplete") {
        this.title = title;
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        
        this.complete = complete
    }
    
    getInfo() {
        return [this.title, this.description, this.dueDate, this.priority, this.complete]
        
    }

    
    changetoComplete() {
        return this.complete = "complete"
        
    }

    changetoinComplete() {
        return this.complete = "incomplete"
    }

    changePriority(newPriority) {
        return this.priority = newPriority
    }

    changeTitle(newTitle) {
        return this.title = newTitle

    }

    changeDescription(newDescription) {
        return this.description = newDescription
    }

    changedueDate(newDueDate) {
        return this.dueDate = newDueDate
    }

    

    


}


/* Added ability to add new to dos,
change to complete/incomplete and change priotity
need to:
add ability to edit/delete to dos and projects
make sure DOM logic is seperate  */ 

/* could add a fn in the project class to allow this */ 

class Project {
    constructor(title, array = []) {
        this.title = title
        this.array = array
    }
    
    addNewtoDo(title, description, dueDate, priority) {
        const newtoDo = new toDo(title, description, dueDate, priority)
        this.array.push(newtoDo)
    }

    deletetoDo(index) {
        return this.array.splice(index, 1)
    }

    newProjectPrint() {
        console.log(this.title)
        console.log(this.array)
    }

    gettoDos() {
        return this.array
    }

    

}

function newProject(name, projects) {
    const project = new Project(name)
    projects.push(project)
    return 
}

/* from mdn web docs */
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }


function populateStorage() {
    let projects = []
    newProject("home", projects)
    newProject("Today", projects)
    newProject("Example project", projects)
    projects[0].addNewtoDo("Go to the gym!", "2023-01-11", "medium", "Lose some weight fatty!")
    projects[0].addNewtoDo("Touch grass", "2025-05-19", "low", "Too hard :(")
    projects[0].addNewtoDo("Start drinking more water", "2024-01-19", "high", "mmm yummy water")
    projects[1].addNewtoDo("Go to the gym!", "2023-01-11", "medium", "Lose some weight fatty!")
    projects[1].addNewtoDo("Play fortnite", "2025-05-19", "low", "petter griffin")
    projects[1].addNewtoDo("Start drinking", "2024-01-19", "high", "mmm yummy")
    return projects

}

if(storageAvailable("localStorage")) {
    let parsedProjects
    if(!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify(populateStorage()))
        parsedProjects = JSON.parse(localStorage["projects"])
        console.log("This is a first time load!")
        console.log(parsedProjects)
    } else {
        parsedProjects = JSON.parse(localStorage.getItem("projects"))
        console.log("This is a second time load!")

    }
   
    let parsedProjectsClassConverter = []
    for(let i = 0; i < parsedProjects.length; i++) {
        let m = new Project(parsedProjects[i].title, parsedProjects[i].array)
        parsedProjectsClassConverter.push(m)
        let projectToDos = parsedProjectsClassConverter[i].gettoDos()
        for(let i = 0; i < projectToDos.length; i++) {
            let toDoList = projectToDos[i]
            let [title, description, dueDate, priority, complete] = Object.values(toDoList)
            let m = new toDo(title, dueDate, priority, description, complete)
            projectToDos[i] = m
            console.log(projectToDos)
        }
        
    }
    parsedProjects = parsedProjectsClassConverter

    window.onbeforeunload = function () {
        /* cus of this if you try to remove localStorage then it wont, it will still retain localstorage even if you try to remove it on browser */ 
        localStorage.setItem("projects", JSON.stringify(parsedProjects))

    }

   
    
    navBar(parsedProjects)
    sideBar(parsedProjects)
    const home = document.getElementsByClassName("sideBarProject")
    home[0].click()
    console.log(parsedProjects)
    console.log(populateStorage())
}
    else {
        console.log("Damn that sucks. This page is gonna forget everything you put in once you refresh because of how old it is! Get a better browser man.")
        let projects = []
        projects[0].addNewtoDo("Update your browser.", "2023-01-11", "medium", "Locabrowser storage isn't supported, so this is gonna forget everything on refresh.")
        navBar(projects)
        sideBar(projects)
    }


    






/* doing this in interface causes an error. I don't know why but has to be something to do with initialization order with the project class*/


/*newProject("home", projects)
newProject("Today", projects)
newProject("Example project", projects)

sideBar(projects)




projects[0].addNewtoDo("titleB", "2023-01-11", "high", "DescriptionB")
projects[0].addNewtoDo("titleB2", "2025-05-19", "medium", "DescriptionB2")
projects[0].addNewtoDo("titleB3", "2024-01-19", "low", "DescriptionB3")

projects[1].addNewtoDo("titleB", "2023-01-11", "high", "DescriptionB")
projects[1].addNewtoDo("titleB2", "2025-05-19", "medium", "DescriptionB2")
projects[1].addNewtoDo("titleB3", "2024-01-19", "low", "DescriptionB3")
projects[2].addNewtoDo("titleB", "2023-01-11", "high", "DescriptionB")
projects[2].addNewtoDo("titleB2", "2025-05-19", "medium", "DescriptionB2")
projects[1].addNewtoDo("titleB3", "2024-01-19", "low", "DescriptionB3") */

// const home = document.getElementsByClassName("sideBarProject")
// home[0].click()


export {
    toDo,
    Project,
    newProject

}