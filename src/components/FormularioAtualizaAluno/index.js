import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";
import Campo from "../Campo";

const ModalForm = styled.form`
height: 100vh;
h1{
    margin-bottom: 235px;
    text-align: center;
}
`


function FormularioAddAluno({ AdicionarTurma }) {
    const [nome, setNome] = useState('')
    const [ponto, setPonto] = useState('')

    function aoSubmeter(e) {
        e.preventDefault();

        AdicionarTurma({
            nome: nome,
            pontos: ponto
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
                valorDescricao="Nome: "
            />
            <Campo
                placeholder="Pontos"
                valor={nome}
                type="number"
                aoAlterado={(valor) => setNome(valor)}
                descricao={true}
                valorDescricao="Pontos: "
            />
            <Button type="submit" informacao="Adicionar Turma" />
        </ModalForm>
    );
}

export default FormularioAddAluno;
