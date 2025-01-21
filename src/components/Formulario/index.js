import styled from "styled-components";
import Button from "../Button";
import imgLogin from "../../assets/imagens/login-de-usuario.png"
import imgSenha from "../../assets/imagens/simbolo-de-cadeado-para-interface-de-seguranca.png"
import { useState } from "react";
import Campo from "../Campo";

const ModealForm = styled.form`
width: 80%;
height: 550px;
background-color: white;
margin: 100px auto;
border-radius: 20px;
h1{
    font-family: "Poppins", serif;
    text-align: center;
    padding-top: 50px;
}
@media(min-width: 768px){
    width: 500px;
}
`
const ContainerDiv = styled.div`
width: 100%;
height: 300px;
margin: 0 auto;


.divLogin{
    width: 80%;
margin: 60px auto;
}

.divBotoes{
    width: 80%;
    margin: 10px auto;
    display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

img{
    width: 50px;
    height: 45px;
    margin-top: 15px;
    background-color: rgb(121, 203, 250);
    padding: 5px;
}

.divLogin div{
    display: flex;
  justify-content: space-between; 
}
`

function Formulario({ VerificarUsuario }) {
    const [login, setLogin] = useState(''); // Correção: login em minúsculas
    const [senha, setSenha] = useState(''); // Correção: senha em minúsculas

    function aoSubmeter(e) {
        e.preventDefault();

        VerificarUsuario({
            login: login, // Consistência no uso de 'login'
            senha: senha, // Consistência no uso de 'senha'
        });
    }

    return (
        <ModealForm onSubmit={aoSubmeter}>
            <h1>LOGIN</h1>
            <ContainerDiv>
                <div className="divLogin">
                    <div>
                        <img src={imgLogin} alt="Login Icon" />
                        <Campo
                            placeholder="Login"
                            type="text"
                            value={login} // Ligação com o estado 'login'
                            aoAlterado={(valor) => setLogin(valor)} // Atualiza o estado
                        />
                    </div>
                    <div>
                        <img src={imgSenha} alt="Senha Icon" />
                        <Campo
                            placeholder="Senha"
                            type="password"
                            value={senha} // Ligação com o estado 'senha'
                            aoAlterado={(valor) => setSenha(valor)} // Atualiza o estado
                        />
                    </div>
                </div>
                <div className="divBotoes">
                    <Button informacao={"Login"} />
                </div>
            </ContainerDiv>
        </ModealForm>
    );
}

export default Formulario;
