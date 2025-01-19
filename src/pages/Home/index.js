import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const ContainerUL = styled.ul`
width: 400px;
height: 80%;
margin: 50px auto;
padding: 30px;
text-align: center;

@media (max-width: 768px){
    width: 80%;
}
`
const Turmas = styled.li`
padding: 10px;
margin: 30px auto;
background-color: white;
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
            <ContainerUL>
                {turmas.map((turma) => <Turmas key={turma.id} onClick={() => SelecionaPagina(turma.id)}>{turma.Turma}</Turmas>)}

            </ContainerUL>
        </>
    )
}

export default Home