import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.css";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import { HomePage } from "./components/HomePage";
import { ProfileDetail } from "./components/ProfileDetail";

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">To Home</Link>
          </li>
          <li>
            <Link to="/profile">To Profile</Link>
          </li>
          <li>
            <Link to="/profile/andrew" exact>
              To Andrew's Profile
            </Link>
          </li>
          <li>
            <Link to="/feed">To Feed</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/profile/:username" component={ProfileDetail} />
          <Route path="/feed" component={Feed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
