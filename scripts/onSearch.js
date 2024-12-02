const searchField = document.querySelector(".searchInput");
const searchResult = document.querySelector(".searchResult");
searchField.addEventListener("input", onSearch);

let arrayOfArnamentsName = []; 
fetchItems();

function onSearch(evt) {
  searchResult.innerHTML = "";
    if (evt.target.value === "") {
        searchResult.classList.remove("active")
        searchResult.classList.add("hidden");
    }else if (evt.target.value !== "") {
        searchResult.classList.remove("hidden")
        searchResult.classList.add("active");

        const searchedItems = arrayOfArnamentsName.filter((item) => {
          return item.toLowerCase().includes(evt.target.value.toLowerCase())
        })   
      searchResult.appendChild(renderSearchedItems(searchedItems));
    } 
}


async function fetchItems() {
  try {
    const response = await fetch("./data/items_collection.json");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
      const data = await response.json();
      getAllNames(data);
  } catch (error) {
    console.error(error);
    }
}


function getAllNames(data) {
  for (const category in data) {
    const rarityLevels = data[category];
    for (const rarity in rarityLevels) {
      const itemsArray = rarityLevels[rarity];
      if (Array.isArray(itemsArray)) {
        itemsArray.forEach(item => {
          if (item.name) {
            arrayOfArnamentsName.push(item.name)
          }
        });
      }
    }
  }
}


function renderSearchedItems(items) {
  const listOfItems = document.createElement("ul"); 
  

  for (const item of items) { 
    const listElement = document.createElement("li");
    listElement.textContent = item;
    listOfItems.appendChild(listElement);
  }
  return listOfItems;
}