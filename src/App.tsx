import React from 'react';

import Home from './components/Home';
import SelfHelp from './components/SelfHelp';
import SignIn from './components/SignIn';
import './styles/DownArrow.css';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from 'firebase';

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDpFJ1vMnojgESGXD-yjlQyIXU8GuJNQLA",
        authDomain: "csachat-9dff3.firebaseapp.com",
        databaseURL: "https://csachat-9dff3-default-rtdb.firebaseio.com",
        projectId: "csachat-9dff3",
        storageBucket: "csachat-9dff3.appspot.com",
        messagingSenderId: "384915371882",
        appId: "1:384915371882:web:2a14a7141b635d69381713"
    });
  } else {
    console.log("firebase is init");
  }

  console.log("here");
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Pairs-Aidants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/signin">Connection</Nav.Link>
            <Nav.Link href="/selfhelp">Ressources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
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
