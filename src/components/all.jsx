import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./../images/image1.jpg";
import "./style.css";

const Header = () => (
  <header className="d-flex justify-content-between align-items-center p-3">
    <div>Foodieland</div>
    <nav>{/* Add navigation items */}</nav>
    <div>{/* Add social icons */}</div>
  </header>
);

const HeroSection = () => (
  <Card className="border-0 bg-light">
    <Row>
      <Col md={6} className="p-4">
        <span className="badge bg-white text-dark">🔥 Hot Recipe</span>
        <h1 className="mt-3">Spicy delicious chicken wings</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="d-flex">
          <span className="me-3">🕒 30 Minutes</span>
          <span>🍴 Chicken</span>
        </div>
        <div className="mt-3 d-flex align-items-center">
          <Image src="/api/placeholder/40/40" roundedCircle className="me-2" />
          <span>John Smith</span>
        </div>
        <Button variant="dark" className="mt-3">
          View Recipes
        </Button>
      </Col>
      <Col md={6}>
        <Image src="/api/placeholder/600/400" fluid />
      </Col>
    </Row>
  </Card>
);

const Categories = () => (
  <section>
    <h2>Categories</h2>
    <Row>{/* Add category items */}</Row>
  </section>
);

const RecipeCard = ({ title, image, time, type }) => (
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <div>
        <span>🕒 {time}</span>
        <span className="ms-2">🍴 {type}</span>
      </div>
    </Card.Body>
  </Card>
);

const RecipeSection = ({ title, recipes }) => (
  <section>
    <h2>{title}</h2>
    <Row>
      {recipes.map((recipe, index) => (
        <Col key={index} md={4}>
          <RecipeCard {...recipe} />
        </Col>
      ))}
    </Row>
  </section>
);

const ChefSection = () => (
  <Card className="border-0 bg-light">
    <Row>
      <Col md={6}>
        <h2>Everyone can be a chef in their own kitchen</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button variant="dark">Learn More</Button>
      </Col>
      <Col md={6}>
        <Image src={image1} fluid />
      </Col>
    </Row>
  </Card>
);

const InstagramSection = () => (
  <section>
    <h2>Check out @foodieland on Instagram</h2>
    <Row>
      {" "}
      <Card className="border-0 bg-light">
        <h2>Deliciousness to your inbox</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* Add newsletter signup form */}
      </Card>
      <Card className="border-0 bg-light">
        <h2>Deliciousness to your inbox</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* Add newsletter signup form */}
      </Card>
    </Row>
    <Button variant="outline-dark">View our Instagram</Button>
  </section>
);

const DeliciousnessSection = () => (
  <Card className="border-0 bg-light">
    <h2>Deliciousness to your inbox</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    {/* Add newsletter signup form */}
  </Card>
);

const Footer = () => {
  <footer className="footer">
    <p>© 2024 Daouda Mbouobouo. Tous droits réservés.</p>
  </footer>;
};

const RecipeLandingPage = () => {
  const simpleRecipes = [
    {
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      image: "/api/placeholder/300/200",
      time: "30 Minutes",
      type: "Snack",
    },
    // Add more recipes...
  ];

  const deliciousRecipes = [
    {
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: "/api/placeholder/300/200",
      time: "30 Minutes",
      type: "Healthy",
    },
    // Add more recipes...
  ];

  return (
    <Container fluid className="px-0">
      <Header />
      <HeroSection />
      <Categories />
      <RecipeSection title="Simple and tasty recipes" recipes={simpleRecipes} />
      <ChefSection />
      <InstagramSection />
      <RecipeSection
        title="Try this delicious recipe to make your day"
        recipes={deliciousRecipes}
      />
      <DeliciousnessSection />
      <Footer />
    </Container>
  );
};

export {
  RecipeLandingPage,
  Footer,
  Header,
  HeroSection,
  Categories,
  RecipeSection,
  ChefSection,
  InstagramSection,
  DeliciousnessSection,
};
