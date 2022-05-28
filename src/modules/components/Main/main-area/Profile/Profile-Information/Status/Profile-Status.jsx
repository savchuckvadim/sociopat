import React, { useState, useEffect } from 'react'
import style from './Status.module.css'

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    let [unlimitSymbols, setUnlimit] = useState(false)
    
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {

        if (props.isCurrentUser) {
            setEditMode(true)
            setStatus(props.status)
        }
    }
    const deactivateEditMode = () => {
        if (!unlimitSymbols) {
            setEditMode(false)
            props.updateStatus(status)
        }



    }
    const onStatusChange = (e) => {
        if (e.currentTarget.value.length > 300) {
            setUnlimit(true)
        } else {
            setUnlimit(false)
        }
        setStatus(e.currentTarget.value)

    }

    
    let inputClass = unlimitSymbols ? style.inputError : style.input
    return (

        <form className={style.about}>
            <p className={style.error}>{unlimitSymbols && 'Превышено количество символов'}</p>
            {editMode & props.isCurrentUser
                ? <textarea
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus
                    className={inputClass}
                    rows='5'
                    cols={'82'}
                    value={status}
                >

                </textarea>
                : <p className={style.text}
                    onDoubleClick={activateEditMode}

                >

                    {props.status
                        ? props.status
                        : props.isCurrentUser && 'Напишите о себе'
                    }
                </p>
            }

        </form>

    )

}

export default ProfileStatus