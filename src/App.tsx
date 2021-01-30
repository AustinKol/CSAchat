import { AppBar, Tabs, Tab } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import React from 'react';
import './App.css';

function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <div hidden={value !== 0} >
          <p>Hello! This is page 1.</p>
      </div>
      <div hidden={value !== 1} >
          <p>Hello! This is page 2.</p>
      </div>
    </div>
  );
}

export default App;
