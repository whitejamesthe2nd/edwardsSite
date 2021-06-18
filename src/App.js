import logo from './logo.svg';
import './App.css';
import Header from './Components/headerComponent/header';
import Services from './Components/servicesComponent/Services';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Services />

      </header>
    </div>
  );
}

export default App;
