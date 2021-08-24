import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    MyPostData: [
        {id: 1, text: 'hello', coun: 0},
        {id: 2, text: 'privki', coun: 15},
        {id: 3, text: 'hello', coun: 20},
    ],
    profile: null,
    status: '',
};

const PostDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: action.newPostText,
                coun: 0
            };
            return {
                ...state,
                MyPostData: [...state.MyPostData, newPost],
                NewPostText: ('')
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

    }
    return state;
}
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
                dispatch(setStatus(status));
        })
}



export default PostDataReducer;