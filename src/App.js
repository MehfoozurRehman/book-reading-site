import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/book" component={BookScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
