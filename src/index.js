import './style.css';
import { navBar, sideBar, projectShowcase } from './interface';





/* view examples of what to do, try to implement the SOLID principles talked about but probably
not to the point where i take months to finish the list */

/* before starting probably btrainstorm and check previous shit/other ppls code to see what you should be doin */

/* also; for UI kinda wanna do what I did for the library project cus it looks nice and is low effort - more time to think on functionality */

/* first, start off making the to do app in console only, similar to last project we don't want to have to rely on the DOM for our logic. */


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

    /* when calling these functions for some reason updates weirdly, e.g. if there is a new todo, yhou print it, and do this function afterwards, it will still
    be listed as complete
    1. console.log(todo) <- what 3 said 
    2. changetocomplete()
    3. console.log(todo) <- these will both be the same
    */
    changetoComplete() {
        return this.complete = "complete"
        
    }

    changetoinComplete() {
        return this.complete = "incomplete"
    }

    changePriority(newPriority) {
        return this.priotity = newPriority
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

navBar()

/* doing this in interface causes an error. I don't know why but has to be something to do with initialization order with the project class*/


newProject("home", projects)
newProject("Today", projects)
newProject("A project", projects)
sideBar(projects)




projects[1].addNewtoDo("titleB", "dueDateB", "high", "DescriptionB")
projects[1].addNewtoDo("titleB2", "dueDateB2", "medium", "DescriptionB2")
projects[1].addNewtoDo("titleB3", "dueDateB3", "low", "DescriptionB3")
/* big brain, could use the method above for functions for DOM or smth */ 
/* also check emails send myself an image */ 


const home = document.getElementsByClassName("sideBarProject")
home[0].click()


export {
    toDo,
    Project,
    newProject

}