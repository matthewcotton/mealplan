import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="mb-4">
              <Card className="card">
                <Card.Img variant="top" className="card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
                <Card.Body className="card-body">
                  <Link className="card-link" to="/user/create-recipe">
                    <button className="button-main">
                      Create Recipe
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={6} className="mb-4">
              <Card className="card">
                <Card.Img variant="top" className="card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
                <Card.Body className="card-body">
                  <Link className="card-link" to="/user/recipes">
                    <button className="button-main">
                      View Recipes
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} className="mb-5">
              <Card className="card">
                <Card.Img variant="top" className="card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
                <Card.Body className="card-body">
                  <Link className="card-link" to="/user/create-meal-plan">
                    <button className="button-main">
                      Create Meal Plan
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card className="card">
                <Card.Img variant="top" className="card-img"
                  src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
                <Card.Body className="card-body">
                  <Link className="card-link" to="/user/view-meal-plans">
                    <button className="button-main">
                      View Meal Plans
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Dashboard
