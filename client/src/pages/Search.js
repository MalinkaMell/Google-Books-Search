import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from "../components/form/Form";
import ResultsList from '../components/resultslist/ResultsList';
import axios from 'axios';
import './pages.css';

const Search = () => {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  const [results, setResults] = useState({ items: [] });
  const [search, setSearch] = useState("Harry Potter");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get(baseUrl + search)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios
      .get(baseUrl + search)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <React.Fragment>
      <Container fluid className="text-center bg-info p-5 main-search-container">
        <h1>(React) Google Books Search</h1>
        <h4>Search for and Save Books of interest</h4>
        <SearchForm
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          search={search}
        />
      </Container>
      <ResultsList results={results} />
    </React.Fragment>
  );
}

export default Search;