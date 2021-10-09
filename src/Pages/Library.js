import React from 'react';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import "./Component/CSS/Display-control.css";
import MiniNavbar from "./Component/MiniNavbar";
import MobiHeader from "./Component/MobiHeader";
import MobiNavbar from './Component/MobiNavbar';
import SearchHeader from "./Component/SearchHeader";
import LibraryBody from "./Component/LibraryBody";

function Explore() {
    return (
        <>
            <Header />
            <MobiHeader />
            <SearchHeader />
            <MiniNavbar active="opt3" />
            <Navbar  active="opt3" />
            <LibraryBody />
            <MobiNavbar active="opt3" />
        </>
    )
}

export default Explore;
