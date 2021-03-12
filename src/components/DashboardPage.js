import React from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
      <Card className="cards">
  <Card.Body>
    <Button className="button" href="#" variant="primary">Add Recipe</Button>
  </Card.Body>
</Card>
</Col>
<Card className="cards">
  <Card.Body>
    <Button className="button"  href="#" variant="primary">View Recipes</Button>
  </Card.Body>
</Card>
<Col>
</Col>
</Row>
<Row>
            <Col>
      <Card className="cards">
  <Card.Body>
    <Button className="button"  href="#" variant="primary">Create Meal Plan</Button>
  </Card.Body>
</Card>
</Col>
<Card className="cards">
  <Card.Body>
    <Button className="button" href="#" variant="primary">View Meal Plans</Button>
  </Card.Body>
</Card>
<Col>
</Col>
</Row>
</Container>
      </div>
    )
  }
}

export default Dashboard

