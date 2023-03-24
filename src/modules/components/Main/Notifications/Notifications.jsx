import { useEffect, useRef } from 'react'
import Message from '../main-area/Messages/Current-Dialog/Current-Dialog-Body/Message-Item/Message-Item.tsx'
import style from './Notifications.module.css'

const Notification = ({
    index,
    notification,
    deleteNotification,
}) => {

   

    useEffect(() => {

        setTimeout(() => { 
            deleteNotification(notification.id) }, 20000)

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


const Notifications = (props) => {

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
                        key={`notification-${n.id}- ${i}`}
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