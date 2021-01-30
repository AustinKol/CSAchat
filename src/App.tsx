import { AppBar, Tabs, Tab } from '@material-ui/core';
import React from 'react';
import './App.css';
import Home from './components/Home';
import SelfHelp from './components/SelfHelp';
import SignIn from './components/SignIn';

function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Sign In" />
          <Tab label="Self Help" />
        </Tabs>
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
