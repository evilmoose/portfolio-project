// App.js
import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import Services from './Components/Services';
import Tours from './Components/Tours';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
    </div>
  );
}

export default App;
