import React, { useState, useEffect } from 'react'
import style from './Status.module.css'

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
        setStatus(props.status)
    }
    const deactivateEditMode = () => {
        setEditMode(false)

        props.updateStatus(status)
    }
    const onStatusChange = (e) => {

        setStatus(e.currentTarget.value)


    }
    // render() {

    return (

        <div className={style.about}>
            {editMode
                ? <textarea
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus
                    className={style.input}
                    // type='textarea'
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
                        : 'Напишите о себе'
                    }
                </p>
            }

        </div>

    )
    // }
}

export default ProfileStatus