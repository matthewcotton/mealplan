import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card className="dashboard-card">
                <Card.Img
                  variant="top"
                  className="dashboard-card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                />
                <Card.Body className="dashboard-card-body">
                  <Card.Link className="dashboard-card-link">
                    <Link className="link" to="/user/create-recipe">
                      Add Recipe
                    </Link>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-card">
                <Card.Img
                  variant="top"
                  className="dashboard-card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                />
                <Card.Body className="dashboard-card-body">
                  <Card.Link className="dashboard-card-link">
                    <Link className="link" to="user/recipes">
                      View Recipes
                    </Link>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="dashboard-card">
                <Card.Img
                  variant="top"
                  className="dashboard-card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                />
                <Card.Body className="dashboard-card-body">
                  <Card.Link className="dashboard-card-link">
                    <Link className="link" to="/user/create-meal-plan">
                      Create Meal Plan
                    </Link>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-card">
                <Card.Img
                  variant="top"
                  className="dashboard-card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                />
                <Card.Body className="dashboard-card-body">
                  <Card.Link className="dashboard-card-link">
                    <Link className="link" to="user/meal-plans">
                      View Meal Plans
                    </Link>
                  </Card.Link>
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
