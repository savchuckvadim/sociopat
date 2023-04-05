import { ConnectedProps, connect } from "react-redux"
import { sendPost } from "../../../../../redux/reducers/profile/profile-reducer"
import { AppDispatchType, AppStateType } from "../../../../../redux/store"
import SendPost from "./Send-Post"


const mapStateToProps = (state: AppStateType) => {
    return {
        user: state.auth.authUser,
        visitedUser: state.profile.visitedUser,
        isPostSending: state.profile.isPostSending
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {

    return { sendPost: (userId: number, profileId: number, body: string, img: string | null) => dispatch(sendPost(userId, profileId, body, img)) }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

// export type SendPostPropsType = typeof mapStateToProps | typeof mapDispatchToProps
const SendPostContainer: React.FC<ConnectedProps<typeof connector>> = (props) => {

    return (<SendPost {...props} />)
}

export default connect(mapStateToProps,
    mapDispatchToProps
)(SendPostContainer)