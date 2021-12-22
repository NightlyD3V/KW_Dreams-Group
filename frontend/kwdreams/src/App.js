import './App.css';
import Navbar from './components/Navbar.js';
import Top_Content from './components/Top_Content.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App"> 
      <Navbar id="Navbar"></Navbar>
      <Top_Content></Top_Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
