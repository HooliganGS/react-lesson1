const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = "SEND-MESSAGE"

const DialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            break;
        case SEND_MESSAGE:
            let newMessage = {id: 6, message: state.newMessageText};
            state.DataMessage.push(newMessage);
            state.newMessageText = '';
            break;
    }
    return state;
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