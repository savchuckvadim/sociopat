import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import Message from "./Message-Item/Message-Item"
import style from './Current-Dialog-Body.module.css'
import noMessage from '../../../../../../../assets/imgs/dialogs/no-messages.svg'
import { DialogType, MessageType, UserType } from "../../../../../../types/types"
import Day from "./Day/Day"
import { dialogsAPI } from '../../../../../../services/dialogs-api'

type PropsType = {
    dialog: DialogType
    messages: Array<MessageType>
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
    const [messages, setMessages] = useState([] as Array<MessageType>);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFetching, setIsFetching] = useState(true);


    useEffect(() => {
        if (isFetching) {
            dialogsAPI.getMessages(props.dialog.id, currentPage)
                .then(res => {
    
                   
                    if(res){
                        // @ts-ignore
                        console.log(res.messages)
                        debugger
                         // @ts-ignore
                         
                        setMessages(res.messages)
                        setCurrentPage(prevState => prevState + 1)
                    }
                   
                })
                .finally(() => setIsFetching(false))
        }
    }, [isFetching, props.dialog])


    useEffect(() => {
        console.log(refScroll.current)
        console.log(document)
        refScroll.current?.addEventListener('scroll', scrollHandler)
        return () => { refScroll.current?.removeEventListener('scroll', scrollHandler) }
    }, [])

    const scrollHandler = (e: any) => {
        // @ts-ignore

        let coefficient = e.target.scrollHeight - e.target.scrollTop - refScroll.current?.clientHeight
        if (coefficient < 100) {
            setIsFetching(true)
        } else {
            console.log('coefficient - больше 100')
            console.log(coefficient)
        }
        //    console.log('coefficient            :')
        //     console.log(coefficient)
        //     console.log('-------------------')
        //     console.log('общая высота страницы с учетом скрола :')
        //     console.log(e.target.scrollHeight)  //общая высота страницы с учетом скрола
        //     console.log('текущее положение скрола от верха страницы')
        //     console.log(e.target.scrollTop)     //текущее положение скрола от верха страницы  
        //     console.log('высота компоненты с сообщениями')
        //     console.log(refScroll.current?.clientHeight) //высота компоненты с сообщениями
        //     console.log('-------------------')
    }
    //////////////////////////////////////////////



    useLayoutEffect(() => {

        if (ref.current) {
            // @ts-ignore
            ref.current.scrollIntoView(0, 0);
        }


    }, [messages.length]);

    if (messages.length > 0) {

        body = messages.map((m: MessageType) => {
            date = m.created
            return <Message key={m.id} message={m} />

        })

    } else {

        body = <img className={style.nomessages} src={noMessage} alt="no-messages-icon" />
    }

    return (
        <div ref={refScroll} className={style.wrapper}>
            <Day date={date} />
            <div className={style.interior__wrapper} >

                {body}
                <div ref={ref}></div>
            </div>

        </div>


    )
}

export default BodyOfCurrentDialog