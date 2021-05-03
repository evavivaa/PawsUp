import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SideBarContainer = styled.div`

    .side-bar {
        height: 100vh;
        width: 75%;
        background-color: ${colors.lightPink};
        position: fixed;
        color: white;
        transition: 1s;
        right: -100%;
        padding-left: 2rem;
    }

    .side-bar.active {
        right: 0;
        transition: 1s;
    }

    #close-icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        :hover {
            cursor: pointer;
            color: ${colors.turquoise};
        }
    }
    
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: space-around;
    font-size: 1.25rem;

    div {
        display: flex;
        align-items: center;
        span {
            padding-left: 1rem;
        }

        :hover {
            color: ${colors.turquoise};
            transition: all 0.5s;
            cursor: pointer;
        }
    }
`