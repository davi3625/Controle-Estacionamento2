import { BrowserRouter, Routes, Route } from 'react-router';
import { EstacionamentoProvider } from './context/EstacionamentoContext';
import { Navbar } from './components/Navbar';
import { ListarVagas } from './pages/ListarVagas';
import { VagasDisponiveis } from './pages/VagasDisponiveis';
import { CadastroReserva } from './pages/CadastroReserva';

export function App() {
  return (
    <EstacionamentoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListarVagas />} />
          <Route path="/disponiveis" element={<VagasDisponiveis />} />
          <Route path="/cadastro" element={<CadastroReserva />} />
        </Routes>
      </BrowserRouter>
    </EstacionamentoProvider>
  );
}

export default App;
