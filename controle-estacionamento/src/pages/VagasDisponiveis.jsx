import { Link } from 'react-router';
import { useEstacionamento } from '../context/EstacionamentoContext';

export function VagasDisponiveis() {
  const { vagasDisponiveis } = useEstacionamento();

  return (
    <div className="container">
      <div className="card">
        <h2>Vagas Disponíveis no Condomínio ({vagasDisponiveis.length})</h2>
        {vagasDisponiveis.length === 0 ? (
          <p>Não há vagas disponíveis no momento.</p>
        ) : (
          <div className="vagas-grid">
            {vagasDisponiveis.map((numero) => (
              <div key={numero} className="vaga-item disponivel">
                <div>
                  <div className="vaga-header">
                    <strong>Vaga #{numero}</strong>
                    <span className="badge badge-disponivel">Livre</span>
                  </div>
                  <p className="vaga-info">Esta vaga está disponível para vinculação a um apartamento.</p>
                </div>
                <Link
                  to="/cadastro"
                  state={{ vagaSelecionada: numero }}
                  className="btn btn-primary"
                  style={{ textAlign: 'center', textDecoration: 'none', padding: '0.5rem' }}
                >
                  Reservar Vaga
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
