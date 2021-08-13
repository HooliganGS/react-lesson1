import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import PostDataReducer from "./PostDataReducer";
import FriendListReducer from "./FriendListReducer";

let reducers = combineReducers({
    stateDialogs: DialogsReducer,
    statePostData: PostDataReducer,
    stateFriendList: FriendListReducer,
})

let store = createStore(reducers);
export default store;