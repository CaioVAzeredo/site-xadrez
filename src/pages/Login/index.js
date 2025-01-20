import { Navigate } from "react-router-dom";
import Formulario from "../../components/Login/Formulario";


function Login({ setToken }) {
    const VerificarUsuario = async (dados) => {
        try {
            const response = await fetch("https://localhost:7048/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ dados }),
            });

            const data = await response.json();

            if (response.ok) {
                setToken(data.token);
                localStorage.setItem("authToken", data.token);
                Navigate("/profile");
            } else {
                alert(data.message || "Erro no login");
            }
        } catch (error) {
            console.error("Erro:", error);
        }
    }

    return (<>
        <Formulario VerificarUsuario={VerificarUsuario} />
    </>
    )
}

export default Login;