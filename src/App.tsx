import React from 'react';

import Home from './components/Home';
import SelfHelp from './components/SelfHelp';
import SignIn from './components/SignIn';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Pairs-Aidants</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Acceuil</Nav.Link>
          <Nav.Link href="/signin">Se connecter</Nav.Link>
          <Nav.Link href="/selfhelp">Resources</Nav.Link>
        </Nav>
      </Navbar>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/selfhelp">
          <SelfHelp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
