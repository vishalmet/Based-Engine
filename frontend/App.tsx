import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import HowitWorks from './components/HowitWorks';
import Tutorials from './components/Tutorials';
import Dashboard from './pages/Dashboard';

const AppContent = () => {
  const location = useLocation();

  // List of routes where the Navbar should not be displayed
  const noNavbarRoutes = ['/dashboard'];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowitWorks />} />
        <Route path="/walkthrough" element={<Tutorials />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
