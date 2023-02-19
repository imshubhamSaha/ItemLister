const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById("item").value;
  const newItem2 = document.getElementById("item2").value;
  //Create new paragraph
  const para = document.createElement("p");
  // Add text node with input value
  para.appendChild(document.createTextNode(newItem2));
  // Create new li element
  const li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // li.appendChild(para);

  // Create del button element
  const deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm float-right delete";
  editBtn.appendChild(document.createTextNode("Edit"));

  //Append edit button to li
  li.appendChild(editBtn);

  li.appendChild(para);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  const text = e.target.value.toLowerCase();
  // Get list
  const items = itemList.getElementsByTagName("li");

  // Convert to an array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    const itemName2 = item.lastChild.textContent;

    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      itemName2.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
