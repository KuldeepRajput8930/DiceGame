
import './App.css';
import HomePage from "./Components/HomePage/HomePage";
import GamePage from './Components/GamePage/GamePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GamePage" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
