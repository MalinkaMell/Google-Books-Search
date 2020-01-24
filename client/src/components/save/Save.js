import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const SaveBtn = (props) => {

  if (!props.buttonClicked) {
    return (
      <Button variant="danger"
        onClick={(event) => props.handleFormSubmit(event, {
          title: props.result.volumeInfo.title,
          authors: [...props.result.volumeInfo.authors].join(", "),
          description: props.result.volumeInfo.description,
          image: props.result.volumeInfo.imageLinks.thumbnail,
          link: props.result.volumeInfo.previewLink
        })} 
      >Save</Button>
    );
  } else {
    return (
    <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
    )
  }

  
}

export default SaveBtn;
