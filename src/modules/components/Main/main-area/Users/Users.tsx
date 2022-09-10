import React from "react"
import { useEffect } from "react"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container"
import Title from "../../../Elements/Title/Title"
import Paginator from "./Paginator/Paginator"
import UserCard from "./User-Card"
import style from './Users.module.css'
import { UserType } from "../../../../types/types"
import { SetCurrentPageType } from "../../../../redux/reducers/paginator/paginator-reducer"
import {  UsersPropsType } from "./Users-Container"
// PropsFromRedux

// export interface PropsType  {
//     authUser: UserType
//     users: Array<UserType>
//     pageSize: number
//     totalItemsCount: number
//     currentPage: number
//     portionSize: number
//     currentPortion: number
//     isFetching: boolean
//     followingInProgress: Array<number>
//     //functions
//     requestUsers: (currentPage: number, pageSize: number) => void
//     followThunk: (userId: number, authUser: UserType) => void
//     unFollowThunk: (userId: number, authUser: UserType) => void
//     setCurrentPage: (page: number, portion: number) => SetCurrentPageType
// }


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
}) => {

    useEffect(() => {
        requestUsers(currentPage, pageSize)
    }, [])

console.log(users)
debugger
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
                        name={user.name}
                        followThunk={followThunk}
                        unFollowThunk={unFollowThunk}
                        followingInProgress={followingInProgress}
                        authUser={authUser}

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