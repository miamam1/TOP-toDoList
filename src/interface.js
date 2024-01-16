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
            const eraser = document.getElementsByClassName("projectContainer")
            for(let i = 0; i < eraser.length; i++) {
                eraser[0].parentNode.removeChild(eraser[0])
            }
            if(projects[i].title == "home" && projects[i].gettoDos().length == 0) {
                const projectContainer = document.createElement("div")
                projectContainer.classList.add("projectContainer")
                projectContainer.textContent = "I'm empty :( Fill me up with some to dos!"
                contentContainer.append(projectContainer)
            } else {
                projectShowcase(projects, i)
                
            }
            const activebtns = document.getElementsByClassName("active")
            console.log(activebtns.length)

            if(activebtns.length == 0) {
                button.classList.add("active")
            } 
            else {
                for(let i = 0; i < activebtns.length; i++) {
                    activebtns[0].classList.remove("active")
                    button.classList.add("active")
                }
            } 
        }
        sideBarContainer.append(button)
        
    }
    /* have stuff here for the buttons that has an onclick using the i, using the function below */
     contentContainer.append(sideBarContainer)
    

}


function projectShowcase(projects, index) {
    const contentContainer = document.getElementById("contentContainer")
    const project = projects[index].gettoDos()
    

    if(project.length == 0) {
        const projectContainer = document.createElement("div")
        projectContainer.classList.add("projectContainer")
        projectContainer.textContent = "I'm empty. Delete me. Or add stuff to me maybe :)"
        const deleteMe = document.createElement("button")
        deleteMe.textContent = "Delete"
        deleteMe.onclick = () => {
            projects.splice(index, 1)
            const eraser = document.getElementsByClassName("sideBarContainer")
            eraser[0].remove()
            projectContainer.remove()
            sideBar(projects)
        }
        projectContainer.append(deleteMe)
        contentContainer.append(projectContainer)
        return
    }
    const projectContainer = document.createElement("div")
    let toDoInfo
    for(let i = 0; i < project.length; i++) {
        toDoInfo = project[i].getInfo()
        const toDoContainer = document.createElement("div")
        const titleText = document.createElement("p")
        titleText.textContent = toDoInfo[0]
        const dueDateText = document.createElement("p")
        dueDateText.textContent = toDoInfo[2]
        const priorityContainer = document.createElement("div")
        
        if(toDoInfo[3] == "high") {
            priorityContainer.classList.add("highPriority")
        } else if(toDoInfo[3] == "medium") {
            priorityContainer.classList.add("mediumPriority")
        } else if(toDoInfo[3] == "low") {
            priorityContainer.classList.add("lowPriority")
        }
        
        const detailsBTN = document.createElement("button")
        detailsBTN.textContent = "Details"
        detailsBTN.onclick = () => {
            

            /* bugs:
            easy one to fix - when pressed multiple times will create multiple containers that stack up on eachother;
            do this, kinda how thetop answer makes it so you cant click anything apart from the exit button:
            https://stackoverflow.com/questions/6564171/get-all-the-button-tag-types, loop through this, give them a class which does pointer-events: none,
            maybe take on away to account for the exit button which should be at the end of the list you get because you just clicked the button, maybe */
            toDoInfo = project[i].getInfo()
            const titleText = document.createElement("p")
            titleText.textContent = toDoInfo[0]

            const dueDateText = document.createElement("p")
            dueDateText.textContent = toDoInfo[2]

            const priorityText = document.createElement("p")
            priorityText.textContent = toDoInfo[3]

            const detailsContainer = document.createElement("div")

            const descriptionText = document.createElement("p")
            descriptionText.textContent = toDoInfo[1]

            const completeText = document.createElement("p")
            completeText.textContent = toDoInfo[4]

            detailsContainer.classList.add("detailsContainer")
            
            const exitButton = document.createElement("button")
            exitButton.textContent = "Exit"
            exitButton.onclick = () => {
                detailsContainer.remove()
            }
            detailsContainer.append(titleText, dueDateText, priorityText, descriptionText, completeText, exitButton)
            contentContainer.append(detailsContainer)
            
        }
        const deleteBTN = document.createElement("button")
        deleteBTN.textContent = "delete"
        deleteBTN.onclick = () => {
            projects[index].deletetoDo(i)
            toDoContainer.remove()
            projectContainer.remove()
            projectShowcase(projects, index)

        }
        toDoContainer.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
        toDoContainer.classList.add("toDoContainer")
        projectContainer.classList.add("projectContainer")
        toDoContainer.append(priorityContainer, titleText, dueDateText, deleteBTN, detailsBTN)
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