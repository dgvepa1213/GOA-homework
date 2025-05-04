// Select the existing list
const itemList = document.getElementById("itemList");

// Create a new list item with the text "Orange"
const newItem = document.createElement("li");
newItem.textContent = "Orange";

// Add the new list item to the beginning of the list
itemList.insertBefore(newItem, itemList.firstElementChild);

// Remove the last list item ("Cherry") from the list
itemList.removeChild(itemList.lastElementChild);

// Log the text content of the first list item
console.log("First item:", itemList.firstElementChild.textContent);

// Log the text content of the parent element of the second list item
console.log("Parent of second item:", itemList.children[1].parentElement.nodeName);