import React from "react"
import { useEffect } from "react"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container"
import Title from "../../../Elements/Title/Title"
import Paginator from "./Paginator/Paginator"
import UserCard from "./User-Card/User-Card"
import style from './Users.module.css'
import { UserType } from "../../../../types/types"
import { SetCurrentPageType } from "../../../../redux/reducers/paginator/paginator-reducer"
import {  UsersPropsType } from "./Users-Container"
// PropsFromRedux


const Users: React.FC<UsersPropsType> = ({
    authUser,
    users,
    pageSize,
    totalItemsCount,
    currentPage,
    portionSize,
    currentPortion,
    isFetching,
    followingInProgress,
    //functions
    requestUsers,
    followThunk,
    unFollowThunk,
    setCurrentPage,
    toggleFollowingInProgress
}) => {

    useEffect(() => {
        requestUsers(currentPage, pageSize)
    }, [])


    let loader = <LightLoadingPageContainer />
    let usersPage =
        <div className={style.wrapper}>
            <div className={style.title__container}>
                <Title title={'People'} />

            </div>
            <div className={style.container}>
                {users && users.map(user => user &&
                    <UserCard
                        key={`user-card-${user.id}`}
                        user={user}
                        followThunk={followThunk}
                        unFollowThunk={unFollowThunk}
                        followingInProgress={followingInProgress}
                        authUser={authUser}
                        toggleFollowingInProgress={toggleFollowingInProgress}

                    />)}
            </div>

            <div className={style.pages}>

                <Paginator
                    totalItemsCount={totalItemsCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    currentPortion={currentPortion}
                    portionSize={portionSize}
                    setCurrentPage={setCurrentPage}
                    requestUsers={requestUsers}

                />
            </div>

        </div>
    return (
        <>
            {isFetching ? loader : usersPage}
        </>
    )


}




export default Users