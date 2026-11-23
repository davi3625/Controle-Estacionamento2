import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useEstacionamento } from '../context/EstacionamentoContext';

export function CadastroReserva() {
  const { vagasDisponiveis, salvarReserva } = useEstacionamento();
  const location = useLocation();
  const navigate = useNavigate();

  const vagaInicial = location.state?.vagaSelecionada || '';

  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    numeroVaga: vagaInicial,
  });

  const [mostrarPopup, setMostrarPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'placa' ? value.toUpperCase() : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Dados da Reserva Cadastrada:', formData);

    salvarReserva(formData);

    setMostrarPopup(true);
  };

  const fecharPopup = () => {
    setMostrarPopup(false);
    setFormData({
      placa: '',
      proprietario: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      numeroVaga: '',
    });
    navigate('/');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Cadastro de Reserva de Vaga</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="placa">Placa do Veículo *</label>
              <input
                type="text"
                id="placa"
                name="placa"
                placeholder="Ex: ABC-1234"
                value={formData.placa}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="proprietario">Nome do Proprietário *</label>
              <input
                type="text"
                id="proprietario"
                name="proprietario"
                placeholder="Ex: João da Silva"
                value={formData.proprietario}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="apartamento">Número do Apartamento *</label>
              <input
                type="text"
                id="apartamento"
                name="apartamento"
                placeholder="Ex: 204"
                value={formData.apartamento}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bloco">Bloco do Apartamento *</label>
              <input
                type="text"
                id="bloco"
                name="bloco"
                placeholder="Ex: B"
                value={formData.bloco}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="modelo">Modelo do Veículo *</label>
              <input
                type="text"
                id="modelo"
                name="modelo"
                placeholder="Ex: Hyundai HB20"
                value={formData.modelo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cor">Cor do Veículo *</label>
              <input
                type="text"
                id="cor"
                name="cor"
                placeholder="Ex: Preto"
                value={formData.cor}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="numeroVaga">Número da Vaga de Estacionamento *</label>
              <select
                id="numeroVaga"
                name="numeroVaga"
                value={formData.numeroVaga}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma vaga disponível</option>
                {vagasDisponiveis.map((vaga) => (
                  <option key={vaga} value={vaga}>
                    Vaga #{vaga}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={vagasDisponiveis.length === 0}>
            Salvar Reserva
          </button>
        </form>
      </div>

      {mostrarPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Sucesso!</h3>
            <p>Cadastro realizado com sucesso!</p>
            <button className="btn btn-primary" onClick={fecharPopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
