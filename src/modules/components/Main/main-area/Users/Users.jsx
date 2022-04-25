import axios from "axios";
import React from "react";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";
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
                        users={props.users}
                        user={user}
                        name={user.name}
                        follow={props.follow}
                        unFollow={props.unFollow}
                        setUsers={props.setUsers}
                        currentPage={props.currentPage}
                        pageSize={props.pageSize}
                    />)}
            </div>
            <div className={style.pages}>
                {pages.map(p => {
                    let spanClassName = style.span
                    props.currentPage === p ? spanClassName = style.selectPage : spanClassName = style.span
                    return <span
                        key={`user-page-${p}`}
                        onClick={() => { props.onPageChanged(p) }}

                        className={spanClassName}>

                        {p}
                    </span>
                })}
            </div>

        </>
    return (
        <>
            {props.isFetching ? loader : users}
        </>
    )


}




export default Users;