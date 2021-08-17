import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import PostDataReducer from "./PostDataReducer";
import FriendListReducer from "./FriendListReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    stateDialogs: DialogsReducer,
    statePostData: PostDataReducer,
    stateFriendList: FriendListReducer,
    stateUsers: UsersReducer,
})

let store = createStore(reducers);
export default store;