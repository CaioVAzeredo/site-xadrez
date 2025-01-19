import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import iconEdit from '../../assets/imagens/editar-texto.png'
import primeiroPequeno from '../../assets/imagens/1-mobile.png'
import segundoPequeno from '../../assets/imagens/2-mobile.png'
import terceiroPequeno from '../../assets/imagens/3-mobile.png'
import Button from "../../components/Button";
import segundoGrande from '../../assets/imagens/2.png'
import primeiroGrande from '../../assets/imagens/1.png'
import terceiroGrande from '../../assets/imagens/3.png'

const SectionPodiumPequeno = styled.section`
.imgEdit{
    width: 20px;
    cursor: pointer;
margin: 0 50px;
padding: 0;

}
div{
    width: 300px;
    margin: 0 auto;

}
div h2{
    text-align: center;
}
div h3{
    margin: 0 auto;
width: 150px;
    display: flex;
     justify-content: space-between
}
div span{
    margin: 0 15px;
}

img{
    padding-top: 40px;
    display: block;
    margin: 0 auto;
    width: 100px;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
display: none;
}
@media screen and (min-width: 1025px) {
    display: none;
}
`
const SectionPodiumGrande = styled.section`
.imgEdit{
    margin-left: 50px;
    width: 20px;
    cursor: pointer;

}
@media screen and (max-width: 768px){
display: none;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
    display: block;
    display: flex;
    margin: 80px auto;
    width: 745px;
    .segundo{
        margin-top: 70px;
    }
    .terceiro{
        margin-top: 100px;
    }
    h2, h3{
        text-align: center;
    }
    h3{
        padding-left: 80px;
    }
    img{
        width: 250px;
    }
}
@media screen and (min-width: 1025px) {

    display: block;
    display: flex;
    margin: 80px auto;
    width: 999px;
    .segundo{
        margin-top: 70px;
    }
    .terceiro{
        margin-top: 100px;
    }
    h2, h3{
        text-align: center;
    }
    h3{
        padding-left: 80px;
    }
}
`
const SectionAlunos = styled.section`
img{
    margin-left: 50px;
    width: 20px;
    cursor: pointer;
}
h1{
    margin-top:100px;
    text-align: center;
}
ul{
    padding: 0;
    text-align: center;
}
li{
    padding: 30px;
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
`;

const ModalAddAluno = styled.div`
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

const ModalAtualizaALuno = styled.div`
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

