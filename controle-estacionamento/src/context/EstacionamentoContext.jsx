import { createContext, useState, useContext } from 'react';
import { reservasIniciais } from '../models/dadosIniciais';
import { estacionamentoService } from '../services/estacionamentoService';

const EstacionamentoContext = createContext();

export function EstacionamentoProvider({ children }) {
  const [reservas, setReservas] = useState(reservasIniciais);

  const listar = () => estacionamentoService.listarReservas(reservas);

  const listarDisponiveis = () => estacionamentoService.listarVagasDisponiveis(reservas);

  const salvar = (novaReserva) => {
    const listaAtualizada = estacionamentoService.salvarReserva(reservas, novaReserva);
    setReservas(listaAtualizada);
  };

  const remover = (id) => {
    const listaAtualizada = estacionamentoService.removerReserva(reservas, id);
    setReservas(listaAtualizada);
  };

  return (
    <EstacionamentoContext.Provider
      value={{
        reservas: listar(),
        vagasDisponiveis: listarDisponiveis(),
        salvarReserva: salvar,
        removerReserva: remover,
      }}
    >
      {children}
    </EstacionamentoContext.Provider>
  );
}

export const useEstacionamento = () => useContext(EstacionamentoContext);
