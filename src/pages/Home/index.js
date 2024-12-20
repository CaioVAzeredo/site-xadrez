import styled from "styled-components";
import primeiroPequeno from '../../assets/imagens/1-mobile.png'
import segundoPequeno from '../../assets/imagens/2-mobile.png'
import terceiroPequeno from '../../assets/imagens/3-mobile.png'

import primeiroGrande from '../../assets/imagens/1.png'
import segundoGrande from '../../assets/imagens/2.png'
import terceiroGrande from '../../assets/imagens/3.png'
import { useState } from "react";
import Header from "../../components/Header";

const SectionPodiumPequeno = styled.section`
div{
    width: 300px;
    margin: 0 auto;

}
div h2{
    text-align: center;
}
div h3{
    text-align: center;
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
}
`

const SectionAlunos = styled.section`
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
function Home() {
    const [alunos, setAlunos] = useState([
        { nome: "João", pontos: 95 },
        { nome: "Maria", pontos: 88 },
        { nome: "Carlos", pontos: 72 },
        { nome: "Ana", pontos: 100 },
        { nome: "Pedro", pontos: 67 },
        { nome: "Laura", pontos: 80 },
        { nome: "Paulo", pontos: 76 },
        { nome: "Fernanda", pontos: 90 },
        { nome: "Ricardo", pontos: 84 },
        { nome: "Beatriz", pontos: 92 },]
    )
    const podium = alunos.slice(0, 3)
    return (
        <>
        <Header />
            <SectionPodiumPequeno>
                <div>
                    <img src={primeiroPequeno} alt="imagem primeiro lugar" />
                    <h2>{podium[0].nome} * * </h2>
                    <h3>Pontos: <span>{podium[0].pontos}</span></h3>
                </div>
                <div>
                    <img src={segundoPequeno} alt="imagem segundo lugar" />
                    <h2>{podium[1].nome} * *</h2>
                    <h3>Pontos: <span>{podium[1].pontos}</span></h3>
                </div>
                <div>
                    <img src={terceiroPequeno} alt="imagem terceiro lugar" />
                    <h2>{podium[2].nome} * *</h2>
                    <h3>Pontos: <span>{podium[2].pontos}</span></h3>
                </div>
            </SectionPodiumPequeno>

            <SectionPodiumGrande>
                <div className="segundo">
                    <img src={segundoGrande} alt="imagem segundo lugar" />
                    <h2>{podium[1].nome} </h2>
                    <h3>Pontos: <span>{podium[1].pontos}</span></h3>
                </div>
                <div className="primeiro">
                    <img src={primeiroGrande} alt="imagem primeiro lugar" />
                    <h2>{podium[0].nome} </h2>
                    <h3>Pontos: <span>{podium[0].pontos}</span></h3>
                </div>
                <div className="terceiro">
                    <img src={terceiroGrande} alt="imagem terceiro lugar" />
                    <h2>{podium[2].nome} </h2>
                    <h3>Pontos: <span>{podium[2].pontos}</span></h3>
                </div>
            </SectionPodiumGrande>

            <SectionAlunos>
                <h1>Alunos</h1>
                <ul>
                    {alunos.slice(3).map((aluno, index) => (
                        <li key={index}>
                            <strong><span>{`${index + 4 }°`}</span> {aluno.nome} </strong> - {aluno.pontos} pontos
                        </li>
                    ))}
                </ul>
            </SectionAlunos>
        </>)
}

export default Home;