import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function CenterText() {
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])
    return (
        <div className={classes.root}>
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

export default CenterText;