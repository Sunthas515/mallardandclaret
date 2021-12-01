import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from './pages/Hero'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Sponsor from './pages/Sponsors'

function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
        <Home />
        <Routes>
            <Route exact path="/" element={<Welcome/>}>
          </Route>
        </Routes>
        <Sponsor />
        <p style={{width: '958px', margin:'auto', textAlign:'left', paddingLeft:'1%'}}>© Copyright Mallard and Claret 2021. All Rights Reserved</p>
      </Router>
    </div>
  );
}

export default App;
