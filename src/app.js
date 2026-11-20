
// app.js runs in the browser.
//
// The browser cannot talk to the database directly.
// It uses fetch() to send information to Netlify Functions.
// The functions communicate with the database.
//
// async and await help JavaScript wait for the server.

// READ: Get all cybersecurity tips from the database
async function loadItems() {
  const response = await fetch("/api/get-items");
  const items = await response.json();

  const list = document.getElementById("item-list");
  list.innerHTML = "";

  for (const item of items) {
    list.innerHTML += `
      <li>
        <div>
          <strong>${item.title}</strong>
          <p>Category: ${item.category}</p>
        </div>

        <button onclick="editItem(${item.id})">Edit</button>
        <button onclick="deleteItem(${item.id})">Delete</button>
      </li>
    `;
  }
}


// CREATE: Add a cybersecurity tip and its category
async function addItem() {
  const titleInput = document.getElementById("title-input");
  const categoryInput = document.getElementById("category-input");

  const title = titleInput.value.trim();
  const category = categoryInput.value.trim();

  if (title === "" || category === "") {
    alert("Please enter both a cybersecurity tip and a category!");
    return;
  }

  await fetch("/api/add-item", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      category: category
    }),
  });

  titleInput.value = "";
  categoryInput.value = "";

  loadItems();
}


// UPDATE: Edit both the tip and its category
async function editItem(id) {
  const newTitle = prompt("Enter the new cybersecurity tip:");

  if (newTitle === null || newTitle.trim() === "") {
    return;
  }

  const newCategory = prompt("Enter the new security category:");

  if (newCategory === null || newCategory.trim() === "") {
    return;
  }

  await fetch("/api/update-item", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      title: newTitle.trim(),
      category: newCategory.trim()
    }),
  });

  loadItems();
}


// DELETE: Remove a cybersecurity tip
async function deleteItem(id) {
  if (!confirm("Are you sure you want to delete this tip?")) {
    return;
  }

  await fetch("/api/delete-item", {
    method: "POST",
    body: JSON.stringify({
      id: id
    }),
  });

  loadItems();
}


// Show the tips when the page opens
loadItems();


// Show or hide extra cybersecurity information
function toggleInfo() {
  const info = document.getElementById("more-info");
  const button = document.getElementById("more-info-button");

  if (info.classList.contains("hidden")) {
    info.classList.remove("hidden");
    button.textContent = "Show Less Information";
  } else {
    info.classList.add("hidden");
    button.textContent = "Show More Information";
  }
}
