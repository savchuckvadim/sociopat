import { connect } from "react-redux"
import { notificationsActions } from "../../../redux/reducers/notifications/notifications-reducer"
import { AppStateType } from "../../../redux/store"
import Notifications from "./Notifications"


const mapState = (state: AppStateType) => {

    return {
        notificationStatus: state.notifications.isActive,
        notifications: state.notifications.notifications,
    }
}

export default connect(mapState, {
    changeNotificationStatus: notificationsActions.changeNotificationStatus,
    resetNotifications: notificationsActions.resetNotifications,
    deleteNotification: notificationsActions.deleteNotification,

})(Notifications)