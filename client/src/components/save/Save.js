import React from 'react';
import { Button } from 'react-bootstrap';

const SaveBtn = (props) => {
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
}

export default SaveBtn;
