import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <section className='header-section'>
                <h1>Receitas Criativas</h1>
                <div className='search'>
                    <input type="search" name="search" />
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <Link to={'/loginProfile'}>
                    <FontAwesomeIcon icon={faUser} className='user-icon' />
                </Link>
            </section>
            <section className='header-category'>
                <ul className='category-list'>
                    <li><Link to={'/'}>Doces</Link></li>
                    <li><Link to={'/'}>Salgados</Link></li>
                    <li><Link to={'/'}>Bolos</Link></li>
                    <li><Link to={'/'}>Pizzas</Link></li>
                    <li><Link to={'/'}>Carnes</Link></li>
                    <li><Link to={'/'}>Peixes</Link></li>
                    <li><Link to={'/'}>Frangos</Link></li>
                    <li><Link to={'/'}>Tortas</Link></li>
                </ul>
            </section>
        </header>
    )
}

export { Header }