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









export {
    navBar
}