import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {createCompletion} from '../../redux/actions/CompletionActions';

export let data= {};
let EdwardsPlaceComponent = (props)=>{
    const dispatch = useDispatch();
    const [time,setTime] = useState(null);
    const [person,setPerson] = useState(null);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        data = {
            time,
            person
        }
        console.log(data);
        dispatch(createCompletion(data));
        history.push('/');

    }
    // console.log(props);


    return(
        <div>
            <h1>Hi Bro,</h1>
            <p>This is where you will be setting your current Status</p>
            <form onSubmit={handleSubmit}>

            <h3>Anticipated Time of Completion:</h3>
            <input type='time' placeholder='Time of Completion' onChange={(e)=> setTime(e.target.value)}></input>
            <h3>Next in Line:</h3>
            <input type='text' placeholder='next in line' onChange={(e)=> {
                console.log(person);
                setPerson(e.target.value)}}></input>
            <br />
            <button type='submit'>Send</button>
            </form>

        </div>
    )
}

export default EdwardsPlaceComponent;
