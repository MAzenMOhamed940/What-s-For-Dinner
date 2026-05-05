var mealList = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    rating: 4.4,
    reviews: 198,
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    ingredients: [
      "1 large head of romaine lettuce, chopped",
      "1/2 cup Caesar dressing",
      "1/4 cup grated Parmesan cheese",
      "1 cup croutons",
      "2 grilled chicken breasts, sliced (optional)",
      "Salt and pepper to taste",
      "Lemon wedges for serving",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces",
      "In a large bowl, combine the chopped romaine lettuce and Caesar dressing. Toss until the lettuce is evenly coated.",
      "Add the grated Parmesan cheese and croutons to the bowl. Toss again to distribute the ingredients.",
      "If using grilled chicken, add the sliced chicken breasts to the salad and toss gently to combine.",
      "Season with salt and pepper to taste.",
      "Serve the Caesar Salad with lemon wedges on the side for an extra burst of flavor.",
      "Enjoy your delicious Caesar Salad!",
    ],
    image: "./images/cesar-salad.png",
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 18,
      fat: 22,
      fiber: 3,
      sodium: 680,
    },
    tips: [
      "For a healthier version, use a light Caesar dressing or make your own with Greek yogurt.",
      "Add grilled shrimp or bacon for extra flavor and protein.",
      "Use homemade croutons for a fresher taste.",
      "Toss the salad just before serving to keep the lettuce crisp.",
    ],

    badge: ["Easy", "Mediterranean"],
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description: "Creamy pasta with pancetta and Parmesan cheese",
    rating: 4.7,
    reviews: 256,
    prepTime: 10,
    cookTime: 50,
    servings: 4,
    ingredients: [
      "12 ounces spaghetti",
      "4 ounces pancetta or bacon, diced",
      "2 large eggs",
      "1 cup grated Parmesan cheese",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Fresh parsley for garnish (optional)",
    ],
    instructions: [
      "Cook the spaghetti according to the package directions.",
      "In a large pan, cook the pancetta or bacon until crispy.",
      "In a bowl, whisk together the eggs and grated Parmesan cheese.",
      "Drain the cooked spaghetti and add it to the pan with the pancetta or bacon.",
      "Remove the pan from heat and quickly stir in the egg and cheese mixture.",
      "Season with salt and pepper to taste.",
      "Garnish with fresh parsley if desired.",
    ],
    image: "./images/Spaghetti-Sauce.jpg",
    nutrition: {
      calories: 450,
      protein: 18,
      carbs: 45,
      fat: 20,
      fiber: 2,
      sodium: 520,
    },
    tips: [
      "For a healthier version, use turkey bacon or lean ground beef instead of pancetta.",
      "Add a pinch of nutmeg to the egg and cheese mixture for extra flavor.",
      "Serve immediately while hot for the best texture.",
    ],
    badge: ["Easy", "Italian"],
  },
  {
    id: 3,
    name: "Chicken Stir-Fry",
    description: "Quick and flavorful stir-fry with vegetables and soy sauce",
    rating: 4.5,
    reviews: 200,
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      "1 lb chicken breast, sliced",
      "2 cups mixed vegetables",
      "3 tbsp soy sauce",
      "2 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "2 tbsp vegetable oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat the vegetable oil in a large skillet or wok over high heat.",
      "Add the sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add the mixed vegetables and stir-fry for another 3-5 minutes.",
      "In a small bowl, whisk together the soy sauce, garlic, and ginger.",
      "Pour the sauce over the chicken and vegetables, and stir to combine.",
      "Season with salt and pepper to taste.",
      "Serve hot with rice or noodles.",
    ],
    image: "./images/Chicken-stir-fry-.png",
    nutrition: {
      calories: 300,
      protein: 25,
      carbs: 20,
      fat: 15,
      fiber: 3,
      sodium: 400,
    },
    tips: [
      "For a spicier version, add red pepper flakes or sriracha sauce.",
      "Use frozen vegetables if fresh ones are not available.",
      "Marinate the chicken in the soy sauce for extra flavor.",
    ],
    badge: ["Quick", "Asian"],
  },
  {
    id: 4,
    name: "Vegetable Curry",
    description: "Aromatic and flavorful curry with mixed vegetables",
    rating: 4.6,
    reviews: 180,
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    ingredients: [
      "2 cups mixed vegetables",
      "1 can coconut milk",
      "2 tbsp curry paste",
      "1 tbsp vegetable oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat the vegetable oil in a large pan over medium heat.",
      "Add the diced onion and sauté until translucent, about 3 minutes.",
      "Add the garlic and ginger, and cook for another minute.",
      "Stir in the curry paste and cook for 30 seconds.",
      "Add the mixed vegetables and stir to combine.",
      "Pour in the coconut milk and bring to a boil.",
      "Reduce heat and simmer for 15-20 minutes, or until vegetables are tender.",
      "Season with salt and pepper to taste.",
      "Serve hot with rice or naan bread.",
    ],
    image: "./images/vegetable-curry.png",
    nutrition: {
      calories: 250,
      protein: 5,
      carbs: 30,
      fat: 12,
      fiber: 4,
      sodium: 300,
    },
    tips: [
      "For a spicier version, use more curry paste or add fresh chili peppers.",
      "Use frozen vegetables if fresh ones are not available.",
      "Serve with a dollop of plain yogurt for a cooling contrast.",
    ],
    badge: ["Quick", "Indian"],
  },
  {
    id: 5,
    name: "Beef Tacos",
    description: "Delicious tacos filled with seasoned beef and fresh toppings",
    rating: 4.7,
    reviews: 220,
    prepTime: 10,
    cookTime: 55,
    servings: 4,
    ingredients: [
      "1 lb ground beef",
      "8 corn tortillas",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1/2 cup shredded cheese",
      "1/4 cup sour cream",
      "1 tbsp taco seasoning",
    ],
    instructions: [
      "In a skillet, cook the ground beef until browned, about 8 minutes.",
      "Add the taco seasoning and water, and simmer for 5 minutes.",
      "Warm the corn tortillas in a dry skillet or microwave.",
      "Fill each tortilla with the seasoned beef.",
      "Top with shredded lettuce, diced tomatoes, and shredded cheese.",
      "Serve with a dollop of sour cream.",
    ],
    image: "./images/beef-tacos.png",
    nutrition: {
      calories: 350,
      protein: 20,
      carbs: 30,
      fat: 18,
      fiber: 2,
      sodium: 600,
    },
    tips: [
      "For a healthier version, use lean ground beef or turkey.",
      "Add avocado slices for extra creaminess.",
      "Serve with a side of black beans for added protein.",
    ],
    badge: ["Quick", "Mexican"],
  },
  {
    id: 6,
    name: "Pancakes",
    description: "Fluffy and delicious pancakes perfect for breakfast",
    rating: 4.8,
    reviews: 250,
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    ingredients: [
      "1 cup all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1 cup milk",
      "2 large eggs",
      "1/4 cup melted butter",
    ],
    instructions: [
      "In a large bowl, whisk together the flour, sugar, baking powder, and salt.",
      "In another bowl, whisk together the milk, eggs, and melted butter.",
      "Pour the wet ingredients into the dry ingredients and stir until just combined.",
      "Heat a lightly oiled griddle or frying pan over medium-high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
      "Cook until bubbles form on the surface and the edges look dry, about 2-3 minutes.",
      "Flip and cook until golden brown on the other side, about 1-2 minutes.",
      "Serve hot with syrup, butter, or your favorite toppings.",
    ],
    image: "./images/pancakes.png",
    nutrition: {
      calories: 200,
      protein: 5,
      carbs: 30,
      fat: 8,
      fiber: 1,
      sodium: 200,
    },
    tips: [
      "For extra fluffiness, let the batter rest for a few minutes before cooking.",
      "Use a silicone spatula to flip the pancakes gently.",
      "Keep pancakes warm in a low oven while you finish cooking the rest.",
    ],
    badge: ["Quick", "American"],
  },
  {
    id: 7,
    name: "Grilled Salmon",
    description:
      "Tender and flavorful grilled salmon with a lemon herb marinade",
    rating: 4.9,
    reviews: 180,
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    ingredients: [
      "4 salmon fillets",
      "2 lemons",
      "2 tbsp olive oil",
      "2 cloves garlic",
      "1 tsp dried oregano",
      "1 tsp dried thyme",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the grill to medium-high heat.",
      "In a small bowl, whisk together the lemon juice, olive oil, garlic, oregano, thyme, salt, and pepper.",
      "Place the salmon fillets on the grill.",
      "Brush the marinade on top of the salmon.",
      "Grill for 4-6 minutes on each side, or until the fish flakes easily with a fork.",
      "Serve immediately with additional lemon wedges.",
    ],
    image: "./images/grilled-salmon.png",
    nutrition: {
      calories: 250,
      protein: 35,
      carbs: 2,
      fat: 12,
      fiber: 0,
      sodium: 150,
    },
    tips: [
      "Make sure the salmon is fully cooked but not overcooked.",
      "Serve with a side of roasted vegetables for a complete meal.",
      "Use a fish spatula to flip the salmon gently to avoid breaking it apart.",
    ],
    badge: ["Healthy", "Seafood"],
  },
  {
    id: 8,
    name: "Chocolate Chip Cookies",
    description: "Classic cookies loaded with chocolate chips",
    rating: 4.6,
    reviews: 200,
    prepTime: 15,
    cookTime: 12,
    servings: 2,
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "1 tsp salt",
      "1 tsp baking soda",
      "2 cups chocolate chips",
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C).",
      "In a large bowl, cream together the butter and sugars until light and fluffy.",
      "Beat in the eggs one at a time, then stir in the vanilla.",
      "In a separate bowl, whisk together the flour, salt, and baking soda.",
      "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
      "Stir in the chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 9-11 minutes, or until golden brown.",
      "Cool on the baking sheet for 2 minutes before transferring to a wire rack.",
    ],
    image: "./images/chocolate-chip-cookies.png",
    nutrition: {
      calories: 150,
      protein: 2,
      carbs: 20,
      fat: 8,
      fiber: 1,
      sodium: 100,
    },
    tips: [
      "For chewier cookies, underbake them slightly.",
      "Store cookies in an airtight container to keep them fresh.",
      "Add nuts or dried fruit for extra texture and flavor.",
    ],
    badge: ["Quick", "Dessert"],
  },
  {
    id: 9,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    rating: 4.8,
    reviews: 150,
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "8 oz mozzarella cheese",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough on a floured surface.",
      "Spread the tomato sauce evenly over the dough.",
      "Tear the mozzarella into small pieces and distribute over the sauce.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake for 10-12 minutes, or until the crust is golden and the cheese is bubbly.",
      "Top with fresh basil leaves before serving.",
    ],
    image: "./images/margherita-pizza.png",
    nutrition: {
      calories: 300,
      protein: 12,
      carbs: 40,
      fat: 10,
      fiber: 2,
      sodium: 300,
    },
    tips: [
      "For a crispier crust, pre-bake the dough for a few minutes before adding toppings.",
      "Use fresh mozzarella for the best flavor and texture.",
      "Let the pizza rest for a minute or two before slicing to allow the toppings to settle.",
    ],
    badge: ["Quick", "Italian"],
  },
  {
    id: 10,
    name: "Avocado Toast",
    description:
      "Mashed avocado on toasted bread with a sprinkle of salt and pepper",
    rating: 4.5,
    reviews: 120,
    prepTime: 5,
    cookTime: 2,
    servings: 2,
    ingredients: [
      "2 slices of bread",
      "1 ripe avocado",
      "1 tsp lemon juice",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Toast the bread until golden brown.",
      "In a small bowl, mash the avocado with lemon juice, salt, and pepper.",
      "Spread the avocado mixture on the toasted bread.",
      "Serve immediately.",
    ],
    image: "./images/avocado-toast.png",
    nutrition: {
      calories: 200,
      protein: 4,
      carbs: 25,
      fat: 10,
      fiber: 5,
      sodium: 100,
    },
    tips: [
      "Use a ripe but firm avocado for the best texture.",
      "Add a drizzle of olive oil for extra richness.",
      "Top with a poached egg for a more substantial meal.",
    ],
    badge: ["Quick", "Healthy"],
  },
  {
    id: 11,
    name: "French Onion Soup",
    description: "Rich and creamy soup made with caramelized onions and beef broth",
    rating: 4.7,
    reviews: 140,
    prepTime: 20,
    cookTime: 50,
    servings: 4,
    ingredients: [
      "1 lb onions, thinly sliced",
      "2 tbsp butter",
      "1 tsp sugar",
      "1 tsp salt",
      "4 cups beef broth",
      "1 cup heavy cream",
      "2 cloves garlic, minced",
      "Fresh thyme sprigs",
      "Croutons for topping",
    ],
    instructions: [
      "In a large pot, melt the butter over medium heat.",
      "Add the sliced onions and cook until caramelized, about 15 minutes.",
      "Stir in the sugar and salt.",
      "Add the beef broth and bring to a boil.",
      "Reduce heat and simmer for 20 minutes.",
      "Stir in the heavy cream and minced garlic.",
      "Season with additional salt and pepper to taste.",
      "Serve hot with croutons on top.",
    ],
    image: "./images/french-onion-soup.png",
    nutrition: {
      calories: 250,
      protein: 8,
      carbs: 20,
      fat: 15,
      fiber: 2,
      sodium: 400,
    },
    tips: [
      "Use a good quality beef broth for the best flavor.",
      "Caramelize the onions slowly for maximum sweetness.",
      "Top with grated Parmesan cheese for an extra layer of flavor.",
    ],
    badge: ["Comfort Food", "Dinner"],
  }
];

