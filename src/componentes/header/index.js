
import Logo from '../logo';
import OpcoesHeader from '../opcoesheader';
import IconesHeader from '../iconesheader';
import styled from 'styled-components';

const HeaderComponent = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

export function Header() {
    return (
        <HeaderComponent>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderComponent>
    );
}


export default Header