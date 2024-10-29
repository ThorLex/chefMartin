import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from "./components/navbar";
import RecipeCard from "./components/card";
import Navbar from "./components/nav";
import RecipeCards from "./components/recipes";
import ChefSection from "./components/chefsect";
import {
  RecipeLandingPage,
  Footer,
  Header,
  HeroSection,
  RecipeSection,
  InstagramSection,
  DeliciousnessSection,
} from "./components/all";
import Categories from "./components/categories";
import Categorie from "./components/categorie";
import RecipeGrid from "./components/back";
import Trimm from "./components/trying";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4 ">
        <RecipeCard />

        <Categorie />
        <RecipeCards />
      </div>

      <ChefSection />
      <div className="container">
        <Categories />
        <RecipeGrid />
        <Footer />
        <Trimm></Trimm>

      </div>

      {/* <Footer />
      <RecipeLandingPage /> */}
    </div>
  );
}

export default App;
