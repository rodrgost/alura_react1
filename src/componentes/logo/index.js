import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoComponent = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImgComponent = styled.img`
    margin: 10px;
`

function ExibeLogo() {
    return (<LogoComponent>
        <LogoImgComponent src={logo} alt='logo'/>
        <p><strong>Alura</strong> books</p>
    </LogoComponent>);
}

export default ExibeLogo