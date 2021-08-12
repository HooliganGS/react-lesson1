import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav DataFriend={props.stateApp.stateFriendList}/>
                <div className="app-wrapper-content">
                    <Route path='/Profile' render={() => <Profile
                        Post={props.stateApp.statePostData}
                        dispatch ={props.dispatch}
                        NewPostText={props.stateApp.statePostData.NewPostText}
                    />}/>
                    <Route path='/Dialogs' render={() => <Dialogs
                        Dialogs={props.stateApp.stateDialogs}/>}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

