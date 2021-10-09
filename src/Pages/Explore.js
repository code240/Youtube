import React from 'react';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import "./Component/CSS/Display-control.css";
import MiniNavbar from "./Component/MiniNavbar";
import MobiHeader from "./Component/MobiHeader";
import MobiNavbar from './Component/MobiNavbar';
import SearchHeader from "./Component/SearchHeader";
import ExploreBody from "./Component/ExploreBody";
function Explore() {
    return (
        <>
            <Header />
            <MobiHeader />
            <SearchHeader />
            <MiniNavbar active="opt2" />
            <Navbar  active="opt2" />
            <ExploreBody />
            <MobiNavbar active="opt2" />
        </>
    )
}

export default Explore;
