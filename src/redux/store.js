import PostDataReducer from "./PostDataReducer";
import DialogsReducer from "./DialogsReducer";
import FriendListReducer from "./FriendListReducer";

let store = {
    _state: {
        statePostData: {
            MyPostData: [
                {id: 1, text: 'hello', coun: 0},
                {id: 2, text: 'privki', coun: 15},
                {id: 3, text: 'hello', coun: 20},
            ],
            NewPostText: 'It-camasutra'

        },
        stateDialogs: {
            DataDialogs: [
                {id: 1, name: 'Ilya'},
                {id: 2, name: 'Igor'},
                {id: 3, name: 'Anastasiya'},
                {id: 4, name: 'Vladimir'},
            ],
            DataMessage: [
                {id: 1, message: 'hello'},
                {id: 2, message: 'hi'},
                {id: 3, message: 'hey'}
            ],
            newMessageText: '',
        },
        stateFriendList: {
            DataFriend: [
                {name: 'Илья'},
                {name: 'Игорь'},
                {name: 'Вова'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.statePostData = PostDataReducer(this._state.statePostData, action);
        this._state.stateDialogs = DialogsReducer(this._state.stateDialogs, action);
        this._state.stateFriendList = FriendListReducer(this._state.stateFriendList, action);
        this._callSubscriber(this._state);
    }
}


export default store;