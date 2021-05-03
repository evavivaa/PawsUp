import styled from 'styled-components';
import { colors } from '../../styles/colors';
import pinkPrint from '../../assets/pinkPrint.png';
import bigDoggie from '../../assets/hero.png';

//Body
export const BodyWrapper = styled.div`
    padding-top: 80px;
    @media (max-width: 775px) {
        padding-top: 60px; 
    }
`

// Top Part
export const TopPartContainer = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    width: 100%;

    .findAMatch {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 40%; 

        div {
            width: 83%;

        }

        h2, span {
            color: ${colors.mainText};
        }

        h2 {
            font-size: 4rem;
            margin: 0;
        }

        span {
            font-size: 1.5rem;
            line-height: 40px;
        }

        .findAMatch {  //button
            align-self: flex-start;
        }

        @media (max-width: 775px) {
            width: 100%;
            min-height: 50vh;
            text-align: center;
            div {
                text-align: center;
            }
            h2{
                /* margin-top: 2rem; */
                font-size: 1.9rem;
            }
            span{
                font-size: 1.2rem;
            }
        }
    }

    .doggieImg {
        width: 60%;
        background: ${colors.pinkGradient};
        min-height: 60vh;
        border-radius: 0 0 0 150px;
        overflow: hidden;

        #pinkPrint {
            width: 100%;
            height: 100%;
            background-image: url(${pinkPrint});
            /* background-size: contain; */
            
            #bigDoggie {
                margin: auto;
                margin-top: 5%;
                height: 115%;
                background-image: url(${bigDoggie}); 
                background-size: contain; 
                background-repeat: no-repeat; 
                background-position: bottom;

            }
        }

        @media (max-width: 775px) {
            width: 100%;
            min-height: 40vh;
        }
    }
`

//Personalities
export const PersonalitiesContainer = styled.div`
    margin: auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    justify-content: space-evenly;
    align-items: center;

    h4 {
        width: 80%;
        margin: 0;
        font-size: 2rem;
        text-align: center;
        color: ${colors.mainText}
    }

    @media (max-width: 775px) {
        width: 100vw;
        justify-content: space-around;
        height: 35vh;
        h4 {
            font-size: 1.5rem;
        }
    }
`


export const CartoonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 38%;
    min-height: 140px;
    overflow: scroll;

    div {
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        align-items: center;
        span {
            color: ${colors.greenText};
            text-align: center;
            font-weight: bold;
            font-size: 1.3rem;
        }
    }

    @media (max-width: 775px) {
        width: 100%;
        div {
            margin: 0 1rem 0 1rem;
            img {
                width: 100px;

            }
        }
    }
`

//Button
export const Button = styled.button`
    width: 200px;
    height: 55px;
    border: none;
    border-radius: 50px;
    color: white;
    background: ${(props) => props.className === "findAMatchButton" ? colors.pink : colors.turquoise};
    font-weight: bold;
    font-size: 1.25rem;
    cursor: pointer;
    transition: 0.4s;
    
    :hover {
        background: ${(props) => props.className === "findAMatchButton" ? colors.darkPink : colors.darkturquoise};
    }

    :focus {
        outline: none;
    }
`

//Gray Paw Print
export const GrayPrintImg = styled.img`
    margin-left: -100px;
    width: 350px;
    position: absolute;
    top: 65vh;

    @media (max-width: 775px) {
        position: static;
        margin-left: -50px;
        width: 150px;
        height: 100px;
    }
`
