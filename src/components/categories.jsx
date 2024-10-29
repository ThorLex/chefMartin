import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Categories.css";

const Categories = () => {
  const categories = [
    { name: "Breakfast", icon: "🍣", className: "breakfast-icon" },
    { name: "Vegan", icon: "🌿", className: "vegan-icon" },
    { name: "Meat", icon: "🥩", className: "meat-icon" },
    { name: "Dessert", icon: "🍰", className: "dessert-icon" },
    { name: "Lunch", icon: "🥪", className: "lunch-icon" },
    { name: "Chocolate", icon: "🍫", className: "chocolate-icon" },
  ];

  return (
    <Container className="categories-section">
      <Row className="align-items-center mb-4">
        <Col>
          <h2>Categories</h2>
        </Col>
        <Col className="text-end">
          <Button variant="primary">View All Categories</Button>
        </Col>
      </Row>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} xs={6} md={4} className="text-center mb-4">
            <div className={`category-icon ${category.className}`}>
              {category.icon}
            </div>
            <div className="category-name">{category.name}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
