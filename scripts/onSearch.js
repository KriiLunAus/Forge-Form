const searchField = document.querySelector(".searchInput");
const searchResult = document.querySelector(".searchResult");
searchField.addEventListener("input", onSearch);


const arnaments = []
fetchItems();

function onSearch(evt) {
  searchResult.innerHTML = "";
    if (evt.target.value === "") {
        searchResult.classList.remove("active")
        searchResult.classList.add("hidden");
    }else if (evt.target.value !== "") {
        searchResult.classList.remove("hidden")
        searchResult.classList.add("active");

      const searchedItems = arnaments.filter((item) => {
          return item.name.toLowerCase().includes(evt.target.value.toLowerCase())
        })   
      console.log(searchedItems)
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
    const coinIcon = document.createElement("object");

    coinIcon.className = "coinIcon";
    coinIcon.data = "./svg/coin.svg";
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