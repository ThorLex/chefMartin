import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Badge, Button } from "react-bootstrap";
import image1 from "../images/image1.jpg";
import image2 from "../images/image3.jpg";

const RecipeCard = () => {
  return (
    <Card
      className="border-0 overflow-hidden"
      style={{ maxWidth: "1300px", margin: "auto", backgroundColor: "#e6f7ff" }}
    >
      <div className="row g-0">
        <div className="col-md-6 p-4">
          <div className="d-flex align-items-center mb-2">
            <span className="bg-light rounded-pill px-3 py-1 me-2">
              <span role="img" aria-label="Hot recipe">
                📜
              </span>{" "}
              Hot Recipes
            </span>
          </div>
          <h1 className="display-4 fw-bold mb-3">
            Spicy delicious chicken wings
          </h1>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className="d-flex mb-4">
            <Badge bg="light" text="dark" className="me-2 p-2">
              <span role="img" aria-label="Time">
                ⏱
              </span>{" "}
              30 Minutes
            </Badge>
            <Badge bg="light" text="dark" className="p-2">
              <span role="img" aria-label="Chicken">
                🍗
              </span>{" "}
              Chicken
            </Badge>
          </div>
          <div className="d-flex align-items-center mb-4">
            <img
              src={image2}
              width={100}
              height={100}
              className="rounded-circle me-2"
              alt="John Smith"
            />
            <div>
              <strong>John Smith</strong>
              <br />
              <small className="text-muted">15 March 2022</small>
            </div>
          </div>
          <Button variant="dark" className="px-4 py-2">
            View Recipes <span className="ms-2">▶</span>
          </Button>
        </div>
        <div className="col-md-6 position-relative">
          <img
            src={image1}
            className="img-fluid"
            alt="Spicy chicken wings"
            style={{ objectFit: "cover", height: "100%" }}
          />
          <div style={{ position: "absolute", top: "20px", right: "20px" }}>
            <div className=" special-border rounded-circle p-0">
              <img
                style={{
                  width: "59px",
                  height: "59px",
                  border: "2px solid #5ab27e",
                  borderColor: " color: #5ab27e;",
                }}
                src={image2}
                alt="Thumbs up"
                className=" rounded-circle p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecipeCard;
