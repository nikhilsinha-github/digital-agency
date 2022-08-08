import './App.css';
import { Navbar } from './components/Navbar';
import bgImage from './assets/landing-image.png';
import {About} from './components/About'
import {Services} from './components/Services'
import {Footer} from './components/Footer'
import {Portfolio} from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <div className="home">
        <header className="App-header">
          <Navbar/>
        </header>
        <div className="landing-section">
          <div className="landing-image-and-text">
            <img src={bgImage} alt=""/>
            <div className="landing-text">
              <div className="landing-heading">
                <h2>15+ years of experiences for give you better result.</h2>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity test. Override the digital divide with  additional clickthroughs Capitalize on low hanging fruit to identify a ballpark value added activity test.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Services/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
