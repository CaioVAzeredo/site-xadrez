import { Navigate } from "react-router-dom";
import Formulario from "../../components/Formulario";


function PaginaLogin({ setToken }) {

    const VerificarUsuario = async (credenciais) => {
        const { login, senha } = credenciais; // Certifique-se de que as variáveis têm a mesma capitalização
        console.log(`Login: ${login}; Senha: ${senha}`);
        try {
            const response = await fetch("https://localhost:7048/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Username: login, Password: senha }), // Certifique-se de que os nomes das propriedades coincidem
            });
            const data = await response.json();

            if (response.ok) {
                setToken(data.token);
                localStorage.setItem("authToken", data.token);
                Navigate("/");
            } else {
                alert(data.message || "Erro no login");
            }
        } catch (error) {
            console.error("Erro:", error);
        }
    };


    return (<>
        <Formulario VerificarUsuario={VerificarUsuario} />
    </>
    )
}

export default PaginaLogin;