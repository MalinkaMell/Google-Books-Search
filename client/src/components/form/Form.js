import React from 'react';
import { Button, Container, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { } from 'react-bootstrap';
import './Form.css';

const SearchForm = (props) => {
  return (
    <Container className="p-1">
      <Row >
        <Col md={{ span: 8, offset: 2 }} >
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Book name"
              aria-label="Book name"
              value={props.search}
              name="search"
              id="search"
              onChange={props.handleInputChange}
            />
            <InputGroup.Append>
              <Button
                variant="danger"
                onClick={props.handleFormSubmit}
              >Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;