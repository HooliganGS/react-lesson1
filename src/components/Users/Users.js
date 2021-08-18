import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import avatar3219 from '../../assets/images/avatar3219.jpg';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onPageChanged =(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => (this.props.setUsers(response.data.items)))
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.selectedPage}
                                     onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {this.props.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : avatar3219} className={s.img}/>
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>FOLLOW</button> : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>UNFOLLOW</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </div>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Users;