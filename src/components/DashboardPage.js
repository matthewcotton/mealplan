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
      <Card className="cards">
  <Card.Body>
  <button className="button">
    <Link className="link"  to="users">Add Recipe</Link>              
</button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="cards">
  <Card.Body>
  <button className="button">
    <Link className="link" to="users">View Recipes</Link>              
</button>
  </Card.Body>
</Card>
</Col>
</Row>
<Row>
            <Col>
      <Card className="cards">
  <Card.Body>
  <button className="button">
    <Link className="link" to="users">Create Meal Plan</Link>              
</button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="cards">
  <Card.Body>
  <button className="button" variant="primary">
    <Link className="link" to="users">View Meal Plans</Link>              
</button>
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
