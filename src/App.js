
import './App.css';
import Header from './Components/headerComponent/header';
import Services from './Components/servicesComponent/Services';
import Contact from './Components/contactComponent/Contact';
import BookingComponent from './Components/bookingComponent/BookingComponent';
import FormComponent from './Components/formComponent/FormCompononet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EdwardsPlaceComponent from './Components/EdwardsPlace/EdwardsPlaceComponent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/EdwardsPlace'>
          <EdwardsPlaceComponent />
        </Route>
        <Route path='/'>
          <div className="App">
            <header className="App-header">
            </header>
            <div className="main">
              <Header />
              <Services />
              <BookingComponent />
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
