import { useEstacionamento } from '../context/EstacionamentoContext';
import { VagaCard } from '../components/VagaCard';

export function ListarVagas() {
  const { reservas, vagasDisponiveis, removerReserva } = useEstacionamento();

  return (
    <div className="container">
      <div className="card">
        <h2>Vagas Cadastradas ({reservas.length})</h2>
        {reservas.length === 0 ? (
          <p>Nenhuma vaga reservada no momento.</p>
        ) : (
          <div className="vagas-grid">
            {reservas.map((reserva) => (
              <VagaCard
                key={reserva.id}
                reserva={reserva}
                onRemover={removerReserva}
              />
            ))}
          </div>
        )}
      </div>

      <div className="card">
        <h2>Resumo de Vagas Disponíveis ({vagasDisponiveis.length})</h2>
        {vagasDisponiveis.length === 0 ? (
          <p>Todas as vagas estão ocupadas.</p>
        ) : (
          <div className="vagas-grid">
            {vagasDisponiveis.map((numero) => (
              <div key={numero} className="vaga-item disponivel">
                <div className="vaga-header">
                  <strong>Vaga #{numero}</strong>
                  <span className="badge badge-disponivel">Disponível</span>
                </div>
                <p className="vaga-info">Livre para reserva imediata.</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
