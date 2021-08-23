import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    MyPostData: [
        {id: 1, text: 'hello', coun: 0},
        {id: 2, text: 'privki', coun: 15},
        {id: 3, text: 'hello', coun: 20},
    ],
    NewPostText: 'It-camasutra',
    profile: null,
};

const PostDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.NewPostText,
                coun: 0
            };
            return{
                ...state,
                MyPostData: [...state.MyPostData, newPost],
                NewPostText: ('')
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                NewPostText:action.newText}
        }
        case SET_USER_PROFILE:{
            return{
                ...state,
                profile:action.profile
            }
        }
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
export const setUserProfile = (profile) => {
    return{
        type: SET_USER_PROFILE, profile
    }
}
export const getUserProfile = (userId) => (dispatch)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}


export default PostDataReducer;