import './estilo.css'
import Logo from '../logo';
import OpcoesHeader from '../opcoesheader'
import IconesHeader from '../iconesheader'

function Header(){
    return (
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>        
      </header>       
    )
}

export default Header