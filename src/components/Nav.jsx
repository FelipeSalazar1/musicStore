import {} from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <header className="menu">
        <nav className="nav-menu">
          <ul>
            <Link to="/" className="tlink">
              Home
            </Link>

            <Link to="/Contato" className="tlink">
              Contato
            </Link>

            <Link to="/Produtos" className="tlink">
              Produtos
            </Link>

            <Link to="/Login" className="tlink">
              Login
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
