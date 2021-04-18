import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px; 
    width: 100%;
    box-shadow: 0px 7px 10px rgba(0,0,0,0.07);
    background: white;

    img {
        margin-left: 2rem;
    }
    /* * {
        border: solid 1.5px red;
    } */

    @media (max-width: 775px) {
        min-height: 60px; 
    }
`

export const HeaderRightContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 520px; 
    width: 55%;
    padding-left: 1rem;
    margin-right: 2rem;

    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1rem;
        font-family: sans-serif;
        color: ${colors.mainText};

        :hover {
            color: ${colors.pink}
        }
    }

    @media (max-width: 775px) {
        display: none;
    }
`

export const HamburgerWrapper = styled.div`
    display: none;

    #hamburger {
        width: 70px;
        :hover {
            cursor: pointer;
            color: ${colors.pink};
        }
    }

    @media (max-width: 775px) {
        display: inline;
    }
`