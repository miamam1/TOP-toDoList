import { Project, newProject, toDo } from "./index"

function navBar(projects) {
    const navBar = document.createElement("div")
    const title = document.createElement("h1")
    const newtoDoBTN = document.createElement("button")
    newtoDoBTN.onclick = () => {
        toDoForm.style.display = "block"
        
    }

    const newProjectBTN = document.createElement("button")

    const toDoForm= document.createElement("form")
    const inputTitle = document.createElement("input")
    inputTitle.type = 'text'
    inputTitle.name = 'title'
    inputTitle.placeholder = 'Title...'
    const inputDescription = document.createElement("input")
    inputDescription.type = 'text'
    inputDescription.name = 'description'
    inputDescription.placeholder = 'Description...'
    const inputDate = document.createElement("input")
    inputDate.type = 'date'
    inputDate.name = 'inputDate'
    const radioBTN1 = document.createElement("input")
    radioBTN1.type = 'radio'
    radioBTN1.value = 'low'
    radioBTN1.name = "priorityINPUT"
    const radioBTN2 = document.createElement("input")
    radioBTN2.type = 'radio'
    radioBTN2.value = 'medium'
    radioBTN2.name = "priorityINPUT"
    const radioBTN3 = document.createElement("input")
    radioBTN3.type = 'radio'
    radioBTN3.value = 'high'
    radioBTN3.name = "priorityINPUT"

    const submittoDo = document.createElement("input")
    submittoDo.type = 'button'
    submittoDo.value = 'Submit'
    const checker = document.getElementsByClassName("sideBarProject")
    submittoDo.onclick = (event) => {
        let index;
        for(let i = 0; i < checker.length; i++) {
            if(checker[i].classList.contains("active")) {
                index = i
                break
            }
        }

        const checkedBox = document.querySelector('input[name="priorityINPUT"]:checked').value
        projects[index].addNewtoDo(inputTitle.value, inputDate.value, checkedBox, inputDescription.value)
        console.log(projects[index])
        toDoForm.style.display = "none"
        inputTitle.value = ""
        inputDescription.value = ""
        inputDate.value = ""
        projectShowcase(projects, index)
        event.preventDefault()
         }

        const closeForm = document.createElement("button")
        closeForm.textContent = "Close"
        closeForm.onclick = (event) => {
            toDoForm.style.display = "none"
             toDoForm.style.display = "none"
            inputTitle.value = ""
            inputDescription.value = ""
            inputDate.value = ""
            event.preventDefault()
        }
    toDoForm.append(inputTitle, inputDescription, inputDate, radioBTN1, radioBTN2, radioBTN3, submittoDo, closeForm)
    document.body.append(toDoForm)
    toDoForm.style.display = "none"

    const buttonContainer = document.createElement("div")
    navBar.classList.add("navbar")
    title.classList.add("title")
    newtoDoBTN.classList.add("newtoDoBTN")
    newProjectBTN.classList.add("newProjectBTN")
    buttonContainer.classList.add("buttonContainer")
    title.textContent = "toDo List"
    newtoDoBTN.textContent = "New To do"
    newProjectBTN.textContent = "New Project"

    newProjectBTN.onclick = () => {
        newProjectForm.style.display = "block"
        
         
    }

    const newProjectForm = document.createElement("form")
    const inputProjectTitle = document.createElement("input")
    inputProjectTitle.type = "text"
    inputProjectTitle.value = ""
    inputProjectTitle.title = "title"
    inputProjectTitle.placeholder = "Project title..."
    const closeBTN = document.createElement("button")
    closeBTN.textContent = "Close"
    closeBTN.onclick = (event) => {
        newProjectForm.style.display = "none"
        inputProjectTitle.value = ""
        event.preventDefault()
    }
    const submitBTN = document.createElement("input")
    submitBTN.type = "button"
    submitBTN.value = "Submit"
    submitBTN.onclick = (event) => {
        newProject(inputProjectTitle.value, projects)
        newProjectForm.style.display = "none"
        let x = projects.length - 1
        console.log(x)
        sideBar(projects)
        projectShowcase(projects, x)
        inputProjectTitle.value = ""
        event.preventDefault()
    }

    newProjectForm.append(inputProjectTitle, closeBTN, submitBTN)
    newProjectForm.style.display = "none"
    document.body.append(newProjectForm)


    buttonContainer.append(newtoDoBTN, newProjectBTN)
    navBar.append(title, buttonContainer)
    document.body.append(navBar)
}




function sideBar(projects) {
    const eraser = document.getElementsByClassName("sideBarContainer")
            for(let i = 0; i < eraser.length; i++) {
                eraser[0].parentNode.removeChild(eraser[0])
            }

    
    const contentContainer = document.getElementById("contentContainer")
    const itemsContainer = document.createElement("div")
    const sideBarContainer = document.createElement("div")
    const projectText = document.createElement("h1")
    projectText.textContent = "Projects"
    sideBarContainer.append(projectText)
    projectText.classList.add("projectText")
    itemsContainer.classList.add("itemsContainer")
    sideBarContainer.classList.add("sideBarContainer")
    for(let i = 0; i < projects.length; i++) {
        const button = document.createElement("button")
        button.textContent = projects[i].title
        button.classList.add("sideBarProject")
        button.onclick = function () {
                projectShowcase(projects, i)
        }
        itemsContainer.append(button)
        
    }

    sideBarContainer.append(itemsContainer)
    
    
     contentContainer.append(sideBarContainer)
    

}


function projectShowcase(projects, index) {
    const buttons = document.getElementsByClassName("sideBarProject")
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active")
    }
    buttons[index].classList.add("active")
    const eraser = document.getElementsByClassName("projectContainer")
            for(let i = 0; i < eraser.length; i++) {
                eraser[0].parentNode.removeChild(eraser[0])
            }
    const contentContainer = document.getElementById("contentContainer")
    const project = projects[index].gettoDos()
    
    if(project.length == 0 && projects[index].title == "home") {
        const projectContainer = document.createElement("div")
        projectContainer.classList.add("projectContainer")
        projectContainer.textContent = "I'm empty :( Fill me up with some to dos!"
        contentContainer.append(projectContainer)
        return 
        
    }
    if(project.length == 0) {
        const projectContainer = document.createElement("div")
        projectContainer.classList.add("projectContainer")
        projectContainer.textContent = "I'm empty. Delete me. Or add stuff to me maybe :)"
        const deleteMe = document.createElement("button")
        deleteMe.textContent = "Delete"
        deleteMe.style.width = "50px"
        deleteMe.onclick = () => {
            projects.splice(index, 1)
            const eraser = document.getElementsByClassName("sideBarContainer")
            eraser[0].remove()
            projectContainer.remove()
            sideBar(projects)
            projectShowcase(projects, 0)
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
        const editBTN = document.createElement("button")
        editBTN.textContent = "Edit" 
        editBTN.onclick = () => {
            /* make edit form try to mayhbe reuse code from other forms idk
            use the class functions for to dos in index remember CRUD n stuff no use DOM for data only view */ 
        }

       
        toDoContainer.classList.add("toDoContainer")
        projectContainer.classList.add("projectContainer")
        toDoContainer.append(priorityContainer, titleText, dueDateText, deleteBTN, detailsBTN, editBTN)
        projectContainer.append(toDoContainer)
        contentContainer.append(projectContainer)
    }
}


















export {
    navBar,
    sideBar, 
    projectShowcase
}