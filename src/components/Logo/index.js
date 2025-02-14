import './styles.css'
import logo from '../../imagens/logo.svg'

export default function Logo() {
    return (
        <div className='Logo'>
            <img src={logo} className='App-logo' alt='logo' />
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}
