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
    ]
}


const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageText
            return {
                ...state,
                DataMessage: [...state.DataMessage, {id: 6, message: body}]
            }
        }
        default :
            return state;
        }
    }


    export const sendMessageActionCreator = (newMessageText) => {
        return {
            type: SEND_MESSAGE,newMessageText
        }
    }
    export default DialogsReducer;