import logo from '../../imagens/logo.svg';
import './estilo.css'

function ExibeLogo() {
    return (<div className='logo'>
        <img src={logo} className='App-logo' alt='logo' />
        <p><strong>Alura</strong> books</p>
    </div>);
}

export default ExibeLogo