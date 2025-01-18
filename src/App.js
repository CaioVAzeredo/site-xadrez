import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Placar from './pages/Placar'
import Home from './pages/Home'
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/Placar/:id" element={<Placar />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;