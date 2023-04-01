import React, { useState, useEffect } from 'react'
import style from './About-Me.module.scss'



const AboutMe = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [aboutMe, setAboutMe] = useState(props.aboutMe)
    let [unlimitSymbols, setUnlimit] = useState(false)
    
    useEffect(() => {
        setAboutMe(props.aboutMe)
    }, [props.aboutMe])

    const activateEditMode = () => {

        if (props.isCurrentUser) {
            setEditMode(true)
            setAboutMe(props.aboutMe)
        }
    }
    const deactivateEditMode = () => {
        if (!unlimitSymbols) {
            setEditMode(false)
            props.updateAboutMe(aboutMe)
        }



    }
    const onStatusChange = (e) => {
        if (e.currentTarget.value.length > 300) {
            setUnlimit(true)
        } else {
            setUnlimit(false)
        }
        setAboutMe(e.currentTarget.value)

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
                    value={aboutMe}
                >

                </textarea>
                : <p className={style.text}
                    onDoubleClick={activateEditMode}

                >

                    {props.aboutMe
                        ? props.aboutMe
                        : props.isCurrentUser && 'Напишите о себе'
                    }
                </p>
            }

        </form>

    )

}

export default AboutMe