import {renderThree} from "../renderJs";

let state = {
    statePostData: {
        MyPostData: [
            {id: 1, text: 'hello', coun: 0},
            {id: 2, text: 'privki', coun: 15},
            {id: 3, text: 'hello', coun: 20},
        ]
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
}
export let addPost = (postMessage) =>{
    let newPost = {
        id:5, text: postMessage, coun: 0
    };
    state.statePostData.MyPostData.push(newPost);
    renderThree(state);
}

export default state;