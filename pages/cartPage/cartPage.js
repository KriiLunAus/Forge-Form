const listOfItmInCart = document.getElementById("listOfItmInCart");

document.addEventListener("DOMContentLoaded", () => {
  const arrOfSavedItems = JSON.parse(localStorage.getItem("itemsInCart"));
  if (arrOfSavedItems) {
    arrOfSavedItems.forEach((element) => {
      const elementOfCartList = document.createElement("li");
      const removeFromCartBtn = document.createElement("div");
      const removeBtnWrapper = document.createElement("div");

      removeBtnWrapper.className = "removeBtnWrapper";
      removeFromCartBtn.textContent = "\u00D7";
      elementOfCartList.textContent = element;

      listOfItmInCart.appendChild(elementOfCartList);
      elementOfCartList.appendChild(removeBtnWrapper);

      removeBtnWrapper.appendChild(removeFromCartBtn);
    });
  } else {
  }
});
