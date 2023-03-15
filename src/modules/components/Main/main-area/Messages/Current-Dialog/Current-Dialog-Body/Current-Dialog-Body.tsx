import React, { useLayoutEffect, useRef } from 'react'
import Message from "./Message-Item/Message-Item"
import style from './Current-Dialog-Body.module.css'
import noMessage from '../../../../../../../assets/imgs/dialogs/no-messages.svg'
import { DialogType, MessageType, UserType } from "../../../../../../types/types"
import Day from "./Day/Day"

type PropsType = {
    dialog: DialogType
    // authUser: UserType
}

// TODO scroll paginate
// https://blog.saeloun.com/2022/07/08/react-custom-infinite-scroll-with-pagination


const BodyOfCurrentDialog: React.FC<PropsType> = (props) => {

    let body = null
    let date = null
    let ref = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {

        if (ref.current ) {
// @ts-ignore
            ref.current.scrollIntoView(0, 0);
        }

    
    }, [props.dialog.messages.length]);

    if (props.dialog.messages.length > 0) {

        body = props.dialog.messages.map((m: MessageType) => {
            date = m.created
            return <Message message={m} />

        })

    } else {

        body = <img className={style.nomessages} src={noMessage} alt="no-messages-icon" />
    }

    return (
        <div className={style.wrapper}>
            <Day date={date} />
            <div className={style.interior__wrapper} >

                {body}
                <div ref={ref}></div>
            </div>
            
        </div>


    )
}

export default BodyOfCurrentDialog