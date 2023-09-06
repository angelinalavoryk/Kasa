import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import './_Header.scss'

function Header() {
    return (
      <header className='header'>
        <div className='header_logo'>
          <Link to='/'>
            <img src={logo} alt='kasa-logo' className='header_logo_img' />
          </Link>
        </div>
        <nav className='header_nav'>
          <ul className='header_nav_list'>
            <li className='header_nav_item'>
              <Link to='/' className='header_nav_link'>
                Accueil
              </Link>
            </li>
            <li className='header_nav_item'>
              <Link to='/about' className='header_nav_link'>
                A propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
export default Header;