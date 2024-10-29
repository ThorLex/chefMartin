import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import burgeur from "./../images/image 26.png";
const recipes = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    description: "A delicious cheeseburger with Wagyu beef.",
    image: burgeur,
  },
  {
    title: "Fresh Lime Roasted Salmon",
    description: "Salmon roasted with fresh lime.",
    image: burgeur,
  },
  {
    title: "Strawberry Waffle with Honey Syrup",
    description: "Waffles topped with strawberries and honey syrup.",
    image: burgeur,
  },
  {
    title: "Mayonnaise Mixed Fresh and Healthy Salad",
    description: "A fresh salad mixed with mayonnaise.",
    image: burgeur,
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    description: "Meatballs made from chicken and cream cheese.",
    image: burgeur,
  },
  {
    title: "Fruity Pancake with Maple Syrup",
    description: "Pancakes with fruits and maple syrup.",
    image: burgeur,
  },
  {
    title: "Simple Easy One Pot Chicken",
    description: "A simple one-pot chicken dish.",
    image: burgeur,
  },
  {
    title: "The Creamiest Creamy Chicken and Broccoli Pasta",
    description: "Creamy pasta with chicken and broccoli.",
    image: burgeur,
  },
];

const RecipeCards = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Simple and Tasty Recipes</h1>
      <div className="row">
        {recipes.map((recipe, index) => (
          /**/

          <div className="col-lg-4 col-md-4 col-sm-6 mb-4 ">
            <div className="card recipe-card h-100 special-card">
              <div>
                <div className="card mx-3 mt-0 mb-0 border-0 h-75 ">
                  <div
                    className="  special-card justify-content-center align-content-around  rounded-circle"
                    style={{
                      position: "relative",
                      top: "50px",
                      right: "23px",
                      height: "30px",
                      left: "-2px",
                      width: "30px",
                      opacity: "100%",
                      
                    }}
                  >
                    <i
                      className=" bg-light p-2 m-0  bi bi-heart"
                      style={{ height: "40px", width: "40px" }}
                    ></i>
                    <div className=" special-border rounded-circle p-0"></div>
                  </div>
                  <img
                    src={recipe.image}
                    className="card-img mt-2 mb-2   "
                    alt={recipe.title}
                  />
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{recipe.title}</h5>
                <div className="recipe-meta">
                  <span>🕒 {recipe.time || "10 min"}</span>
                  <span className="ms-2">🍴 {recipe.type || "heathly"}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="alert alert-success text-center mt-4">
        Don't forget to eat healthy food!
      </div>
    </div>
  );
};

export default RecipeCards;
