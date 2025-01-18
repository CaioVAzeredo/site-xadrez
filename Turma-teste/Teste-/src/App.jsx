import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Turmas from './components/Turmas';
import Ranking from './components/Ranking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Turmas />} />
        <Route path="/turmas/:id" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;
