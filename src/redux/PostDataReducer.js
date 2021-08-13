const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const PostDataReducer = (state, action)=>{

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.NewPostText,
                coun: 0
            };
            state.MyPostData.push(newPost);
            state.NewPostText = ('');
            break;
        case UPDATE_NEW_POST:
            state.NewPostText = action.newText;
            break;
    }
    return state;
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const PostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text,
    }
}

export default PostDataReducer;