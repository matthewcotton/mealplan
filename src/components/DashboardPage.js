import React from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container className="container">
          <Row>
            <Col>
      <Card className="cards">
  <Card.Body>
    <Button className="button" variant="primary">Add Recipe</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="cards">
  <Card.Body>
    <Button className="button" variant="primary">View Recipes</Button>
  </Card.Body>
</Card>
</Col>
</Row>
<Row>
            <Col>
      <Card className="cards">
  <Card.Body>
    <Button className="button" variant="primary">Create Meal Plan</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="cards">
  <Card.Body>
    <Button className="button" variant="primary">View Meal Plans</Button>
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
