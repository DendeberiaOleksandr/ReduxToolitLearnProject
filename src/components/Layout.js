import React from 'react';
import { Outlet } from "react-router-dom"
import Header from "./Header";

function Layout(props) {
    return (
        <>
            <Header/>
            <main className="App">
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;