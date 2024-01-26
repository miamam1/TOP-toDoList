import { Project, newProject, toDo } from "./index"
import bin from "./delete-outline.svg"
import edit from "./file-edit-outline.svg"
import exit from "./close-box-outline.svg"
import tick from "./check.svg"
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
        newProjectForm.style.display = "flex"
        
         
    }

    const newProjectForm = document.createElement("form")
    newProjectForm.classList.add("newProjectForm")
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
        if(inputProjectTitle.value = "home") {
            projectShowcase(projects, 0)
            newProjectForm.style.display = "none"
            return
        }
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
    
    if(project.length == 0 && projects[index].title == "home" || project.length == 0 && projects[index].title == "Today") {
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
        deleteMe.style.height = "50px"
        deleteMe.style.cursor = "pointer"
        deleteMe.style.backgroundColor = "white"
        deleteMe.style.border = "2.3px solid black"
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
        /* oh my fucking god just check library retard already did this */ 
        /*detailsBTN.style.cssText = `background-image:url(${binIMG})` */
        detailsBTN.classList.add("detailsBTN")
        
        detailsBTN.onclick = () => {
            /* bugs:
            easy one to fix - when pressed multiple times will create multiple containers that stack up on eachother;
            do this, kinda how thetop answer makes it so you cant click anything apart from the exit button:
            https://stackoverflow.com/questions/6564171/get-all-the-button-tag-types, loop through this, give them a class which does pointer-events: none,
            maybe take on away to account for the exit button which should be at the end of the list you get because you just clicked the button, maybe */
            toDoInfo = project[i].getInfo()
            const titleText = document.createElement("p")
            titleText.textContent = toDoInfo[0]
            titleText.style.fontSize = "50px"
            titleText.style.fontWeight = "bold"

            const dueDateText = document.createElement("p")
            dueDateText.innerHTML = `<p> <span class = "detailsBold">Due: </span>${toDoInfo[2]}</p>`

            const priorityText = document.createElement("p")
            priorityText.innerHTML = `<p> <span class = "detailsBold">Priority: </span>${toDoInfo[3]}</p>`
            


            const detailsContainer = document.createElement("div")

            const descriptionText = document.createElement("p")
            // descriptionText.textContent = "Description: " + toDoInfo[1]
            descriptionText.innerHTML = `<p> <span class = "detailsBold">Description: </span>${toDoInfo[1]}</p>`

            const completeText = document.createElement("p")
            // completeText.textContent = "Status: " + toDoInfo[4]
            completeText.innerHTML = `<p> <span class = "detailsBold">Status: </span>${toDoInfo[4]}</p>`

            detailsContainer.classList.add("detailsContainer")

            contentContainer.style.filter = "blur(4px)"
            contentContainer.style.pointerEvents = "none"
            contentContainer.style.userSelect = "none"
            const navBar = document.getElementsByClassName("navbar")
            navBar[0].style.filter = "blur(4px)"
            navBar[0].style.pointerEvents = "none"
            navBar[0].style.userSelect = "none"
            const exitButton = document.createElement("img")
            exitButton.src = exit
            const textContainer = document.createElement("div")
            textContainer.classList.add("textContainer")
            textContainer.append(titleText, dueDateText, priorityText, completeText, descriptionText)
            exitButton.onclick = () => {
                contentContainer.style.filter = "blur(0)"
                contentContainer.style.pointerEvents = "auto"
                contentContainer.style.userSelect = "auto"
                navBar[0].style.filter = "blur(0)"
                navBar[0].style.pointerEvents = "auto"
                navBar[0].style.userSelect = "auto"
                detailsContainer.remove()
            }




            detailsContainer.append(textContainer, exitButton)
            document.body.append(detailsContainer)
            
        }


        
        
        const deleteBTN = document.createElement("img")
        deleteBTN.src = bin
        deleteBTN.classList.add("deleteBTN")
        

        deleteBTN.onclick = () => {
            projects[index].deletetoDo(i)
            toDoContainer.remove()
            projectContainer.remove()
            projectShowcase(projects, index)

        }
        
        


        
        
        
        
        const editBTN = document.createElement("img")
        editBTN.src = edit
        editBTN.classList.add("editBTN")
        
        
        editBTN.onclick = () => {
            const gettoDos = projects[index].gettoDos()
            const gettoDo = gettoDos[i]
            const gettoDoInfo = gettoDos[i].getInfo()
            const edittoDoForm = document.createElement("form")
            const inputTitle = document.createElement("input")
            inputTitle.type = 'text'
            inputTitle.name = 'title'
            inputTitle.placeholder = "Title..."
            inputTitle.value = gettoDoInfo[0]
            const inputDescription = document.createElement("input")
            inputDescription.type = 'text'
            inputDescription.name = 'description'
            inputDescription.value = gettoDoInfo[1]
            inputDescription.placeholder = 'Description...'
            const inputDate = document.createElement("input")
            inputDate.type = 'date'
            inputDate.value = gettoDoInfo[2]
            inputDate.name = 'inputDate'
            const radioBTN1 = document.createElement("input")
            radioBTN1.type = 'radio'
            radioBTN1.value = 'low'
            radioBTN1.name = "priorityINPUT2"
            const radioBTN2 = document.createElement("input")
            radioBTN2.type = 'radio'
            radioBTN2.value = 'medium'
            radioBTN2.name = "priorityINPUT2"
            const radioBTN3 = document.createElement("input")
            radioBTN3.type = 'radio'
            radioBTN3.value = 'high'
            radioBTN3.name = "priorityINPUT2"
             if(gettoDoInfo[3] === "low") {
                radioBTN1.defaultChecked = true
                
            } else if(gettoDoInfo[3] === "medium") {
                radioBTN2.defaultChecked = true
               
            } else if(gettoDoInfo[3] === "high") {
                radioBTN3.defaultChecked = true
                
            } 
            const submitBTN = document.createElement("input")
            submitBTN.type = 'button'
            submitBTN.value = 'Edit'
            submitBTN.onclick = () => {
            const checkedBox = document.querySelector('input[name="priorityINPUT2"]:checked').value
            gettoDo.changeTitle(inputTitle.value)
            gettoDo.changeDescription(inputDescription.value)
            gettoDo.changedueDate(inputDate.value)
            gettoDo.changePriority(checkedBox)
            edittoDoForm.remove()
            projectShowcase(projects, index)
             }
             const closeBTN = document.createElement("button")
            closeBTN.textContent = "Close"
            closeBTN.onclick = (event) => {
                edittoDoForm.remove()
                event.preventDefault()
            }
            edittoDoForm.append(inputTitle, inputDescription, inputDate, radioBTN1, radioBTN2, radioBTN3, submitBTN, closeBTN)
            document.body.append(edittoDoForm)
           
        }
        
        const completeBTN = document.createElement("button")
        
        const gettoDos = projects[index].gettoDos()
        const gettoDoInfo = gettoDos[i].getInfo()
        const getComplete = gettoDoInfo[4]
        completeBTN.onclick = () => {
            const gettoDos = projects[index].gettoDos()
            const gettoDo = gettoDos[i]
            const gettoDoInfo = gettoDos[i].getInfo()
            const getComplete = gettoDoInfo[4]
            if(getComplete == "complete") {
                gettoDo.changetoinComplete()
                const tickIMG = document.getElementsByClassName(`tickIMG${i}`)
                tickIMG[0].remove()
                completeBTN.classList.remove("complete")
                completeBTN.classList.add("incomplete")
                toDoContainer.style.opacity = "1"
                titleText.style.textDecoration = "none"
                
            } else {
                gettoDo.changetoComplete()
                const tickIMG = document.createElement("img")
                tickIMG.classList.add(`tickIMG${i}`)
                tickIMG.src = tick
                tickIMG.style.zIndex = "7"
                completeBTN.append(tickIMG)
                completeBTN.classList.remove("incomplete")
                completeBTN.classList.add("complete")
                toDoContainer.style.opacity = "0.5"
                titleText.style.textDecoration = "line-through"
                
            } 
        }
        completeBTN.classList.add(getComplete, "completeBTN")
        if(getComplete == "complete") {
            toDoContainer.style.opacity = "0.5"
            titleText.style.textDecoration = "line-through"
            const tickIMG = document.createElement("img")
            tickIMG.classList.add(`tickIMG${i}`)
            tickIMG.src = tick
            completeBTN.append(tickIMG)
        }
        
        
        /* needs to read from complete, think about local browser storage, a to do is completed but when you reload it is uncompleted, so it needs to be read
            for ui probably just do the top answer but wihtout tick, filled black = complete, white but black border = not complete, obv with transparency and crossed line 
        */
        const flexContainer = document.createElement("div")
        flexContainer.append(priorityContainer, completeBTN, titleText)
        const flexContainer2 = document.createElement("div")
        flexContainer2.append(detailsBTN, dueDateText, editBTN, deleteBTN)


        flexContainer.classList.add("flexContainer")
        flexContainer2.classList.add("flexContainer2")
        toDoContainer.classList.add("toDoContainer")
        projectContainer.classList.add("projectContainer")
        toDoContainer.append(flexContainer, flexContainer2)
        projectContainer.append(toDoContainer)
        contentContainer.append(projectContainer)
    }
}


















export {
    navBar,
    sideBar, 
    projectShowcase
}