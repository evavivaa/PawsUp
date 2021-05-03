import React from 'react';
import { ListWrapper, SideBarContainer } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import PetsIcon from '@material-ui/icons/Pets';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const SideBar = (props) => {

    return (
        <SideBarContainer>            
            <div className={props.sideBarIsOpened ? "side-bar active" : "side-bar"}>
                <CloseIcon id="close-icon" onClick={props.onClick} fontSize="large" />
                <h2>Welcome to PawsUp</h2>
                <ListWrapper>
                    <div>
                        <SearchIcon/>
                        <span> Find A Match</span>
                    </div>
                    <div>
                        <PetsIcon/>
                        <span> Dog's Personalities</span>
                    </div>
                    <div>
                        <InfoIcon/>
                        <span> About Us</span>
                    </div>
                    <div>
                        <ContactPhoneIcon/>
                        <span> Contact Us</span>
                    </div>
                </ListWrapper>
            </div>
        </SideBarContainer>
    )
}

export default SideBar
