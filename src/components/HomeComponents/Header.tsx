import React, { useEffect, useState } from 'react';
//import '../App.css';
import {makeStyles} from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        fontFamily: 'Nunito',
    },
    appbar:{
        background:'none',


    },
    appbarWrapper:{
        width: '80%',
        margin: '0 auto',
    },
    colorText:{
        color:'#FF69B4',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color:"#FF69B4",
        fontSize: "4rem",

    },
}));

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1>
                        CSA <span className={classes.colorText}>Chat</span>
                    </h1>

                </Toolbar>
            </AppBar>

            <Collapse 
            in={checked} 
            {...(checked ? { timeout: 1000 } : {})} 
            collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Bienvenue chez <br/>
                        les<span className={classes.colorText}> pairs aidants.</span>
                    </h1>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;