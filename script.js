let items = [];

//itemsColection fetch
async function fetchItems() {
  try {
    const response = await fetch("./items_collection.json");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();

    renderItems(data);
  } catch (error) {
    console.error(error);
  }
}

// function for renderingItems

function renderItems(data) {
  const catalogSection = document.getElementById("catalogSection");
  const cardWrapper = document.createElement("div");
  const modal = document.createElement("div");

  cardWrapper.className = "cardModalWrapper";
  modal.className = "cardModal";

  cardWrapper.appendChild(modal);
  catalogSection.appendChild(cardWrapper);

  const renderedData = data.longswords;

  for (const category in renderedData) {
    const swords = renderedData[category];
    const listOfTiers = document.createElement("ul");
    const tierHeader = document.createElement("h2");
    listOfTiers.appendChild(tierHeader);

    for (const sword of swords) {
      const listElement = document.createElement("li");
      const nameOfArnament = document.createElement("p");
      const addToCartBtn = document.createElement("button");

      tierHeader.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);
      nameOfArnament.textContent = sword.name;
      addToCartBtn.textContent = "Add to cart";

      listElement.appendChild(nameOfArnament);
      listElement.appendChild(addToCartBtn);

      listOfTiers.appendChild(listElement);
      modal.appendChild(listOfTiers);
    }
  }
}
