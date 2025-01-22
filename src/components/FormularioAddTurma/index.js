import styled from "styled-components";
import Button from "../Button";
import imgLogin from "../../assets/imagens/login-de-usuario.png"
import imgSenha from "../../assets/imagens/simbolo-de-cadeado-para-interface-de-seguranca.png"
import { useState } from "react";
import Campo from "../Campo";

const ModalForm = styled.form`
height: 100vh;
h1{
    margin-bottom: 235px;
    text-align: center;
}
`
const ContainerDiv = styled.div`

`

function Formulario({ AdicionarTurma }) {
    const [nome, setNome] = useState('')

    function aoSubmeter(e) {
        e.preventDefault();

        AdicionarTurma({
            Turma: nome
        })


    }

    return (
        <ModalForm onSubmit={aoSubmeter}>
            <h1>ADIÇÃO DA TURMA</h1>
            <Campo
                placeholder="Nome"
                valor={nome}
                type="text"
                aoAlterado={(valor) => setNome(valor)}
                descricao={true}
                valorDescricao="Nome da turma"
            />
            <Button type="submit" informacao="Adicionar Turma" />
        </ModalForm>
    );
}

export default Formulario;
