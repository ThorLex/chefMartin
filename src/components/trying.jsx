import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tring.css"; // Ensure this points to your CSS file

import "./style.css";
const InstagramSection = () => (
  <div className="instagram-section">
    <h1 className="section-title">Check out @foodieland on Instagram</h1>
    <p className="section-subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className="instagram-posts">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="instagram-post">
          <div className="post-header">
            <img
              src={`/api/placeholder/35?text=User`}
              alt="User Avatar"
              className="user-avatar"
            />
            <span className="username">foodieland</span>
          </div>
          <img
            src={`/api/placeholder/280/280?text=Post ${item}`}
            alt={`Instagram post ${item}`}
            className="post-image"
          />
          <div className="post-footer">
            <span className="likes">
              Likes: {Math.floor(Math.random() * 1000)}
            </span>
            <p className="caption">Caption for post {item}</p>
          </div>
        </div>
      ))}
    </div>
    <Button variant="dark" className="instagram-button">
      Visit Our Instagram
    </Button>
  </div>
);

const RecipeCard = ({ title, time, category, image }) => (
  <Card className="recipe-card">
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        <small className="text-muted">
          {time} • {category}
        </small>
      </Card.Text>
    </Card.Body>
  </Card>
);

const RecipeSection = () => {
  const recipes = [
    {
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      time: "30 Minutes",
      category: "Snack",
      image: "/api/placeholder/280/200?text=Fruit+Salad",
    },
    {
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Snack",
      image: "/api/placeholder/280/200?text=Cheeseburger",
    },
    {
      title: "Healthy Japanese Fried Rice with Asparagus",
      time: "30 Minutes",
      category: "Healthy",
      image: "/api/placeholder/280/200?text=Fried+Rice",
    },
    {
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      time: "30 Minutes",
      category: "Healthy",
      image: "/api/placeholder/280/200?text=Vegetarian+Taco",
    },
  ];

  return (
    <div className="recipe-section">
      <Row className="mb-5">
        <Col md={6} className="section-title-left">
          <h2>Try this delicious recipe to make your day</h2>
        </Col>
        <Col md={6} className="section-subtitle-right text-end">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        {recipes.map((recipe, index) => (
          <Col key={index} md={3} className="mb-4">
            <RecipeCard {...recipe} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const NewsletterSection = () => (
  <div className="newsletter-section">
    <h2 className="section-title">Deliciousness to your inbox</h2>
    <div className="section-subtitle truncate   ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.ut labore et dolore
      magna aliqua.
    </div>
    <div className="takeamll">
      <Form className="">
        <div className="form-images">
          <div className="input-group gap-3">
            <input
              type="email"
              placeholder="Your email address..."
              className="form-control border-0"
            />
            <Button
              variant="dark"
              type="submit"
              className=" px-4 py-2  rounded subscribe-button"
            >
              <small>Subscribe</small>
            </Button>
          </div>
        </div>
      </Form>
    </div>
  </div>
);

const Footer = () => (
  <footer className="text-center card my-4">
    <h3 className="mb-3">Foodieland</h3>
    <p className="text-muted mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <ul className="nav justify-content-center mb-3">
      {["Recipes", "Blog", "Contact", "About us"].map((item) => (
        <li key={item} className="nav-item">
          <a href="#" className="nav-link text-muted">
            {item}
          </a>
        </li>
      ))}
    </ul>
    <p className="text-muted">© 2020 Flowbase. Powered by Webflow</p>
  </footer>
);

const App = () => (
  <Container className="  footer mt-5">
    <InstagramSection />
    <RecipeSection />
    <NewsletterSection />
    <Footer />
  </Container>
);

export default App;
