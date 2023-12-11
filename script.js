// Select the form
const form = document.querySelector("#new-item-form");
// Select the item you want to add
const itemInput = document.querySelector("#item-input");
// Select the list
const list = document.querySelector("#list");

// (1) --- Adding an Item to the List ---
// When a form is submitted, create a new element
form.addEventListener("submit", (e) => {
  // Prevent the page from refreshing after submitting the form
  e.preventDefault();

  // Create a new span element
  const newElement = document.createElement("div");

  // Set the innerText of the newElement to the value retrieved from input text
  newElement.className = "list-item";
  newElement.innerText = itemInput.value;

  // Append to the list
  list.append(newElement);

  // Set the value of the textbox to be blank
  itemInput.value = "";

  // (2) --- Removing an Item from the List ---
  const addedList = document.querySelectorAll(".list-item");

  // Loop through each item to add an eventListener
  addedList.forEach((eachDiv) => {
    // Listen out for a click to remove the div
    eachDiv.addEventListener("click", () => {
      eachDiv.remove();
    });
  });
});
