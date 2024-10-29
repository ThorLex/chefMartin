import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import image from "./../images/image1.jpg";
// import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import "./post.css";

const InstagramPost = ({ username, location, imageUrl, likes, caption }) => {
  return (
    <Card className="instagram-post h-100">
      <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0">
        <div className="d-flex align-items-center">
          <Image
            src={image}
            roundedCircle
            width={32}
            height={32}
            className="me-2"
          />
          <span className="fw-bold">{username || "blex"}</span>
          <span className="text-primary ms-1"> <i className="bi bi"></i>  </span>
        </div>
        <span>...</span>
      </Card.Header>
      <Card.Img variant="top" src={imageUrl || image} alt="Post image" />
      <Card.Body className="px-3 py-2">
        <div className="d-flex justify-content-between mb-2">
          <div className="m-2 ">
            <i
              className="  bi bi-heart m-2 "
              style={{ color: "red"}}
            />
          
            <i className=" bi bi-send m-2" ></i>
            <i className="bi bi-circle m-2" ></i>
          </div>
          <i className="bi bi-note" />
        </div>
        <p className="mb-1">
          <strong>Liked by craig_love and {likes} others</strong>
        </p>
        <p className="mb-1">
          <strong>{username}</strong> {caption}
        </p>
        <small className="text-muted">{location}</small>
      </Card.Body>
    </Card>
  );
};

const InstagramGrid = () => {
  const posts = [
    {
      username: "Foodiesland.",
      location: "Tokyo, Japan",
      imageUrl: image,
      likes: "44,686",
      caption:
        "What are you doing before start cooking? prepare the tools or ingredients?",
    },

    {
      username: "Foodiesland.",
      location: "Tokyo, Japan",
      imageUrl: image,
      likes: "44,686",
      caption:
        "What are you doing before start cooking? prepare the tools or ingredients?",
    },

    {
      username: "Foodiesland.",
      location: "Tokyo, Japan",
      imageUrl: image,
      likes: "44,686",
      caption:
        "What are you doing before start cooking? prepare the tools or ingredients?",
    },

    {
      username: "Foodiesland.",
      location: "Tokyo, Japan",
      imageUrl: image,
      likes: "44,686",
      caption:
        "What are you doing before start cooking? prepare the tools or ingredients?",
    },

    
    
  ];

  return (
    <Container fluid className="mt-4">
      <Row xs={1} md={2} lg={4} className="g-4">
        {posts.map((post, index) => (
          <Col key={index}>
            <InstagramPost {...post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InstagramGrid;
