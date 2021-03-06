import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container className="mb-5">
          <Row>
            <Col className="text-center">
              <Card className="dashboard-card">
                <Card.Img
                  variant="top"
                  className="dashboard-card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                />
                <Card.Body className="dashboard-card-body">
                  <Link className="dashboard-card-link" to="/user/create-recipe">
                    Add Recipe
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="text-center">
              <Card className="dashboard-card">
                <Card.Img
                  variant="top"
                  className="dashboard-card-img"
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <Card.Body className="dashboard-card-body">
                  <Link className="dashboard-card-link" to="user/recipes">
                    View Recipes
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Card className="dashboard-card">
                <Card.Img
                  variant="top"
                  className="dashboard-card-img"
                  src="https://images.unsplash.com/photo-1588453251771-cd919b362ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                />
                <Card.Body className="dashboard-card-body">
                  <Link className="dashboard-card-link" to="/user/create-meal-plan">
                    Create Meal Plan
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="text-center">
              <Card className="dashboard-card">
                <Card.Img
                  variant="top"
                  className="dashboard-card-img"
                  src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1021&q=80"
                />
                <Card.Body className="dashboard-card-body">
                  <Link className="dashboard-card-link" to="user/meal-plans">
                    View Meal Plans
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
