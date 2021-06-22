import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {createCompletion} from '../../redux/actions/CompletionActions'

let BookingComponent = (props) => {
    // const booking = useSelector((state)=>state.completion);
    // useEffect(()=>{
    //     console.log(booking);
    // }, [])
    console.log(props);
    const person = useSelector(state=>state.completion.person)
    const time = useSelector(state=>state.completion.time)
    return(
        <div>
            <h2>Current Status</h2>
            <h3>Anticipated Time of Completion:</h3><span>{`${time}`}</span>
            <h3>Next in Line:</h3><span>{`${person}`}</span>
        </div>
    )
}

export default BookingComponent;
