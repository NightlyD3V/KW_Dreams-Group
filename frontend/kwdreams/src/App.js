import './App.css';
import Navbar from './components/Navbar.js';
import Top_Content from './components/Top_Content.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Top_Content />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
