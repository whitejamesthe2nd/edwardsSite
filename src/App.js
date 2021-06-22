
import './App.css';
import Header from './Components/headerComponent/header';
import Services from './Components/servicesComponent/Services';
import Contact from './Components/contactComponent/Contact';
import BookingComponent from './Components/bookingComponent/BookingComponent';
import FormComponent from './Components/formComponent/FormCompononet';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import EdwardsPlaceComponent from './Components/EdwardsPlace/EdwardsPlaceComponent';
import {useSelector,useDispatch} from 'react-redux';
import React, {useEffect,useState} from 'react';
import {completion, createCompletion, reload} from './redux/actions/CompletionActions';



function App() {
  let booking = useSelector((state)=>{
    console.log(state)
    return state.completion
  });
  const dispatch = useDispatch();
  const [time,setTime] = useState(null);
  const [person,setPerson] = useState(null);
  const history = useHistory();


  const handleSubmit = (e)=>{
    e.preventDefault();
    let data = {
      time,
      person
    }
    console.log(data);
    dispatch(completion(data));
    history.push('/');

  }
  useEffect(()=>{
    console.log(person)
    dispatch(reload('bleh'))
  }, [time,person,dispatch])
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/EdwardsPlace'>
          <EdwardsPlaceComponent handleSubmit={handleSubmit} setPerson={setPerson} setTime={setTime} person={person}/>
        </Route>
        <Route path='/'>
          <div className="App">
            <header className="App-header">
            </header>
            <div className="main">
              <Header />
              <Services />
              <BookingComponent time={time}/>
              <FormComponent />
              <Contact />
            </div>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
