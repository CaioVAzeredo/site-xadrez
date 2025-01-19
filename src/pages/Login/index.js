import { useState } from "react";
import Formulario from "../../components/Formulario";


function Login() {
    const [form, setForm] = useState({});

    function VerificarUsuario(dados) {
        setForm((prevForm) => {
            const novoForm = { ...prevForm, ...dados };
            console.log("Informações atualizadas do form:", novoForm);
            return novoForm;
        })
    }

    return (<>
        <Formulario VerificarUsuario={VerificarUsuario} />
    </>
    )
}

export default Login;