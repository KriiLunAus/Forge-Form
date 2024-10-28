# Untitled

# Forge & Form

**Forge & Form** is an e-commerce web application for a medieval-themed armory shop. It allows users to browse various weapons and armor, add items to their cart, and manage the items in the cart.

## Table of Contents

- [Project Structure](https://www.notion.so/10a3da7567f280559b2ff0f99f54c03c?pvs=21)
- [Features](https://www.notion.so/10a3da7567f280559b2ff0f99f54c03c?pvs=21)
- [Installation](https://www.notion.so/10a3da7567f280559b2ff0f99f54c03c?pvs=21)
- [Usage](https://www.notion.so/10a3da7567f280559b2ff0f99f54c03c?pvs=21)
- [Technologies Used](https://www.notion.so/10a3da7567f280559b2ff0f99f54c03c?pvs=21)
- [Future Improvements](https://www.notion.so/10a3da7567f280559b2ff0f99f54c03c?pvs=21)

---

## Project Structure

```bash
bash
Copy code
Forge & Form/
├── css/
│   └── styles.css          # Main stylesheet
├── pages/
│   └── cartPage/
│       ├── cartPage.html   # Cart page
│       ├── cartPage.css    # Cart page styles
│       └── cartPage.js     # Cart page logic
├── scripts/
│   └── script.js           # Main JS logic for the shop
├── svg/
│   ├── anvil.svg           # SVG icons for the shop
│   ├── longsword.svg       # Various weapon and armor icons
│   ├── helmet.svg
│   └── ...                 # Other icons for items
├── json/
│   └── items_collection.json   # JSON file containing weapon and armor items
├── index.html              # Main page of the shop
└── README.md               # Instructions and project overview

```

---

## Features

- **Weapon and Armor Catalog**: Browse a variety of medieval weapons (swords, shields, etc.) and armor (helmets, gauntlets, etc.).
- **Modal Popup**: Click on any item category to open a modal displaying items from the selected category.
- **Add to Cart**: Add items to your cart from the modal.
- **Persistent Cart**: Items are saved to `localStorage`, so the cart persists between page reloads.
- **View and Manage Cart**: A dedicated cart page allows users to view items in the cart, remove individual items, or clear the entire cart.

---

## Installation

1. **Clone the repository:**
    
    ```bash
    bash
    
    git clone https://github.com/your-repo/forge-form.git
    
    ```
    
2. **Navigate to the project directory:**
    
    ```bash
    bash
    
    cd forge-form
    
    ```
    
3. **Open `index.html` in your browser:**
Double-click the `index.html` file or serve it using a local server like `live-server` in VSCode for a smoother experience.

---

## Usage

1.  **Home Page:**
    - Browse the categories of weapons and armor on the main page.
    - Clicking on any category (e.g., "Longswords") will display the items in that category in a modal.
    - Add items to your cart using the "Add to cart" button in the modal.
2. **Cart Page:**
    - Click on the cart icon to navigate to the cart page.
    - View all the items you have added to the cart.
    - Remove individual items or clear the cart completely using the "Remove all" button.
3. **Persistent Cart:**
    - The cart contents are saved in `localStorage`, ensuring that the items persist even after refreshing the page or navigating back to the shop.

---

## Technologies Used

- **HTML**: Structure and content of the application.
- **CSS**: Styling of the application, including layout, fonts, and responsiveness.
- **JavaScript**: Implements the interactive features such as modal handling, adding/removing items from the cart, and managing localStorage.
- **SVG Icons**: Various weapon and armor icons are displayed using SVG files for clarity and scalability.
- **localStorage**: Used to save the user's cart items between sessions.

---

## Future Improvements

- **Responsive Design**: Improve mobile responsiveness for a better user experience on smaller screens.
- **Search and Filtering**: Add search and filter functionality to make it easier to find specific items in the catalog.
- **Enhanced Item Details**: Add more details to each item (e.g., price, materials, stats) in the modal pop-up.

---

## License

This project is open-source. Feel free to contribute or use it for your own purposes.

---

## Author

Created by KriiLunAus.

For questions or contributions, please reach out at bosik.dmutro@gmail.com.