import { NavLink } from 'react-router';

export function Navbar() {
  return (
    <nav className="navbar">
      <h1>Condomínio ParkControl</h1>
      <div className="nav-links">
        <NavLink to="/" end>
          Listar Vagas
        </NavLink>
        <NavLink to="/disponiveis">
          Vagas Disponíveis
        </NavLink>
        <NavLink to="/cadastro">
          Cadastrar Reserva
        </NavLink>
      </div>
    </nav>
  );
}