var lastIndex = -1;

function changeMeal() {
  var randomIndex;


  do {
    randomIndex = Math.floor(Math.random() * mealList.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;
  var meal = mealList[randomIndex];
  var cartona = `
        <div class="col-12 col-lg-5">
          <div class="header-image position-relative">
            <img src="${meal.image}" alt="${meal.name} photo" />
            <span class="badge rounded-pill text-bg-light"
              ><i class="fa-solid fa-star text-warning"></i>
              <span class="text-black">${meal.rating}</span>
              <span class="fw-lighter text-black-50 fs-6"
                >(${meal.reviews} reviews)</span
              
              ></span
            >
            <div
              class="food-info p-3 rounded-4 d-flex justify-content-around"
            >
              <div
                class="d-flex flex-column justify-content-center align-items-center gap-1"
              >
                <i class="fa-solid fa-clock main-color fs-4"></i>
                <p class="text-balck-50">Prep Time</p>
                <p class="text-black fw-bold">${meal.prepTime} min</p>
              </div>
              <div
                class="d-flex flex-column justify-content-center align-items-center gap-1"
              >
                <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
                <p class="text-balck-50">Cook Time</p>
                <p class="text-black fw-bold">${meal.cookTime} min</p>
              </div>
              <div
                class="d-flex flex-column justify-content-center align-items-center gap-1"
              >
                <i class="fa-solid fa-users text-primary fs-4"></i>
                <p class="text-balck-50">Servings</p>
                <p class="text-black fw-bold">${meal.servings} people</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7 bg-white p-4">
          <div class="header-contnet">
            <div class="header-heading">
              <div class="d-flex align-items-center gap-3 mb-3">
                <span class="badge-one rounded-pill">${meal.badge[0]}</span>
                <span class="badge-two rounded-pill">${meal.badge[1]}</span>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <h3 class="h1 fw-bold">
                  ${meal.name}
                  
                </h3>
                <div class="d-flex align-items-center gap-2">
                  <div class="icon">
                    <i class="fa-solid fa-bookmark main-color"></i>
                  </div>
                  <div class="icon">
                    <i class="fa-solid fa-share-nodes main-color"></i>
                  </div>
                </div>
              </div>
              <p class="text-black-50 meal-text">
                ${meal.description}
              </p>
              <div class=" ${meal.cookTime > 45 ? "d-flex" : "d-none"} warning gap-2 p-4 align-items-center rounded-4 mt-3">
  <i class="fa-solid fa-triangle-exclamation text-danger fa-xl"></i>
  <div class="text">
  <p>Extended Preparation Time</p>
  <p>
    This recipe requires more than 45 minutes to prepare. Plan accordingly!
  </p>
  </div>
  </div>
            </div>
            <div class="tabs">
              <ul
                class="nav nav-pills mt-5 mb-3 justify-content-center gap-4"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-ingredients-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ingredients"
                    type="button"
                    role="tab"
                    aria-controls="pills-ingredients"
                    aria-selected="true"
                  >
                    <i class="fa-solid fa-list-check me-2"></i>
                    Ingredients
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-instructions-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-instructions"
                    type="button"
                    role="tab"
                    aria-controls="pills-instructions"
                    aria-selected="false"
                  >
                    <i class="fa-solid fa-book-open me-2"></i>
                    Instructions
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-nutrition-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-nutrition"
                    type="button"
                    role="tab"
                    aria-controls="pills-nutrition"
                    aria-selected="false"
                  >
                    <i class="fa-solid fa-chart-pie me-2"></i>
                    Nutrition
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-tips-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tips"
                    type="button"
                    role="tab"
                    aria-controls="pills-tips"
                    aria-selected="false"
                  >
                    <i class="fa-solid fa-lightbulb me-2"></i>
                    Chef's Tips
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane one fade show active"
                  id="pills-ingredients"
                  role="tabpanel"
                  aria-labelledby="pills-ingredients-tab"
                  tabindex="0"
                >
                  <ul class="list-unstyled">
                    ${meal.ingredients
                      .map(
                        (ingredient, i) => `
                    <li class="${i < meal.ingredients.length - 1 ? "mb-3" : ""}">
                      <span class="text-white bg-color me-2">${i + 1}</span>
                      <span class="text-black-50">${ingredient}</span>
                    </li>`,
                      )
                      .join("")}
                  </ul>
                </div>
                <div
                  class="tab-pane two fade"
                  id="pills-instructions"
                  role="tabpanel"
                  aria-labelledby="pills-instructions-tab"
                  tabindex="0"
                >
                  <ul class="list-unstyled">
                    ${meal.instructions
                      .map(
                        (instruction, i) => `
                    <li class="${i < meal.instructions.length - 1 ? "mb-3" : ""}">
                      <span class="text-white bg-color me-2">${i + 1}</span>
                      <span class="text-black-50">${instruction}</span>
                    </li>`,
                      )
                      .join("")}
                  </ul>
                </div>
                <div
                  class="tab-pane three fade"
                  id="pills-nutrition"
                  role="tabpanel"
                  aria-labelledby="pills-nutrition-tab"
                  tabindex="0"
                >
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="icon-box bg-orange-light text-orange">
                          <i class="fas fa-fire"></i>
                        </div>
                        <span class="label">Calories</span>
                        <span class="value">${meal.nutrition.calories} kcal</span>
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="icon-box bg-blue-light text-blue">
                          <i class="fas fa-dumbbell"></i>
                        </div>
                        <span class="label">Protein</span>
                        <span class="value">${meal.nutrition.protein} g</span>
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="icon-box bg-yellow-light text-yellow">
                          <i class="fas fa-wheat-awn"></i>
                        </div>
                        <span class="label">Carbohydrates</span>
                        <span class="value">${meal.nutrition.carbs} g</span>
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="icon-box bg-red-light text-red">
                          <i class="fas fa-droplet"></i>
                        </div>
                        <span class="label">Fat</span>
                        <span class="value">${meal.nutrition.fat} g</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="icon-box bg-green-light text-green">
                          <i class="fas fa-seedling"></i>
                        </div>
                        <span class="label">Fiber</span>
                        <span class="value">${meal.nutrition.fiber} g</span>
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="icon-box bg-pink-light text-pink">
                          <i class="fas fa-cube"></i>
                        </div>
                        <span class="label">Sodium</span>
                        <span class="value">${meal.nutrition.sodium} mg</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane four fade"
                  id="pills-tips"
                  role="tabpanel"
                  aria-labelledby="pills-tips-tab"
                  tabindex="0"
                >
                  ${meal.tips
                    .map(
                      (tip, i) => `
                  <div class="d-flex align-items-center p-4 ${i < meal.tips.length - 1 ? "mb-3" : ""} custom-item rounded-4">
                    <div class="icon-box me-3">
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>
                    <p class="fw-medium text-secondary">
                      ${tip}
                    </p>
                  </div>`,
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </div>
          <div class="btn-div mt-5">
            <button onclick="changeMeal()" class="try-btn text-white border-0 rounded-4">
              <i class="fa-solid fa-rotate"></i>
              Try Another Recipe
            </button>
          </div>
        </div>
  `;

  document.getElementById("mealBox").innerHTML = cartona;
}

changeMeal();
