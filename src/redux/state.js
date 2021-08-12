const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST ='UPDATE-NEW-POST';
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
                {message: 'hello'},
                {message: 'hi'},
                {message: 'hey'}
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                text: this._state.statePostData.NewPostText,
                coun: 0
            };
            this._state.statePostData.MyPostData.push(newPost);
            this._state.statePostData.NewPostText = ('');
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.statePostData.NewPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}
export const addPostActionCreator = ()=>{
    return {
        type:ADD_POST,
    }
}

export const PostChangeActionCreator =(text)=>{
    return{
        type:UPDATE_NEW_POST,
        newText:text,
    }
}

export default store;