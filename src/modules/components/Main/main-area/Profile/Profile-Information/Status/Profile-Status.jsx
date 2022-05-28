import React, { useState, useEffect } from 'react'
import style from './Status.module.css'

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if(props.isCurrentUser){
        setEditMode(true)
        setStatus(props.status)
        }
    }
    const deactivateEditMode = () => {
       
            setEditMode(false)
            props.updateStatus(status)
        
       
    }
    const onStatusChange = (e) => {

        setStatus(e.currentTarget.value)

    }
  

    return (

        <div className={style.about}>
            {editMode & props.isCurrentUser
                ? <textarea
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus
                    className={style.input}
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

        </div>

    )
    // }
}

export default ProfileStatus