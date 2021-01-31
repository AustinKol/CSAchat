import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
    root:{
       height:'100vh',
    },

}));

function Chatbox() {
    const classes = useStyles();
    return <div className={classes.root}></div>;

}

export default Chatbox;