import React from 'react';
import { BodyWrapper, Button, CartoonWrapper, PersonalitiesContainer, TopPartContainer, GrayPrintImg } from './styles';
import confident from '../../assets/icon-2.png';
import adaptable from '../../assets/icon-1.png';
import shy from '../../assets/icon-3.png';
import independent from '../../assets/icon-4.png';
import laidback from '../../assets/icon-5.png';
import grayPrint from '../../assets/grayPrint.png';

const HomeBody = () => {

    return(
        <BodyWrapper>
            <TopPartContainer>
                <div className="findAMatch">
                    <div>
                        <h2>What's meant to be will always find a way.</h2>
                    </div>
                    <div>
                        <span>PawsUp help you to find the best </span>
                        <br/>
                        <span>partner for your dearest fluffy friend</span>
                    </div>
                    <div>
                        <Button className="findAMatchButton">Find A Match</Button>
                    </div>
                </div>
                <div className="doggieImg">
                    <div id="pinkPrint">
                        <div id="bigDoggie"></div>
                    </div>
                </div>
            </TopPartContainer>
            <GrayPrintImg src={grayPrint} alt="paw-print-img" />
            <PersonalitiesContainer>
                <h4>Dogs have these 5 major personality types</h4>
                <CartoonWrapper>
                    <div>
                        <img src={confident} alt="confident-dog-img" />
                        <span>Confident</span>
                    </div>
                    <div>
                        <img src={shy} alt="shy-dog-img" />
                        <span>Shy</span>
                    </div>
                    <div>
                        <img src={independent} alt="independent-dog-img" />
                        <span>Independent</span>
                    </div>
                    <div>
                        <img src={laidback} alt="laidback-dog-img" />
                        <span>Laidback</span>
                    </div>
                    <div>
                        <img src={adaptable} alt="adaptable-dog-img" />
                        <span>Adaptable</span>
                    </div>
                </CartoonWrapper>
                <Button className="learnMore"><span>Learn More</span></Button>
            </PersonalitiesContainer>
        </BodyWrapper>
    )
}

export default HomeBody;


  