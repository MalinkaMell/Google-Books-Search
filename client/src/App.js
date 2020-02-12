import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


class App extends Component {
  
  render() {

    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><Search /></Route>
            <Route path="/search"><Search /></Route>
            <Route path="/saved"><Saved /></Route>

          </Switch>
          <Footer />
        </Router>
        
      </div>
    );
  }
}

export default App;
