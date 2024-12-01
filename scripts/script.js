import "./onSearch.js"

//itemsColection fetch
async function fetchItems(catalogName) {
  try {
    const response = await fetch("./data/items_collection.json");
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
const modal = document.createElement("div");

function renderItems(data, catalogName) {
  modal.innerHTML = "";

  const closeModalWrapper = document.createElement("div");

  closeModal.innerHTML = "\u00D7";
  closeModalWrapper.className = "closeModalWrapper";
  cardWrapper.className = "cardModalWrapper";
  modal.className = "cardModal";

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
      const detailsElement = document.createElement("details");
      const summaryElement = document.createElement("summary");
      const addToCartBtn = document.createElement("button");

      //price and coin
      const priceWrapper = document.createElement("div");
      const price = document.createElement("div");
      const coinIcon = document.createElement("object");
      priceWrapper.className = "priceWrapper";
      coinIcon.className = "coinIcon";
      coinIcon.data = "./svg/coin.svg";


      tierHeader.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);
      summaryElement.textContent = arnament.name;
      summaryElement.className = "summaryElement";
      detailsElement.className = "detailsElement";
      detailsElement.textContent = arnament.description;
      addToCartBtn.textContent = "Add to cart";
      price.textContent = `${arnament.price}`;
      price.className = "price";

      detailsElement.appendChild(summaryElement);
      listElement.appendChild(detailsElement);
      listElement.appendChild(priceWrapper);
      listElement.appendChild(addToCartBtn);

      listOfTiers.appendChild(listElement);
      modal.appendChild(listOfTiers);

      priceWrapper.appendChild(price);
      priceWrapper.appendChild(coinIcon);
    }
  }
  modal.focus();
}

let modalIsOpen = false;

//open modal
if (catalogWrapper) {
  catalogWrapper.addEventListener("click", (evt) => {
    const catalogName = evt.target.textContent
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_");

    if (evt.target.className === "catalogElement") {
      if (!modalIsOpen) {
        cardWrapper.style.display = "flex";
        fetchItems(catalogName);
        modalIsOpen = true;

        document.addEventListener("keydown", hendleKeydown); //exit modal on esc
      }
    }
  });
}

//exit modal where click !== modal

cardWrapper.addEventListener("click", (evt) => {
  if (evt.target === cardWrapper) {
    closeModalFunction();
    document.removeEventListener("keydown", hendleKeydown);
  }
});

//exit modal where click on "button"

closeModal.addEventListener("click", () => {
  if (cardWrapper) {
    closeModalFunction();
    document.removeEventListener("keydown", hendleKeydown);
  }
});

function closeModalFunction() {
  if (cardWrapper) {
    cardWrapper.innerHTML = "";
    cardWrapper.style.display = "none";
    modalIsOpen = false;
    if (cardWrapper.parentNode) {
      cardWrapper.parentNode.removeChild(cardWrapper);
    }
  }
}

function hendleKeydown(evt) {
  if (evt.key === "Escape") {
    closeModalFunction();
  }
}

//displaying items in cart
let arrOfCartItems = [];

document.addEventListener("click", (evt) => {
  if (
    evt.target.tagName === "BUTTON" &&
    evt.target.textContent === "Add to cart"
  ) {
    const item = {
      name: evt.target.parentElement.querySelector("summary").textContent,
      price: evt.target.parentElement.querySelector("div").textContent,
    };
    arrOfCartItems.push(item);
    localStorage.setItem("itemsInCart", JSON.stringify(arrOfCartItems));
  }
});

