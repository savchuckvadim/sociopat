
import React from "react";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";
import Paginator from "./Paginator/Paginator";
import UserCard from "./User-Card";
import style from './Users.module.css'


const Users = (props) => {
    
    // let isFetching = false
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let loader = <LightLoadingPageContainer />
    let users =
        <>
            <div className={style.title__container}>
                <Title title={'People'} />

            </div>
            <div className={style.container}>
                {props.users.map(user =>
                    <UserCard
                        key={`user-card-${user.id}`}
                        user={user}
                        name={user.name}
                        followThunk={props.followThunk}
                        unFollowThunk={props.unFollowThunk}
                        toggleFollowingInProgress={props.toggleFollowingInProgress}
                        followingInProgress={props.followingInProgress}
                        // setVisitedUser={props.setVisitedUser}
                        authUser={props.authUser}
                        
                    />)}
            </div>

            <div className={style.pages}>

                <Paginator 
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}

                />
            </div>

        </>
    return (
        <>
            {props.isFetching ? loader : users}
        </>
    )


}




export default Users;