import React from 'react';
import { Container, Card } from 'react-bootstrap';


const SavedContainer = (props) => {
  return (
    <React.Fragment>
      <Container className="p-4 mb-5">
        <Card>
          <Card.Header>Saved books</Card.Header>
          <Card.Body>
            {props.children}
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default SavedContainer;