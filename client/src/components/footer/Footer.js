import React from 'react';
import {Navbar} from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <Navbar fixed="bottom justify-content-center myfooter" >
      <p className="small text-center text-muted m-md-0 p-2">
        Made for University of Arizona Coding Bootcamp, Week-19, January 2020
      </p>
    </Navbar>
  );
}

export default Footer;