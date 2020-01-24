import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import socketIOClient from "socket.io-client";


class App extends Component {
/*   constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:3001",
      count: 0
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  } */
  
  render() {
    //const { response } = this.state;

    return (
      <React.Fragment>
        <Router>
          <NavBar />
          {/* <div style={{ textAlign: "center", background:"green", width: "100%", height: "200px" }}>
            
          {
          response
          
              ? <p>
                The temperature in Florence is: {response} °F {this.state.count+1}
              </p>
              : <p>Loading...</p>}
        </div> */}
          <Switch>
            <Route exact path="/" component={Search}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/api/books" component={Saved}></Route>
            <Route path="/saved" component={Saved}></Route>

          </Switch>
          <Footer />
        </Router>
        
      </React.Fragment>
    );
  }
}

export default App;
