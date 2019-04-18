/*
////// Requirements

Create an HTML page that contains a text area and a button labeled Create.

When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.

Insert that new component into the DOM.

When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

Pro tip: The card's id attribute, and the button's id attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the split() method on a string? That will be helpful.

*/

// create iterator in order to increment it later, each time the createNewThing function is run
let iterator = 0;

function createNewThing() {
    // Targeting where the created elements will go
    const placeHere = document.querySelector("#placeHere");
   
    
    //creating event listener on the "create" button
        document.querySelector("#create-btn").addEventListener("click", (e) => {

        // grabbing the text entered into the textarea and storing it in a variable
        const newContent = document.querySelector("#textArea1").value;

        // make the iterator add 1 each time so you can assign it a unique id
        iterator++;
        console.log(iterator);

        // using the above targeted area to add the HTML into the DOM dynamically
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "createdElement");
        newDiv.setAttribute("id", `element-${iterator}`);
        placeHere.appendChild(newDiv);

        let newP = document.createElement("p");
        let newText = document.createTextNode(`${newContent}`);
        newP.appendChild(newText);
        newDiv.appendChild(newP);

        let newButton = document.createElement("button")
        newButton.innerHTML = "Delete";
        newDiv.appendChild(newButton);
        
        
        // adding in delete button using iterator
        document.querySelector(`#element-${iterator}`).addEventListener("click", (e) => {
            // target the parent node of the delete button is pushed
            let selectedDelete = e.target.parentNode;
            // clear the HTML so the item is removed
            newDiv.innerHTML = "";
        });

        // simply clears the text in the textArea after the Create button has been pushed.
        document.querySelector("#textArea1").value = "";
    });
};

createNewThing();

