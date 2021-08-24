import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import PostDataReducer from "./PostDataReducer";
import FriendListReducer from "./FriendListReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    stateDialogs: DialogsReducer,
    statePostData: PostDataReducer,
    stateFriendList: FriendListReducer,
    stateUsers: UsersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;