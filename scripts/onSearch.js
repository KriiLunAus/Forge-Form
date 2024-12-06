const searchField = document.querySelector(".searchInput");
const searchResult = document.querySelector(".searchResult");

fetchItems();
let arnaments = []
searchField.addEventListener("input", ((evt) => {
  
  
  if (evt.target.value === "") {
    searchResult.classList.remove("active")
    searchResult.classList.add("hidden");
  }


  setTimeout(() => {
    searchResult.innerHTML = "";
    if (evt.target.value !== "") {
    searchResult.classList.remove("hidden");
    searchResult.classList.remove("noData");
    searchResult.classList.add("active");
    const searchedItems = arnaments.filter((item) => {
      return item.name.toLowerCase().includes(evt.target.value.toLowerCase())
    })
      if (searchedItems.length === 0) {
        searchResult.innerHTML = "No items found. Please try something else."
        searchResult.classList.add("noData");
      }
      searchResult.appendChild(renderSearchedItems(searchedItems));
  }
  }, 1000);
}));

async function fetchItems() {
  try {
    const response = await fetch("./data/items_collection.json");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
      getAllArnaments(data);
  } catch (error) {
    console.error(error);
    }
}


function getAllArnaments(data) {
  for (const category in data) {
    const rarityLevels = data[category];
    for (const rarity in rarityLevels) {
      const itemsArray = rarityLevels[rarity];
      if (Array.isArray(itemsArray)) {
        itemsArray.forEach(item => {
          if (item.name && item.price) {
            arnaments.push(item)
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
    const price = document.createElement("p");
    const coinIcon = document.createElement("img");

    coinIcon.className = "coinIcon";
    coinIcon.src = "./svg/coin.svg";
    price.textContent = item.price;
    price.className = "price";
    listElement.className = "listElement"
    listElement.textContent = item.name;

    price.appendChild(coinIcon);
    listElement.appendChild(price);
    listOfItems.appendChild(listElement);

  }
  return listOfItems;
}