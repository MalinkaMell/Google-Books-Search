import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Result from "../result/Result";

const ResultsList = (props) => {
  return (
    <React.Fragment>
      <Container className="p-4 mb-5">
        <Card>
          <Card.Header>Results</Card.Header>
          <Card.Body>
            <Result results={props.results} />
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment> 
  );
}

export default ResultsList;