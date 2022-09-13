import Button, { ColorType, DisabledType } from "../Button"
import { FUPropsType } from "./Follow-Unfollow-Buttons-Container"


const FollowUnfollowButtons: React.FC<FUPropsType> = (props) => {

    let userId = props.user && props.user.id
    let colorOfButton: ColorType = 'red'
    let onButtonClick = props.followThunk
    let disable: DisabledType = props.followingInProgress.some(id => id === userId)
    let name = 'Follow'

    if (props.user && props.user.followed) {
        colorOfButton = 'grey'
        onButtonClick = props.unFollowThunk
        name = 'Unfollow'

    }
    return <Button
        name={name}
        border={12}
        disabled={disable}
        color={colorOfButton}
        onClick={() => {
            if (userId) {
                onButtonClick(userId, props.authUser)
            }


        }}
    />



}

export default FollowUnfollowButtons