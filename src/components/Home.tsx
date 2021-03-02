import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from './HomeComponents/Header';
import ClickFunnel from './HomeComponents/ClickFunnel';

function Home() {
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Chatbox />

        </div>
    );
}

export default Home;