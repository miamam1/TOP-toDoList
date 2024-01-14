import { Project, newProject, toDo } from "./index"

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
    const contentContainer = document.getElementById("contentContainer")
    const sideBarContainer = document.createElement("div")
    sideBarContainer.classList.add("sideBarContainer")
    for(let i = 0; i < projects.length; i++) {
        const button = document.createElement("button")
        button.textContent = projects[i].title
        /* projects[i].addNewtoDo("a", "a2", "a3", "a4", "a5") */
        /* for some reason this works here but outside doesn't */
        button.classList.add("sideBarProject")
        button.onclick = function () {
            projectShowcase(projects, i)
            
        }
        sideBarContainer.append(button)
        
    }
    /* have stuff here for the buttons that has an onclick using the i, using the function below */
     contentContainer.append(sideBarContainer)
    

}


function projectShowcase(projects, index) {
    const eraser = document.getElementsByClassName("projectContainer")
    for(let i = 0; i < eraser.length; i++) {
        eraser[0].parentNode.removeChild(eraser[0])
    }
    const contentContainer = document.getElementById("contentContainer")
    const project = projects[index].gettoDos()
    const projectContainer = document.createElement("div")
    let toDoInfo
    for(let i = 0; i < project.length; i++) {
        toDoInfo = project[i].getInfo()
        const toDoContainer = document.createElement("div")
        const titleText = document.createElement("p")
        titleText.textContent = toDoInfo[0]
        const dueDateText = document.createElement("p")
        dueDateText.textContent = toDoInfo[2]
        const priorityText = document.createElement("p")
        priorityText.textContent = toDoInfo[3]
        toDoContainer.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
        toDoContainer.classList.add("toDoContainer")
        projectContainer.classList.add("projectContainer")
        toDoContainer.append(titleText, dueDateText, priorityText)
        projectContainer.append(toDoContainer)
        contentContainer.append(projectContainer)
    }
}







/* Ok got way to show  implment classes into different file
Idea: need a function that can make a new project, and also display it in DOM. Kinda like the most upvoted solution 
Newer Idea: have these as seperate functions idiot, also make it so the display in DOM is based off of whatever sidebar button is active, kinda like
the previous project with restaraunts 
*/ 

/* project inerface should just take name, add add it to the sidebar */ 











export {
    navBar,
    sideBar, 
    projectShowcase
}