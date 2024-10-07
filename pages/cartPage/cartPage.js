const listOfItmInCart = document.getElementById("listOfItmInCart");

document.addEventListener("DOMContentLoaded", () => {
  let arrOfSavedItems = JSON.parse(localStorage.getItem("itemsInCart"));
  if (arrOfSavedItems.length !== 0) {
    // adding element from storage

    arrOfSavedItems.forEach((element) => {
      const removeFromCartBtn = document.createElement("div");
      const elementOfCartList = document.createElement("li");
      const removeBtnWrapper = document.createElement("div");

      removeFromCartBtn.className = "removeBtn";
      removeBtnWrapper.className = "removeBtnWrapper";
      removeFromCartBtn.textContent = "\u00D7";
      elementOfCartList.textContent = element;

      listOfItmInCart.appendChild(elementOfCartList);
      elementOfCartList.appendChild(removeBtnWrapper);

      removeBtnWrapper.appendChild(removeFromCartBtn);

      // removing list element(from page and storage)

      removeFromCartBtn.addEventListener("click", () => {
        elementOfCartList.remove();

        arrOfSavedItems = arrOfSavedItems.filter((item) => {
          return item !== element;
        });
        console.log(arrOfSavedItems);
        localStorage.setItem("itemsInCart", JSON.stringify(arrOfSavedItems));
        checkIfCartIsEmpty();
      });
    });
  } else if (listOfItmInCart) {
    listOfItmInCart.textContent =
      "There is no items in here, please add something.";
  }

  function checkIfCartIsEmpty() {
    if (listOfItmInCart.children.length === 0) {
      listOfItmInCart.textContent =
        "There are no items in here, please add something.";
    }
  }
});
