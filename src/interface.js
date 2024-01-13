import { Project, toDo } from "./index"

function navBar() {
    const navBar = document.createElement("div")
    const title = document.createElement("h1")
    const newtoDoBTN = document.createElement("button")
    const newProjectBTN = document.createElement("button")
    const buttonContainer = document.createElement("div")
    navBar.classList.add("navbar")
    title.classList.add("title")
    newtoDoBTN.classList.add("newtoDoBTN")
    newProjectBTN.classList.add("newProjectBTN")
    buttonContainer.classList.add("buttonContainer")
    title.textContent = "toDo List"
    newtoDoBTN.textContent = "New To do"
    newProjectBTN.textContent = "New Project"
    buttonContainer.append(newtoDoBTN, newProjectBTN)
    navBar.append(title, buttonContainer)
    document.body.append(navBar)
}


/* have a list of projects that gets added to everytime a new project is made */

function sideBar(projects) {
    const sideBarContainer = document.createElement("div")
    sideBarContainer.classList.add("sideBarContainer")
    for(let i = 0; i < projects.length; i++) {
        const button = document.createElement("button")
        button.textContent = projects[i].title
        /* projects[i].addNewtoDo("a", "a2", "a3", "a4", "a5") */
        /* for some reason this works here but outside doesn't */
        button.classList.add("sideBarProject")
        sideBarContainer.append(button)
        
    }
     document.body.append(sideBarContainer)
    

}



/* Ok got way to show  implment classes into different file
Idea: need a function that can make a new project, and also display it in DOM. Kinda like the most upvoted solution 
Newer Idea: have these as seperate functions idiot, also make it so the display in DOM is based off of whatever sidebar button is active, kinda like
the previous project with restaraunts 
*/ 

/* project inerface should just take name, add add it to the sidebar */ 



function newProjectUI(name, projects) {
    const project = new Project(name)
    projects.push(project)
    return 
}


/* so our current problem: can't access the projects list of to dos */



export {
    navBar,
    newProjectUI,
    sideBar
}