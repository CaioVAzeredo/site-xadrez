import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button'
import FormularioAddTurma from "../../components/FormularioAddTurma";
import { v4 as uuidv4 } from 'uuid';


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

const ContainerForaDoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const ModalAddTurma = styled.div`
position: relative;
  width: 45%;
  height: 75%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  border-radius: 10px;
`


function HomeParaFazerLogout() {
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState(false)
    const [turmas, setTurmas] = useState([
        { Turma: "INTEGRAL ASA NORTE 4° e 5° ano", id: 1 },
        { Turma: "INTEGRAL ASA NORTE infantil", id: 2 },
        { Turma: "INTEGRAL AGUAS CLARAS 4° e 5° ano", id: 3 },
        { Turma: "INTEGRAL AGUAS CLARAS infantil", id: 4 },
    ]);

    function SelecionaPagina(id) {
        navigate(`/placar/${id}`)
    }

    function AdicionarTurma(NovaTurma) {
        setTurmas([...turmas, { ...NovaTurma, id: uuidv4() }])
    }

    function FecharModal() {
        setIsModal(!isModal)
    }
    return (
        <>
            <ContainerUL>
                {turmas.map((turma) => <Turmas key={turma.id} onClick={() => SelecionaPagina(turma.id)}>{turma.Turma}</Turmas>)}
                <Button informacao="Adicionar turma" onClick={FecharModal} />
            </ContainerUL>

            {isModal && (
                <ContainerForaDoModal onClick={FecharModal}>
                    <ModalAddTurma onClick={(e) => e.stopPropagation()}>
                        <FormularioAddTurma AdicionarTurma={AdicionarTurma} />
                    </ModalAddTurma>
                </ContainerForaDoModal>
            )}
        </>
    )
}

export default HomeParaFazerLogout