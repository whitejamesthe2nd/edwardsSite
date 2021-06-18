import React from 'react';
import eddie from './eddie.jpg';
import { makeStyles } from "@material-ui/core/styles";

let Header = ()=>{

    let useStyles = makeStyles({
        founderImage:{
            width:'170px',
            height:'200px',
            borderRadius: '50%',
        }

    })
    let classes = useStyles();
    return(
        <div>
            <img src={eddie} alt={'foundersImage'} className={classes.founderImage}></img>
            <h2 >Edj Handie Man Services</h2>
            <p>EDJ Handy services has been serving north-east Ohio and South east Michigan for the last<br></br> 8 years and many staisfied costumers.</p>
        </div>
    )
}

export default Header;
