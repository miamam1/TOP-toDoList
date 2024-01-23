import './style.css';
import { navBar, sideBar, projectShowcase } from './interface';


class toDo {
    constructor(title, dueDate, priority, description = " ") {
        this.title = title;
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.complete = "incomplete"
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
    constructor(title) {
        this.title = title
        this.array = []
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



let projects = []

navBar(projects)

/* doing this in interface causes an error. I don't know why but has to be something to do with initialization order with the project class*/


newProject("home", projects)
newProject("Today", projects)
newProject("A project", projects)

sideBar(projects)




projects[0].addNewtoDo("titleB", "dueDateB", "high", "DescriptionB")
projects[0].addNewtoDo("titleB2", "dueDateB2", "medium", "DescriptionB2")
projects[0].addNewtoDo("titleB3", "dueDateB3", "low", "DescriptionB3")


const home = document.getElementsByClassName("sideBarProject")
home[0].click()


export {
    toDo,
    Project,
    newProject

}