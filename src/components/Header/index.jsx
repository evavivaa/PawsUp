import React from 'react';
import {HamburgerWrapper, HeaderContainer, HeaderRightContainer} from './styles';
import Logo from '../../assets/logo.svg';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
    
    return (
        <HeaderContainer>
            <img src={Logo} alt="logo"/>
            <HeaderRightContainer>
                <a href="/">Find A Match</a>
                <a href="/">Dog's Personalities</a>
                <a href="/">About Us</a>
                <a href="/">Contact Us</a>
                <a href="/"><SearchIcon /></a>
            </HeaderRightContainer>
            <HamburgerWrapper>
                <MenuIcon id="hamburger" fontSize="large" onClick={props.onClick} />
            </HamburgerWrapper>
        </HeaderContainer>
    )
}

export default Header;