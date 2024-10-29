import React from "react";
import "./chefSection.css"; // Add your styles here
import image1 from "./../images/image1.jpg";

const ChefSection = () => {
  return (
    <div className="row  my-5 rowd">
      <div className="chef-section text-center col-12 col-md-7 py-5 ">
        <h2>Everyone can be a chef in their own kitchen</h2>
        <p className="description">
          Learn how to create delicious meals with easy, step-by-step recipes,
          using ingredients that are readily available. Whether you're a
          beginner or a pro, our recipes will guide you to culinary success!
        </p>
        <button className="btn " variant="dark">
          Learn More
        </button>
      </div>
      <div className="col-12 col-md-4  rounded-circle">
        <img src={image1} alt="" className="img-fluid " />
      </div>
   
    </div>
  );
};

export default ChefSection;
