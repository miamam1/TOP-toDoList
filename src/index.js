import './style.css';



const myNuts = document.createElement("h1")
myNuts.classList.add("'myNuts")
myNuts.textContent = "asd"
document.body.append(myNuts)


/* view examples of what to do, try to implement the SOLID principles talked about but probably
not to the point where i take months to finish the list */

/* before starting probably btrainstorm and check previous shit/other ppls code to see what you should be doin */

/* also; for UI kinda wanna do what I did for the library project cus it looks nice and is low effort - more time to think on functionality */

/* first, start off making the to do app in console only, similar to last project we don't want to have to rely on the DOM for our logic. */


class toDo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.complete = "incomplete"
    }
    
    toDoPrint() {
        console.log(this.title, this.description, this.dueDate, this.notes)
        return "return statement here todoprint()"
        
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
    
    addNewtoDo(title, description, dueDate, priority, notes) {
        const newtoDo = new toDo(title, description, dueDate, priority, notes)
        this.array.push(newtoDo)
    }

    newProjectPrint() {
        console.log(this.title)
        console.log(this.array)
    }

    gettoDos() {
        return this.array
    }

}


const newProject = new Project("Cool title")
newProject.addNewtoDo("kys", "kys2", "kys3", "kys4", "kys5")
newProject.addNewtoDo("asd", "asd", "asd", "asd", "asd")
newProject.newProjectPrint()
const gettoDos = newProject.gettoDos()
gettoDos[0].changetoComplete()
gettoDos[0].changePriority("medium")
newProject.newProjectPrint()



