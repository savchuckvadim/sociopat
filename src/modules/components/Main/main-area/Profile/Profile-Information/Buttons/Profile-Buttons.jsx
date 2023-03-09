import React, { useEffect } from "react"
import { useState } from "react"
import style from './Profile-Buttons.module.css'
import FollowUnfollowButtonsContainer from '../../../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons-Container'
import Button from '../../../../../Elements/Button/Button'
import { dialogsAPI } from '../../../../../../services/dialogs-api'
import { Navigate, NavLink } from 'react-router-dom'


const ProfileButtons = (props) => {
    const [dialogId, setDialogId] = useState(null)

    // useEffect(() => { //TODO
        
    // }, [dialogId])

    const onButtonClick = async (userId) => {
        debugger
        await props.getDialog(userId)
        

    }
    // let disable = props.followingInProgress.some(id => id === props.user.id)

    if (props.userId && props.visitedUser) {
        return (
            <div className={style.twoButtons}>
                <div className={style.button__wrapper}>
                    <FollowUnfollowButtonsContainer
                        user={props.visitedUser}

                    />
                </div>
                {/* <NavLink to={`../messages/dialog/${1}`}> */}
                {/* {если нажать на  Сенд Месседж - то запросим диалог у сервера по Юзер id
                        только после этого мы получим dialogId 
                        и только после этого можно сделать редирект на dialogs/dialgId
                        } */}
                <div className={style.button__wrapper}>
                    <Button
                        color={'grey'}
                        border={12}
                        grey={true}
                        name={'Send Message'}
                        onClick={ () => {
                            onButtonClick(props.visitedUser.id)
                        }}
                    />
                </div>
                {/* </NavLink> */}


            </div>
        )
    } else {
        return (<>

            <Button
                color={'grey'}
                border={12}
                name={'Edit profile'}
            />
            {/* <ModalEditProfile active={modalActive} setModalActive={setModalActive}/> */}

        </>
        )
    }



}

export default ProfileButtons