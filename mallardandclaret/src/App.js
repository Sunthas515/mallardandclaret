import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";

import Logo from './pages/Logo'
import Hero from './pages/Hero'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Logo />
        <Hero />
        <Routes>
            <Route exact path="/" element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
