//itemsColection fetch
async function fetchItems(catalogName) {
  try {
    const response = await fetch("./items_collection.json");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    renderItems(data, catalogName);
  } catch (error) {
    console.error(error);
  }
}

// function for renderingItems
const catalogSection = document.getElementById("catalogSection");
const catalogWrapper = document.getElementById("catalogWrapper");
const closeModal = document.createElement("div");
const cardWrapper = document.createElement("div");

function renderItems(data, catalogName) {
  const closeModalWrapper = document.createElement("div");
  const modal = document.createElement("div");

  closeModal.innerHTML = "\u00D7";
  closeModalWrapper.className = "closeModalWrapper";
  cardWrapper.className = "cardModalWrapper";
  modal.className = "cardModal";

  // modal.setAttribute("aria-hidden", "false"); // Modal is visible
  // cardWrapper.setAttribute("role", "dialog"); // Indicate it's a dialog

  closeModalWrapper.appendChild(closeModal);
  modal.appendChild(closeModalWrapper);
  cardWrapper.appendChild(modal);
  catalogSection.appendChild(cardWrapper);

  const renderedData = data[catalogName];

  for (const category in renderedData) {
    const arnaments = renderedData[category];

    const listOfTiers = document.createElement("ul");
    const tierHeader = document.createElement("h2");

    listOfTiers.appendChild(tierHeader);

    for (const arnament of arnaments) {
      const listElement = document.createElement("li");
      const nameOfArnament = document.createElement("p");
      const addToCartBtn = document.createElement("button");

      tierHeader.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);
      nameOfArnament.textContent = arnament.name;
      addToCartBtn.textContent = "Add to cart";

      listElement.appendChild(nameOfArnament);
      listElement.appendChild(addToCartBtn);

      listOfTiers.appendChild(listElement);
      modal.appendChild(listOfTiers);
    }
  }
  modal.focus();
}

let modalIsOpen = false;

catalogWrapper.addEventListener("click", (evt) => {
  const catalogName = evt.target.textContent.trim().toLowerCase();

  if (evt.target.className === "catalogElement") {
    if (!modalIsOpen) {
      cardWrapper.style.display = "flex";
      fetchItems(catalogName);
      modalIsOpen = true;
    }
  }
});

closeModal.addEventListener("click", () => {
  if (cardWrapper) {
    // cardWrapper.setAttribute("aria-hidden", "true"); // Set aria-hidden to true

    cardWrapper.innerHTML = "";
    cardWrapper.style.display = "none";
    modalIsOpen = false;
    if (cardWrapper.parentNode) {
      cardWrapper.parentNode.removeChild(cardWrapper);
    }
  }
});
