import { useEffect, useRef } from 'react'
import Message from '../main-area/Messages/Current-Dialog/Current-Dialog-Body/Message-Item/Message-Item'
import style from './Notifications.module.css'
import {  NotificationType } from '../../../types/types.js'
import { NotificationsActionsTypes } from '../../../redux/reducers/notifications/notifications-reducer.js'

type PropsType = {
    index: number
    notification: NotificationType
    deleteNotification: (notificationId: number) => NotificationsActionsTypes
}

const Notification: React.FC<PropsType> = ({
    index,
    notification,
    deleteNotification,
}) => {

    useEffect(() => {

        setTimeout(() => {
            deleteNotification(notification.message.id)
        }, 20000)

    }, [])


    return (

        <div style={{ opacity: 1.5 / (index + 1) }} className={style.notification}>

            <Message
                key={`notifi-message-${notification.message.id}`}
                message={notification.message}
                isNotification={true}
            />
        </div>
    )
}

type NotificationsPropsType = {
    notificationStatus: boolean
    notifications: Array<NotificationType>
    changeNotificationStatus: (bool: boolean) => NotificationsActionsTypes
    resetNotifications: () => NotificationsActionsTypes
    deleteNotification: (notificationId: number) => NotificationsActionsTypes
}
const Notifications: React.FC<NotificationsPropsType> = (props) => {

    return props.notificationStatus && props.notifications.length > 0 ? (

        <div className={style.container}>

            <div className={style.header}>
                <div className={style.functions}>
                    <div onClick={props.resetNotifications} className={style.reset}>
                        <p>скрыть</p>
                    </div>

                </div>
            </div>
            <div className={style.notifications}>
                {props.notifications.map((n, i) =>
                    <Notification
                        key={`notification-${n.message.id}- ${i}`}
                        index={i}
                        notification={n}
                        deleteNotification={props.deleteNotification}
                    />)}
            </div>

        </div>

    )
        : null
}

export default Notifications