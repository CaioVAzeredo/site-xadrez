import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PlacarLogin from './pages/PlacarParaFazerLogin'
import PlacarLogout from './pages/PlacarParaFazerLogout'
import Login from "./pages/Login";
import HeaderLogin from "./components/Login/HeaderLogin";
import { useEffect, useState } from "react";
import HeaderLogout from "./components/Logout/HeaderLogout";
import HomeParaFazerLogin from "./pages/HomeParaFazerLogin";
import HomeParaFazerLogout from "./pages/HomeParaFazerLogout";

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
          <Route path="/" element={
            !token ? (<HomeParaFazerLogin />) : (<HomeParaFazerLogout />)
          }
          />

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