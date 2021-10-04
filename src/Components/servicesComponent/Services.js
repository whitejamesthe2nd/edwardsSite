import React from 'react';
import Card from '../cardComponent/card';
import { makeStyles } from "@material-ui/core/styles";





let Services = ()=>{
    let useStyles = makeStyles({
        cardHolder:{
            border:'solid black 5px'

        }
    })
    let classes = useStyles();


    return(
        <div className={classes.cardHolder}>
            <h2>Services</h2>
            <Card />
            <p>Tech Handy Man</p>
            <p>Mobile Mechanic</p>
            <p>Fleet Servicing</p>
            <p>Roadside Assitance</p>
            <p>Stage One Repairs</p>
        </div>
    )
}

export default Services;
