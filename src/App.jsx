import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import User from "./pages/user";
import GatekeeperApp from "./pages/GatekeeperApp";
import VillageDashboard from "./pages/VillageDashboard";
import ProviderDashboard  from './pages/ProviderDashboard'
import './App.css';
function App() {

  return (
    <div className='relative w-screen'>
        <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/gatekeeperApp" element={<GatekeeperApp />} />
        <Route path="/villageDashboard" element={<VillageDashboard />} />
        <Route path="/providerDashboard" element={<ProviderDashboard />} />
       
      </Routes>
    </Router>
    </div>
  )
}

export default App