function Placar() {
    const { id } = useParams() // Obtém o ID da turma da URL
    const [ranking, setRanking] = useState([])
    const [isModalAddAluno, setIsModalAddAluno] = useState(false)
    const [isModalAtualizaAluno, setIsModalAtualizaAluno] = useState(false)

    const rankingOrganizado = ranking.sort((a, b) => b.pontos - a.pontos)
    const podium = rankingOrganizado.slice(0, 3)

    
    function AtualizaAluno() {
        setIsModalAtualizaAluno(!isModalAtualizaAluno)
    }
    function FecharModalAtualizaAluno() {
        setIsModalAtualizaAluno(!isModalAtualizaAluno)
    }

    function AdicionarAluno() {
        setIsModalAddAluno(!isModalAddAluno)
    }

    function FecharModalAdicionarAluno() {
        setIsModalAddAluno(!isModalAddAluno)
    }

    useEffect(() => {
        // Dados estáticos simulando o ranking da turma
        const dadosEstáticos = {
            1: [
                { id: 1, nome: 'Joao Silva', pontos: 135 },
                { id: 2, nome: 'Maria Souza', pontos: 140 },
                { id: 3, nome: 'Carlos Oliveira', pontos: 130 },
                { id: 4, nome: "Ana", pontos: 100 },
                { id: 5, nome: "Pedro", pontos: 67 },
                { id: 6, nome: "Laura", pontos: 80 },
                { id: 7, nome: "Paulo", pontos: 76 },
                { id: 8, nome: "Fernanda", pontos: 90 },
                { id: 9, nome: "Ricardo", pontos: 84 },
                { id: 10, nome: "Beatriz", pontos: 92 },
            ],
            2: [
                { id: 4, nome: 'Ana Paula', pontos: 160 },
                { id: 5, nome: 'Pedro Santos', pontos: 155 },
                { id: 6, nome: 'Fernanda Lima', pontos: 145 },
                { id: 4, nome: "Ana", pontos: 100 },
                { id: 5, nome: "Pedro", pontos: 67 },
                { id: 6, nome: "Laura", pontos: 80 },
                { id: 7, nome: "Paulo", pontos: 76 },
                { id: 8, nome: "Fernanda", pontos: 90 },
                { id: 9, nome: "Ricardo", pontos: 84 },
                { id: 10, nome: "Beatriz", pontos: 92 },
            ],
            3: [
                { id: 1, nome: "Joao", pontos: 95 },
                { id: 2, nome: "Maria", pontos: 88 },
                { id: 3, nome: "Carlos", pontos: 72 },
                { id: 4, nome: "Ana", pontos: 100 },
                { id: 5, nome: "Pedro", pontos: 67 },
                { id: 6, nome: "Laura", pontos: 80 },
                { id: 7, nome: "Paulo", pontos: 76 },
                { id: 8, nome: "Fernanda", pontos: 90 },
                { id: 9, nome: "Ricardo", pontos: 84 },
                { id: 10, nome: "Beatriz", pontos: 92 },],
            4: [
                { id: 1, nome: "Joao", pontos: 95 },
                { id: 2, nome: "Maria", pontos: 88 },
                { id: 3, nome: "Carlos", pontos: 72 },
                { id: 4, nome: "Ana", pontos: 100 },
                { id: 5, nome: "Pedro", pontos: 67 },
                { id: 6, nome: "Laura", pontos: 80 },
                { id: 7, nome: "Paulo", pontos: 76 },
                { id: 8, nome: "Fernanda", pontos: 90 },
                { id: 9, nome: "Ricardo", pontos: 84 },
                { id: 10, nome: "Beatriz", pontos: 92 },]
        };

        // Simulando busca dos dados da turma
        setRanking(dadosEstáticos[id] || []);
    }, [id]);


    return (
        <>
            <SectionPodiumPequeno>
                <div>
                    <img src={primeiroPequeno} alt="imagem primeiro lugar" />
                    <h2>{podium[0]?.nome}</h2>
                    <h3>Pontos: <span>{podium[0]?.pontos}</span>
                        <img src={iconEdit} alt="icone editar" onClick={AtualizaAluno} className="imgEdit" /></h3>
                </div>
                <div>
                    <img src={segundoPequeno} alt="imagem segundo lugar" />
                    <h2>{podium[1]?.nome}</h2>
                    <h3>Pontos: <span>{podium[1]?.pontos}</span>
                        <img src={iconEdit} alt="icone editar" onClick={AtualizaAluno} className="imgEdit" /></h3>
                </div>
                <div>
                    <img src={terceiroPequeno} alt="imagem terceiro lugar" />
                    <h2>{podium[2]?.nome}</h2>
                    <h3>Pontos: <span>{podium[2]?.pontos}</span>
                        <img src={iconEdit} alt="icone editar" onClick={AtualizaAluno} className="imgEdit" /></h3>
                </div>
            </SectionPodiumPequeno>

            <SectionPodiumGrande>
                <div className="segundo">
                    <img src={segundoGrande} alt="imagem segundo lugar" />
                    <h2>{podium[1]?.nome} </h2>
                    <h3>Pontos: <span>{podium[1]?.pontos}</span>
                        <img src={iconEdit} alt="icone editar" onClick={AtualizaAluno} className="imgEdit" /></h3>
                </div>
                <div className="primeiro">
                    <img src={primeiroGrande} alt="imagem primeiro lugar" />
                    <h2>{podium[0]?.nome} </h2>
                    <h3>Pontos: <span>{podium[0]?.pontos}</span>
                        <img src={iconEdit} alt="icone editar" onClick={AtualizaAluno} className="imgEdit" /></h3>
                </div>
                <div className="terceiro">
                    <img src={terceiroGrande} alt="imagem terceiro lugar" />
                    <h2>{podium[2]?.nome} </h2>
                    <h3>Pontos: <span>{podium[2]?.pontos}</span>
                        <img src={iconEdit} alt="icone editar" onClick={AtualizaAluno} className="imgEdit" /></h3>
                </div>
            </SectionPodiumGrande>
            <SectionAlunos>
                <h1>Alunos</h1>
                <ul>
                    {ranking.slice(3).map((aluno, index) => (
                        <li key={index}>
                            <strong><span>{`${index + 4}°`}</span> {aluno.nome} </strong> - {aluno.pontos} pontos <img src={iconEdit} alt="icone editar" onClick={AtualizaAluno} />
                        </li>
                    ))}
                    <Button informacao="Adicionar Aluno" onClick={AdicionarAluno} />
                </ul>
            </SectionAlunos>

            {isModalAddAluno && (<>
                <ContainerForaDoModal onClick={FecharModalAdicionarAluno}>
                    <ModalAddAluno>

                    </ModalAddAluno>
                </ContainerForaDoModal>
            </>)}

            {isModalAtualizaAluno && (<>
                <ContainerForaDoModal onClick={FecharModalAtualizaAluno}>
                    <ModalAtualizaALuno>

                    </ModalAtualizaALuno>
                </ContainerForaDoModal>
            </>)}
        </>)
}

export default Placar;