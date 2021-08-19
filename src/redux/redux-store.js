import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import PostDataReducer from "./PostDataReducer";
import FriendListReducer from "./FriendListReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    stateDialogs: DialogsReducer,
    statePostData: PostDataReducer,
    stateFriendList: FriendListReducer,
    stateUsers: UsersReducer,
    auth: authReducer,
})

let store = createStore(reducers);
export default store;