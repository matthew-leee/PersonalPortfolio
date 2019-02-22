import React, { Component } from 'react';

// components
import SideNav from "./components/SideNav"
import Fold from "./components/Fold"
import About from "./components/About"
import Footer from "./components/Footer"
import Scroll from "./components/Scroll"
import Works from "./components/Works"
// css
import "./css/app.css"
import "./mobile/app.css"

class App extends Component {
  render() {
    return (
      <div className="App center">
        <Scroll />
        <div className="notNav">
          <div className="header">
            <div className="frame"></div>
            <Fold />
            <About />
            <Works />
          </div>
          <div className="mainContainer">
          </div>

          <Footer />
        </div>
        <SideNav />
      </div>
    );
  }
}

export default App;
