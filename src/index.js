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
    }
    
    toDoPrint() {
        console.log(this.title, this.description, this.dueDate, this.notes)
    }

}



const swag = new toDo("do stuff", "do some stuff innit", "some point", "idk", "these some notes!")



swag.toDoPrint()

