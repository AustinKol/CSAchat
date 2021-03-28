import React from 'react';

import Home from './components/Home';
import SelfHelp from './components/SelfHelp';
import SignIn from './components/SignIn';

import './styles/DownArrow.css';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import firebase from 'firebase';
import TeacherDashboard from './components/TeacherDashboard';
import AnonChat from './components/AnonChat';
import About from './components/About';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';

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
    console.log("[WW] Firebase has already started.");
  }
  
  return (
    <HashRouter basename="/">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Pairs-Aidants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/selfhelp">Ressources</Nav.Link>
            <Nav.Link as={Link} to="/about">Nous connaître</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/signin">Connection</Nav.Link>
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
        <Route path="/teacherdash">
          <TeacherDashboard />
        </Route>
        <Route path="/anon">
          <AnonChat />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
