const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
}


const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                DataMessage: [...state.DataMessage, {id: 6, message: state.newMessageText}]
            }
        }
        default :
            return state;
    }
}


export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const UpdateMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    }
}
export default DialogsReducer;