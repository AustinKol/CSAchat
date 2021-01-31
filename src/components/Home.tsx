import React from 'react';
import '../App.css';
import {makeStyles} from '@material-ui/core/styles';
import Header from './HomeComponents/Header';
import Chatbox from './HomeComponents/Chatbox';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.png'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
}));
function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Chatbox />

        </div>
    );
}

export default Home;