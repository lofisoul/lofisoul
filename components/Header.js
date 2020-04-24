import Logo from '../svgs/lofisoul.svg';
import styled from 'styled-components';

const StyledHeader = styled.header`
    padding:1rem 3rem;
    background-color:#fff;
    box-shadow:0px 3px 5px 0px rgba(0,0,0,.07);
`

const StyledLogo = styled.h1`
    margin:0;
    line-height:0;
    svg {
        width:100px;
        height:auto;
    }
`

const Header = () => (
    <StyledHeader><StyledLogo><Logo /></StyledLogo></StyledHeader>
)

export default Header;