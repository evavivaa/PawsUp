import Header from "../../components/Header"
import HomeBody from "../../components/HomeBody"
import React, {useState} from "react";
import SideBar from "../../components/SideBar";
import { HomeContainer } from "./styles";

const Home = () => {

    const [sideBarIsOpened, setSideBarIsOpened] = useState(false);

    return(
        <HomeContainer>
            <Header onClick={() => setSideBarIsOpened(true)} />
            <SideBar sideBarIsOpened={sideBarIsOpened} onClick={prev => setSideBarIsOpened(!prev)} />
            <HomeBody/>
        </HomeContainer>
    )
}

export default Home;