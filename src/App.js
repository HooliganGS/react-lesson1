import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav />
                <div className="app-wrapper-content">
                    <Route path='/Profile' render={() => <Profile/>}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Settings' component={Settings}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;

