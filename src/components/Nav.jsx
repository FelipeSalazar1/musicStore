import {} from 'react';
import { Link } from 'react-router-dom';
import '../Scss/Nav.scss'
import Logo from '../assets/icon-nav.svg'
import Cart from '../assets/icon-cart.svg'
import Profile from '../assets/profile.svg'

export default function Nav() {
  return (
    <>
      <header className="menu">
        <nav className="nav-menu">
           {/* Componente de navegação principal */}
          <div id='cont-left-nav'>
            <img src={Logo} alt="logo-nav" />
            <ul>
              <Link to="/" className="tlink">
                Home
              </Link>

              <Link to="/Contato" className="tlink">
                Contato
              </Link>

              <Link to="/Login" className="tlink">
                Login
              </Link>
            </ul>
          </div>
          
           {/* Ícones de ações rápidas */}
          <div id='icons-nav'>
            <img src={Cart} alt="carrinho"/>
            <img src={Profile} alt="carrinho"/>
          </div>
        </nav>
      </header>
    </>
  );
}
