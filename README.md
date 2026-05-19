# FlavorFind - Recipe Recommender App

FlavorFind is a responsive and interactive food recipe recommender web application built using HTML, CSS, and JavaScript.

The application integrates with TheMealDB API to allow users to search and discover recipes using ingredients and cuisine types.

---

## Features

- Search recipes using ingredients
- Filter recipes by cuisine type
- Fetch live recipe data from TheMealDB API
- Responsive design for:
  - Desktop
  - Tablet
  - Mobile
- Interactive recipe cards
- Recipe images and categories
- YouTube cooking tutorial links
- External recipe source links
- Privacy Policy section
- Cookie Policy section
- Smooth scrolling navigation
- Modern food-themed UI design

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- TheMealDB API

---

## Project Structure

```bash
FlavorFind/
│
├── index.html
├── style.css
├── script.js
└── README.md
````

---

## API Used

This project uses the free food recipe API from TheMealDB.

API Website:

[https://www.themealdb.com/api.php](https://www.themealdb.com/api.php)

Example Endpoint:

```bash
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken
```

---

## How the Application Works

### 1. Ingredient Search

Users enter ingredients into the search field.

Example:

```bash
chicken, rice
```

The application sends a request to TheMealDB API and fetches matching recipes.

---

### 2. Cuisine Filtering

Users can select cuisine categories such as:

* American
* Italian
* Mexican
* Indian
* Chinese
* French
* Japanese
* Thai

Recipes are filtered dynamically based on the selected cuisine.

---

### 3. Recipe Display

Each recipe card includes:

* Recipe image
* Recipe title
* Cuisine type
* Category
* Recipe instructions preview
* YouTube cooking tutorial
* External recipe link

---

## Responsive Design

The application is fully responsive using CSS media queries.

Optimized for:

* Mobile devices
* Tablets
* Laptops
* Large screens

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flavorfind.git
```

---

### 2. Open the Project

Navigate to the project folder:

```bash
cd flavorfind
```

---

### 3. Run the Application

Open `index.html` in your browser.

No additional installation or dependencies are required.

---

## Future Improvements

Possible enhancements include:

* Dark mode
* Favorite recipes
* User authentication
* Save recipes to local storage
* Pagination
* Advanced ingredient filtering
* Meal preparation time
* Nutritional information
* AI recipe recommendations

---

## Privacy Policy

FlavorFind does not collect sensitive personal information.

Search queries are used only for recipe recommendation functionality.

---

## Cookie Policy

The application may use browser storage or cookies to improve user experience and performance.

---

## Credits

Recipe data provided by:

TheMealDB API

Images sourced from:

Unsplash

---

## Footer

Made in the kitchen with love.

---

## License

This project is open-source and available for educational and personal use.

```
```
