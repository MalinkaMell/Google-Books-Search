import React, { useState, useEffect } from 'react';
import { Card, ButtonGroup, Image, Button } from 'react-bootstrap';
import API from "../utils/API";
import SavedContainer from '../components/savedcontainer/SavedContainer'


const Saved = () => {
  const [saved, setSaved] = useState({ books: [] });

  useEffect(() => {
    API.getBooks()
      .then(res => setSaved({ books: res.data }))
      .catch(err => console.log(err));
  }, []);

  const deleteBook = id => {
    API.deleteBook(id).then(res => window.location.reload()).catch(err => console.log(err))
  }

  return (
    <SavedContainer>
     {
    saved.books.length > 0 ?
     saved.books.reverse().map(result => (
      <Card bg="light" key={result._id} className="my-3">
        <Card.Header as="h5" className="d-flex justify-content-between align-items-center bg-light">
          <Card.Title className="font-weight-bold">
            {result.title}
            <br></br>
            <small>{[...result.authors].join(", ")}</small>
          </Card.Title>
          <ButtonGroup>
            <a className="btn btn-secondary"
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
            >View</a>
            <Button variant="danger"
              onClick={() => deleteBook(result._id)}
            >Remove</Button>
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
          <Image src={result.image} className="float-left img-thumbnail mr-2" />
          <Card.Text>
            {result.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )) 
    :
    <h5>You didn't save any books yet</h5>
    }
    </SavedContainer>
    
  );
}

export default Saved;