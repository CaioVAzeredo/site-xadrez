import styled from "styled-components"
import Header from "../../components/Header"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const Turmas = styled.li`
width: 400px;
height: 80%;
background-color: white;
margin: 20px auto;
padding: 30px;
text-align: center;
border-radius: 10px;
&:hover{
    box-shadow: 1px 1px 5px gray;
cursor: pointer;

}
`
function Home() {
    const navigate = useNavigate();
    const [turmas, setTurmas] = useState([
        { Turma: "INTEGRAL ASA NORTE 4° e 5° ano", id: 1 },
        { Turma: "INTEGRAL ASA NORTE infantil", id: 2 },
        { Turma: "INTEGRAL AGUAS CLARAS 4° e 5° ano", id: 3 },
        { Turma: "INTEGRAL AGUAS CLARAS infantil", id: 4 },
    ]);
    function SelecionaPagina(id) {
        navigate(`/placar/${id}`)
        console.log(`valor de id: ${id}`)
    }

    return (
        <>
            
            <ul>
                {turmas.map((turma) => <Turmas key={turma.id} onClick={() => SelecionaPagina(turma.id)}>{turma.Turma}</Turmas>)}

            </ul>
        </>
    )
}

export default Home