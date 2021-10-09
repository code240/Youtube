import React from 'react';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Body from './Component/Body';
import "./Component/CSS/Display-control.css";
import MiniNavbar from "./Component/MiniNavbar";
import MobiHeader from "./Component/MobiHeader";
import MobiNavbar from './Component/MobiNavbar';
import SearchHeader from "./Component/SearchHeader";

function Home() {
    return (
        <>
            <Header />
            <MobiHeader />
            <SearchHeader />
            <MiniNavbar  active="opt1" />
            <Navbar active="opt1" />
            <Body />
            <MobiNavbar active="opt1" />
        </>
    )
}

export default Home;
