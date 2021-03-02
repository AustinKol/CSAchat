import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from './HomeComponents/Header';
<<<<<<< HEAD
import ClickFunnel from './HomeComponents/ClickFunnel';
=======
import Chatbox from './HomeComponents/Chatbox';
import { CssBaseline } from '@material-ui/core';
>>>>>>> 01f221484a3c7b894e0be79f90c4af8e8799e6d6

function Home() {
    return (
<<<<<<< HEAD
        <div>
            <ClickFunnel />
=======
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Chatbox />

>>>>>>> 01f221484a3c7b894e0be79f90c4af8e8799e6d6
        </div>
    );
}

export default Home;