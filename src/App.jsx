import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import Nav from './pages/Nav'
import Ourservices from "./pages/Ourservices";
function App() {

  return (
    <div className='relative w-screen'>
        <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Ourservices />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
