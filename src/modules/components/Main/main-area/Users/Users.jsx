
import React from "react";
import { useEffect } from "react";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";
import Paginator from "./Paginator/Paginator";
import UserCard from "./User-Card";
import style from './Users.module.css'


const Users = (props) => {

    useEffect(() => { 
        props.requestUsers(props.currentPage, props.pageSize)
    }, [])
    
  

    let loader = <LightLoadingPageContainer />
    let users =
        <div className={style.wrapper}>
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
                    totalItemsCount={props.totalItemsCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    currentPortion={props.currentPortion}
                    portionSize={props.portionSize}
                    setCurrentPage={props.setCurrentPage}
                    requestUsers={props.requestUsers}
                   
                />
            </div>

        </div>
    return (
        <>
            {props.isFetching ? loader : users}
        </>
    )


}




export default Users;