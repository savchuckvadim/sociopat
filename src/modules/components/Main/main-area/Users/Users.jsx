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
    let users = <>

        <div className={style.title__container}>
            <Title title={'People'} />

        </div>
        <div className={style.container}>
            {props.users.map(user =>
                <UserCard user={user} name={user.name} />)}
        </div>
        <div className={style.pages}>
            {pages.map(p => {

                return <span
                    onClick={() => { props.onPageChanged(p) }}

                    className={props.currentPage === p && style.selectPage}>
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