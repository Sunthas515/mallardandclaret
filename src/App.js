import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from './pages/Hero'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Sponsor from './pages/Sponsors'
import Login from './pages/Login'
import Members from './pages/Members'
import Huts from './pages/Huts'
import Forgot from './pages/Forgot'

function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
        <Home />
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/members" element={<Members/>} />
          <Route exact path="/huts" element={<Huts/>} />
          <Route exact path="/forgot" element={<Forgot/>} />
        </Routes>
        <Sponsor />
        <p className='copyright'>© Copyright Mallard and Claret 2021. All Rights Reserved</p>
      </Router>
    </div>
  );
}

export default App;
