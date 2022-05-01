import './App.css';
import Appbar from './components/Appbar'
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Container from '@mui/material/Container';
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyPage from "./BuyPage"
import SellPage from "./SellPage"
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/frontend/src/BuyPage" element={<BuyPage />} />
          <Route path="/frontend/src/SellPage" element={<SellPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
