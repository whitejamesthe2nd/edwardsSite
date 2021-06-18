import React from 'react';
import eddie from './eddie.jpg';

let Header = ()=>{
    return(
        <div>
            <img src={eddie} alt={'founders pic'} ></img>
            <h1 id={'header'}>Edj Handie man Services</h1>
        </div>
    )
}

export default Header;
