import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
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


    //for scroll//
    const refScroll = useRef<null | HTMLDivElement>(null);
    const [messages, setMessages] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        console.log(refScroll.current)
        console.log(document)
        refScroll.current?.addEventListener('scroll', scrollHandler)
        return () => {refScroll.current?.removeEventListener('scroll', scrollHandler)}
    }, [])

    const scrollHandler = (e: any) => {
       // @ts-ignore
       console.log('start            :')
        console.log(e.timeStamp)
        console.log('-------------------')
        console.log('scrollHeight')
        console.log(e.target.scrollHeight)
        console.log('-------------------')
        console.log(e.target.scrollTop)
        console.log('refScroll.current?.inert:')
        console.log(refScroll.current?.clientHeight)
        console.log('-------------------')
    }

    useLayoutEffect(() => {

        if (ref.current) {
            // @ts-ignore
            ref.current.scrollIntoView(0, 0);
        }


    }, [props.dialog.messages.length]);

    if (props.dialog.messages.length > 0) {

        body = props.dialog.messages.map((m: MessageType) => {
            date = m.created
            return <Message key={m.id} message={m} />

        })

    } else {

        body = <img className={style.nomessages} src={noMessage} alt="no-messages-icon" />
    }

    return (
        <div ref={refScroll}  className={style.wrapper}>
            <Day date={date} />
            <div className={style.interior__wrapper} >

                {body}
                <div ref={ref}></div>
            </div>

        </div>


    )
}

export default BodyOfCurrentDialog