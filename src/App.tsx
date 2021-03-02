import { AppBar, Tabs, Tab } from '@material-ui/core';
import React from 'react';

import Home from './components/Home';
import SelfHelp from './components/SelfHelp';
import SignIn from './components/SignIn';

import './styles/Header.css';
import './styles/CenterText.css';
import './styles/ClickFunnel.css';
import './styles/index.css';
import Header from './components/HomeComponents/Header';
import { Grid } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';

function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{justifyContent: "space-between", minHeight: "0px"}}>
          <Header />
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Home" />
              <Tab label="Sign In" />
              <Tab label="Self Help" />
            </Tabs>
        </Toolbar>
      </AppBar>
      <div hidden={value !== 0} >
          <Home />
      </div>
      <div hidden={value !== 1} >
          <SignIn />
      </div>
      <div hidden={value !== 2} >
          <SelfHelp />
      </div>
    </div>
  );
}

export default App;
