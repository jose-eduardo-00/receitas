import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <h1>Header</h1>
            <FontAwesomeIcon icon={faUser} className='user-icon' />
        </header>
    )
}

export { Header }