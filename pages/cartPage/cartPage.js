const listOfItmInCart = document.getElementById("listOfItmInCart");

document.addEventListener("DOMContentLoaded", () => {
  let arrOfSavedItems = JSON.parse(localStorage.getItem("itemsInCart"));
  if (arrOfSavedItems.length !== 0) {
    // adding element from storage
    arrOfSavedItems.forEach((element) => {
      const elementOfCartList = document.createElement("li");
      const removeFromCartBtn = document.createElement("div");
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
        localStorage.setItem("itemsInCart", JSON.stringify(arrOfSavedItems));
        checkIfCartIsEmpty();
      });
    });

    //adding button that removes all elements
    const removeAll = document.createElement("button");
    removeAll.textContent = "Remove all  !!";
    removeAll.className = "removeAll";
    listOfItmInCart.appendChild(removeAll);

    removeAll.addEventListener("click", onRemove);

    function onRemove() {
      arrOfSavedItems = [];
      localStorage.setItem("itemsInCart", JSON.stringify(arrOfSavedItems));
      listOfItmInCart.innerHTML = "";
      checkIfCartIsEmpty();
    }
  } else if (listOfItmInCart) {
    checkIfCartIsEmpty();
  }

  function checkIfCartIsEmpty() {
    if (
      !Array.from(listOfItmInCart.children).some(
        (child) => child.tagName === "LI"
      )
    ) {
      listOfItmInCart.innerHTML = "";
      listOfItmInCart.textContent =
        "There are no items in here, please add something.";
    }
  }
});
