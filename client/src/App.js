import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


<<<<<<< HEAD
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
=======
const App = () => {

  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/saved" component={Saved}></Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );

>>>>>>> abe7e73a2cdf0c14cd2ee6be5403dc0a652c5a3d
}

export default App;
