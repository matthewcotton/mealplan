import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
      <Card className="card">
        <Card.Img variant="top" className="card-img"
        src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body className="card-body">
          <Card.Link className="card-link">
          <Link className="link" to="users">Add Recipe</Link>  
          </Card.Link>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card">
        <Card.Img variant="top" className="card-img"
        src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body className="card-body">
          <Card.Link className="card-link">
          <Link className="link" to="users">Add Recipe</Link>  
          </Card.Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row>
        <Col>
      <Card className="card">
        <Card.Img variant="top" className="card-img"
        src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body className="card-body">
          <Card.Link className="card-link">
          <Link className="link" to="users">Add Recipe</Link>  
          </Card.Link>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card">
        <Card.Img variant="top" className="card-img"
        src="https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body className="card-body">
          <Card.Link className="card-link">
          <Link className="link" to="users">Add Recipe</Link>  
          </Card.Link>
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
