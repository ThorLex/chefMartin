import React from "react";
import "./categorie.css";
import breakfastImage from "./../images/real/Group 836.png";
import veganImage from "./../images/real/Group 837.png";
import meatImage from "./../images/real/Group 838.png";
import dessertImage from "./../images/real/Group 839.png";
import lunchImage from "./../images/real/Group 840.png";
import chocolateImage from "./../images/real/Group 841.png";

// Tableau avec les données de chaque catégorie, y compris l'image
const categories = [
  { name: "Breakfast", className: "breakfast", image: breakfastImage },
  { name: "Vegan", className: "vegan", image: veganImage },
  { name: "Meat", className: "meat", image: meatImage },
  { name: "Dessert", className: "dessert", image: dessertImage },
  { name: "Lunch", className: "lunch", image: lunchImage },
  { name: "Chocolate", className: "chocolate", image: chocolateImage },
];

export default function Categorie() {
  return (
    <div>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center my-5">
          <h3>Categories</h3>
          <a href="#" className="btn categorie-btn">
            View All Categories
          </a>
        </div>
        <div className="row text-center mt-4">
          {categories.map((category, index) => (
            <div className="col-6 col-md-2" key={index}>
              <div className={`category-item ${category.className}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="img-fluid"
                />
                <p>{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
