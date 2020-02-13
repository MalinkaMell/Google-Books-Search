import React from 'react';
import { Card, ButtonGroup, Image, Button } from 'react-bootstrap';
import API from "../../utils/API";
import SaveBtn from '../save/Save';
import ViewBtn from '../view/View';

class Result extends React.Component {

  state = {
    buttonClicked: false
  }

   handleFormSubmit = (event, item) => {

    event.preventDefault();
    console.log(item);
    this.setState({buttonClicked: true})
    API
      .saveBook(item)
      .then((res) => {
        this.setState({buttonClicked: false});
        window.location.href = "/saved";
      })
      .catch(err => console.log(err));

  }

render()
 {
   return (
    this.props.results.items.length > 0 ?

    this.props.results.items.map(result => (
      <Card bg="light" key={result.id} className="my-3">
        <Card.Header as="h5" className="d-flex justify-content-between align-items-center bg-light">
          <Card.Title className="font-weight-bold">
            {result.volumeInfo.title}
            <br></br>
            <small>{[...result.volumeInfo.authors].join(", ")}</small>
          </Card.Title>
          <ButtonGroup>
            <ViewBtn result={result} />
            <SaveBtn handleFormSubmit={this.handleFormSubmit} result={result}/>
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
          <Image src={result.volumeInfo.imageLinks.thumbnail} className="float-left img-thumbnail mr-2" />
          <Card.Text>
            {result.volumeInfo.description}
          </Card.Text>
        </Card.Body>
      </Card>
    ))
    :
    <h1>No books yet</h1>
  ) 
 }
  
}

export default Result;
/* volumeInfo:
title: "Katie Loves the Kittens"
authors: ["John Himmelman"]
publisher: "Henry Holt and Company (BYR)"
publishedDate: "2016-08-23"
description: "The acclaimed author and illustrator of Chickens to the Rescue has created a sweet, funny, and entirely irresistible new character—a little dog just bursting with good intentions. Katie is so excited when Sara Ann brings home three little kittens that she can't stop herself from howling "AROOOOO!" and trying to run after them. She loves them so much! But Katie's enthusiasm frightens the kitties, and she's sad when they run away from her. Don't they know that she just wants to play? Katie Loves the Kittens is a 2009 Bank Street - Best Children's Book of the Year."
industryIdentifiers: (2) [{…}, {…}]
readingModes: {text: true, image: false}
pageCount: 32
printType: "BOOK"
categories: ["Juvenile Fiction"]
averageRating: 3.5
ratingsCount: 5
maturityRating: "NOT_MATURE"
allowAnonLogging: false
contentVersion: "1.4.2.0.preview.2"
panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=KvGdDAAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=KvGdDAAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
language: "en"
previewLink: "http://books.google.com/books?id=KvGdDAAAQBAJ&printsec=frontcover&dq=kittens&hl=&cd=1&source=gbs_api"
infoLink: "https://play.google.com/store/books/details?id=KvGdDAAAQBAJ&source=gbs_api"
canonicalVolumeLink: "https://play.google.com/store/books/details?id=KvGdDAAAQBAJ" */