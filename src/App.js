import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Placar from './pages/Placar'
import Home from './pages/Home'
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placar/:id" element={<Placar />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;