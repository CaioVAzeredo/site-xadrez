import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Ranking() {
  const { id } = useParams(); // Obtém o ID da turma da URL
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    // Dados estáticos simulando o ranking da turma
    const dadosEstáticos = {
      1: [
        { id: 1, nome: 'João Silva', pontos: 150 },
        { id: 2, nome: 'Maria Souza', pontos: 140 },
        { id: 3, nome: 'Carlos Oliveira', pontos: 130 },
      ],
      2: [
        { id: 4, nome: 'Ana Paula', pontos: 160 },
        { id: 5, nome: 'Pedro Santos', pontos: 155 },
        { id: 6, nome: 'Fernanda Lima', pontos: 145 },
      ],
    };

    // Simulando busca dos dados da turma
    setRanking(dadosEstáticos[id] || []);
  }, [id]);

  return (
    <div>
      <h1>Ranking da Turma {id}</h1>
      {ranking.length > 0 ? (
        <ul>
          {ranking.map((aluno, index) => (
            <li key={aluno.id}>
              {index + 1}. {aluno.nome} - {aluno.pontos} pontos
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum ranking disponível para esta turma.</p>
      )}
    </div>
  );
}

export default Ranking;
