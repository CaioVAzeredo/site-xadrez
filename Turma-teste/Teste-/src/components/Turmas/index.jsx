import { useNavigate } from 'react-router-dom';

function Turmas() {
  const navigate = useNavigate();

  const turmas = [
    { id: 1, nome: 'Turma A' },
    { id: 2, nome: 'Turma B' },
    // Adicione mais turmas conforme necessário
  ];

  const handleTurmaClick = (id) => {
    navigate(`/turmas/${id}`);
  };

  return (
    <div>
      <h1>Turmas</h1>
      <ul>
        {turmas.map((turma) => (
          <li key={turma.id} onClick={() => handleTurmaClick(turma.id)}>
            {turma.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Turmas;
