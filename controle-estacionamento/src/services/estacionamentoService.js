import { TOTAL_VAGAS_CONDOMINIO } from '../models/dadosIniciais';

export const estacionamentoService = {
  listarReservas: (reservas) => {
    return [...reservas].sort((a, b) => Number(a.numeroVaga) - Number(b.numeroVaga));
  },

  listarVagasDisponiveis: (reservas) => {
    const vagasOcupadas = reservas.map((r) => Number(r.numeroVaga));
    return TOTAL_VAGAS_CONDOMINIO.filter((vaga) => !vagasOcupadas.includes(vaga));
  },

  salvarReserva: (reservasAtuais, novaReserva) => {
    const registro = {
      ...novaReserva,
      id: Date.now(),
      numeroVaga: Number(novaReserva.numeroVaga),
    };
    return [...reservasAtuais, registro];
  },

  removerReserva: (reservasAtuais, idReserva) => {
    return reservasAtuais.filter((reserva) => reserva.id !== idReserva);
  },
};
