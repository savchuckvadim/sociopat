import Button from "../Button"


const FollowUnfollowButtons = (props) => {

let colorOfButton = 'red'
let onButtonClick = props.followThunk

let disable = props.followingInProgress.some(id => id === props.user.id)
let name = 'Follow'
  
    if (props.user.followed) {
        colorOfButton = 'grey'
        onButtonClick = props.unFollowThunk
        name = 'Unfollow'

    }
    return <Button
    name={name}
    border={12}
    disable={disable}
    color={colorOfButton}
    onClick={() => {
        
        onButtonClick(props.user.id, props.authUser)

    }}
    />
}

export default FollowUnfollowButtons