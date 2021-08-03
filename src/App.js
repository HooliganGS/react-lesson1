import React from "react";
import './App.css';
import Header from "./components/Header";
import Nav1 from "./components/Nav";
import Profile1 from "./components/Profile";

const App = () => {
    return (<div className='app-wrapper'>
            <Header/>
            <Nav1/>
            <Profile1/>
        </div>
    )
}

export default App;

