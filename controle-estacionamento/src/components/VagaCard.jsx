export function VagaCard({ reserva, onRemover }) {
  return (
    <div className="vaga-item ocupada">
      <div>
        <div className="vaga-header">
          <strong>Vaga #{reserva.numeroVaga}</strong>
          <span className="badge badge-ocupada">Ocupada</span>
        </div>
        <div className="vaga-info">
          <p><strong>Proprietário:</strong> {reserva.proprietario}</p>
          <p><strong>Apartamento:</strong> {reserva.apartamento} - Bloco {reserva.bloco}</p>
          <p><strong>Veículo:</strong> {reserva.modelo} ({reserva.cor})</p>
          <p><strong>Placa:</strong> {reserva.placa}</p>
        </div>
      </div>

      {onRemover && (
        <button
          className="btn btn-danger"
          style={{ marginTop: '1rem' }}
          onClick={() => onRemover(reserva.id)}
        >
          Remover Reserva
        </button>
      )}
    </div>
  );
}
