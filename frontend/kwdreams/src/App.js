import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Top_Content from './components/Top_Content/Top_Content.js'

function App() {
  return (
    <div className="App"> 
      <Navbar id="Navbar"></Navbar>
      <header className="App-header">
        <Top_Content></Top_Content>
      </header>
    </div>
  );
}

export default App;
