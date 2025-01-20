import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PlacarLogin from './pages/PlacarLogin'
import PlacarLogout from './pages/PlacarLogout'
import Home from './pages/Home'
import Login from "./pages/Login";
import HeaderLogin from "./components/Login/HeaderLogin";
import { useEffect, useState } from "react";
import HeaderLogout from "./components/Logout/HeaderLogout";

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const tokenSalvo = localStorage.getItem("authToken")
    if (tokenSalvo) {
      setToken(tokenSalvo)
    }
  })
  return (
    <>
      <Router>
        {!token ? (<HeaderLogin />) : <HeaderLogout setToken={setToken} />}


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login"
            element={
              !token ? (
                < Login setToken={setToken} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route path="/placar/:id"
            element={
              token ? (
                <PlacarLogout />
              ) : (
                <PlacarLogin />
              )
            }
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;