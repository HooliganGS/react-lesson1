import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/UsersReducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.stateUsers.users,
        pageSize: state.stateUsers.pageSize,
        totalUsersCount: state.stateUsers.totalUsersCount,
        currentPage: state.stateUsers.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)