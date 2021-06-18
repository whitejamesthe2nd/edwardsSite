
import './App.css';
import Header from './Components/headerComponent/header';
import Services from './Components/servicesComponent/Services';
import Contact from './Components/contactComponent/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Services />
        <Contact />

      </header>
    </div>
  );
}

export default App;
